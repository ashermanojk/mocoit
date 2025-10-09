import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, company, service, message } = body;

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    // Send admin notification email
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL!,
      subject: `🔔 New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Company:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${company || 'Not provided'}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Service:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${service || 'Not specified'}</td>
            </tr>
          </table>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4CAF50; line-height: 1.6;">
              ${message}
            </p>
          </div>
        </div>
      `,
    });

    if (adminError) {
      console.error('Error sending admin email:', adminError);
      return NextResponse.json(
        { message: 'Failed to send notification email' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const { data: userData, error: userError } = await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: `Thank you for contacting us, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">Thank you for reaching out!</h2>
          
          <p style="line-height: 1.6; color: #333;">
            Hi <strong>${name}</strong>,
          </p>
          
          <p style="line-height: 1.6; color: #333;">
            Thank you for reaching out to us! We've successfully received your message and our team will review it shortly.
          </p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Submission Details:</h3>
            <p style="margin: 10px 0;"><strong>Service:</strong> ${service || 'Not specified'}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong> ${message || 'Not specified'}</p>
          </div>
          
          <p style="line-height: 1.6; color: #333;">
            We'll get back to you within <strong>24 hours</strong> with a detailed response.
          </p>
          
          <p style="line-height: 1.6; color: #333;">
            Best regards,<br>
            <strong>${process.env.FROM_NAME} Team</strong>
          </p>
        </div>
      `,
    });

    if (userError) {
      console.error('Error sending user confirmation email:', userError);
      return NextResponse.json(
        { 
          message: 'Message received, but confirmation email failed',
          adminEmailSent: true 
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Emails sent successfully',
        adminEmailId: adminData?.id,
        userEmailId: userData?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { message: 'Failed to send emails. Please try again later.' },
      { status: 500 }
    );
  }
}

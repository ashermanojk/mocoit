import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, phone, company, service, budget, message } = body

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    )
  }

  try {
    // Gmail SMTP transporter configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.gmail.com
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // false for STARTTLS on port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // App password, not regular password
      },
      // Gmail-specific settings
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify connection
    await transporter.verify()

    // Admin notification email
    const adminMailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🔔 New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background-color: white; margin: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #667eea;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${phone}</td></tr>` : ''}
              ${company ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${company}</td></tr>` : ''}
              ${service ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong>Service:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${service}</td></tr>` : ''}
              ${budget ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong>Budget:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${budget}</td></tr>` : ''}
            </table>

            <div style="margin-top: 25px;">
              <h3 style="color: #333;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 6px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Your Contact Form Submission" 
                 style="color: white; text-decoration: none; font-weight: bold; font-size: 16px;">
                📧 Reply to ${name}
              </a>
            </div>
          </div>
        </div>
      `,
    }

    // User confirmation email
    const userMailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: '✨ Thank you for contacting us!',
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Message Received! ✨</h1>
          </div>
          
          <div style="padding: 30px; background-color: white;">
            <h2 style="color: #333;">Hi ${name},</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              Thank you for reaching out to us! We've successfully received your message and our team will review it shortly.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #667eea;">
              <h3 style="margin-top: 0; color: #333;">📋 Your Submission Summary:</h3>
              <p><strong>Service:</strong> ${service || 'Not specified'}</p>
              <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
              <div style="margin-top: 15px;">
                <strong>Your Message:</strong>
                <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 8px; font-style: italic;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding: 20px; border-radius: 8px; text-align: center; color: white; margin: 25px 0;">
              <h3 style="margin: 0; font-size: 18px;">⏰ What's Next?</h3>
              <p style="margin: 10px 0 0 0;">We'll get back to you within <strong>24 hours</strong> with a detailed response.</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              In the meantime, feel free to check out our website or follow us on social media for updates and insights.
            </p>

            <div style="border-top: 2px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center; color: #666;">
              <p style="margin: 0;">Best regards,</p>
              <p style="margin: 5px 0 0 0; font-weight: bold; color: #667eea;">${process.env.FROM_NAME} Team</p>
            </div>
          </div>
        </div>
      `,
    }

    // Send both emails concurrently
    const results = await Promise.allSettled([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ])

    // Check if both emails were sent successfully
    const adminResult = results[0]
    const userResult = results[1]

    if (adminResult.status === 'rejected' || userResult.status === 'rejected') {
      console.error('Email sending failed:', {
        admin: adminResult.status === 'rejected' ? adminResult.reason : 'success',
        user: userResult.status === 'rejected' ? userResult.reason : 'success'
      })
      return NextResponse.json(
        { message: 'Partial email delivery failure' },
        { status: 207 } // Multi-status
      )
    }

    return NextResponse.json(
      { 
        message: 'Emails sent successfully',
        adminMessageId: adminResult.status === 'fulfilled' ? adminResult.value.messageId : null,
        userMessageId: userResult.status === 'fulfilled' ? userResult.value.messageId : null
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { 
        message: 'Failed to send email',
        error: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    )
  }
}

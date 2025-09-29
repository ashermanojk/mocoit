// components/contact/ContactInfo.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
} from 'lucide-react'

const contactDetails = [
  /* {
    icon: MapPin,
    title: "Office Address",
    details: [
      "MOCOIT Labs LLP",
      "3rd floor, Smart Parc Building",
      "Infopark - Smart City Short Rd",
      "Kunnumpuram - 400069",
      "Kakkanad, Kerala, India"
    ]
  }, */
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "+91 63661 05263",
      "+91 72592 68801",
    ]
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: [
      "info@mocoitlabs.com",
      "projects@mocoitlabs.com",
      "support@mocoitlabs.com"
    ]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed",
      "IST (GMT +5:30)"
    ]
  }
]

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Information</CardTitle>
            <p className="text-muted-foreground">
              Multiple ways to reach us. We&apos;re here to help with your digital transformation journey.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {contactDetails.map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <div className="space-y-1">
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default ContactInfo

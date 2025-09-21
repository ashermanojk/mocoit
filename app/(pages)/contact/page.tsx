// pages/contact.tsx or app/contact/page.tsx
'use client'

import React from 'react'
import ContactHero from '@/components/sections/ContactHero'
import ContactForm from '@/components/sections/ContactForm'
import ContactInfo from '@/components/sections/ContactInfo'/* 
import ContactMap from '@/components/sections/ContactMap' */
import ContactCallToAction from '@/components/sections/ContactCallToAction'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center h-full">
          <ContactInfo />
        </div>
        <div className="flex flex-col justify-center h-full">
          <ContactForm />
        </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ContactMap />
        </div>
      </section> */}

      <ContactCallToAction />
    </div>
  )
}

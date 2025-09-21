// components/contact/ContactCallToAction.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react'

const ContactCallToAction = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your
              <br />
              <span className="text-primary-foreground/90">Digital Transformation?</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Don&apos;t wait for tomorrow. Your digital transformation journey starts with a single conversation.
              Let&apos;s discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-semibold text-primary-foreground mb-2">Free Consultation</div>
              <div className="text-sm">30-minute strategy session</div>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-semibold text-primary-foreground mb-2">Quick Response</div>
              <div className="text-sm">Reply within 24 hours</div>
            </div>
            <div className="text-center">
              <ArrowRight className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-semibold text-primary-foreground mb-2">Project Kickoff</div>
              <div className="text-sm">Start within 1-2 weeks</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactCallToAction

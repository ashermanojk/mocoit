// components/about/AboutCallToAction.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle, Settings } from 'lucide-react'
import Link from 'next/link'

export default function AboutCallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Work with 
            <br />
            <span className="text-primary-foreground/90">MOCOIT Labs?</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Now that you know our story, let&apos;s write yours together. Explore our comprehensive 
            digital solutions or get in touch to discuss your next project.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-background text-primary hover:bg-background/90 px-8"
              asChild
            >
              <Link href="/services">
                <Settings className="mr-2 w-5 h-5" />
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-foreground hover:bg-background hover:text-foreground px-8"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="mr-2 w-5 h-5" />
                Start a Conversation
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground mb-2">Fast Delivery</div>
              <div className="text-sm">Compact team that works really fast</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground mb-2">Global Experience</div>
              <div className="text-sm">40+ years combined expertise</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground mb-2">Proven Results</div>
              <div className="text-sm">Trusted by enterprises worldwide</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


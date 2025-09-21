// components/products/ProductsCallToAction.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'
const ProductsCallToAction = () => {
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
              Ready to Build Your Next
              <br />
              <span className="text-primary-foreground/90">Digital Product?</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              From proof of concept to full-scale deployment, we&apos;re your trusted partner 
              in digital transformation. Let&apos;s create something amazing together.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/technology">
              <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
                View Technologies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-foreground px-8">
                <MessageCircle className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-semibold text-primary-foreground mb-2">90+ Years</div>
              <div className="text-sm">Combined Experience</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-semibold text-primary-foreground mb-2">50+ Projects</div>
              <div className="text-sm">Successfully Delivered</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-semibold text-primary-foreground mb-2">24/7 Support</div>
              <div className="text-sm">Post-deployment Care</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCallToAction

// components/products/ProductsHero.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react'
import Link from 'next/link'

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Crafting Digital Solutions for
            <br />
            <span className="text-primary">Real-World Needs</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            We are a digital solutions and platform-enabling company crafting compelling web and mobile applications, 
            hardware solutions, software solutions and web platforms focused on startups to large enterprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#featured-products" >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Our Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </Link>
            <Link href="/contact">
            <Button variant="outline" size="lg">
              Start Your Project
            </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Mobile Applications</h3>
              <p className="text-sm text-muted-foreground">Native iOS, Android & Cross-platform solutions</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Web Platforms</h3>
              <p className="text-sm text-muted-foreground">E-commerce, Enterprise & Custom web solutions</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">IoT Solutions</h3>
              <p className="text-sm text-muted-foreground">Hardware integration & Digital connectivity</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


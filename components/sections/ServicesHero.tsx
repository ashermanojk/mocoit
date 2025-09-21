// components/services/ServicesHero.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20 lg:pt-32 pb-12 lg:pb-16">
      {/* Improved background with subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge 
            variant="outline" 
            className="mb-6 text-primary border-primary/30 bg-background/80 backdrop-blur-sm px-4 py-2 text-sm"
          >
            Digital Solutions & Services
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Services & <span className="text-primary">Solutions</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
            We create customer-centric, purpose-driven solutions that transform the competency of your business. 
            Whether it&apos;s an app, an enterprise solution or a website, we design and build it with smart, efficient code.
          </p>
          
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero

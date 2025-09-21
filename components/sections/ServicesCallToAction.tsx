// components/services/ServicesCallToAction.tsx
'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'
const ServicesCallToAction = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            From Proof of Concept (POC) to large-scale deployment, we offer composable modules 
            and engineered user experiences, adapting swiftly to evolving needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300 flex items-center group">
              <MessageCircle className="mr-2 w-5 h-5" />
              Discuss Your Project
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground mb-2">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCallToAction

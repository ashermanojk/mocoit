// components/products/ProductCategories.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  Building, 
  Wifi, 
  Users
} from 'lucide-react'

const productCategories = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native iOS, Android, and cross-platform mobile solutions",
    features: [
      "iOS & Android Development",
      "React Native Solutions", 
      "Mobile E-commerce Apps",
      "Enterprise Mobile Apps"
    ],
    count: "25+"
  },
  {
    icon: Globe,
    title: "Web Platforms",
    description: "Scalable web applications and digital platforms",
    features: [
      "Custom Web Applications",
      "Progressive Web Apps",
      "API Development",
      "Cloud Integration"
    ],
    count: "30+"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Multi-vendor and single vendor e-commerce platforms",
    features: [
      "Multi-vendor Marketplaces",
      "B2B E-commerce",
      "Payment Integration",
      "Inventory Management"
    ],
    count: "15+"
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Business management and automation systems",
    features: [
      "ERP Systems",
      "CRM Solutions",
      "Workflow Automation",
      "Business Intelligence"
    ],
    count: "20+"
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description: "Internet of Things and hardware integration",
    features: [
      "Sensor Networks",
      "Cloud Connectivity",
      "Real-time Monitoring",
      "Smart Automation"
    ],
    count: "10+"
  },
  {
    icon: Users,
    title: "Digital Platforms",
    description: "Community and service-based platforms",
    features: [
      "Social Platforms",
      "Service Marketplaces",
      "Professional Networks",
      "Content Management"
    ],
    count: "12+"
  }
]

const ProductCategories = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From mobile apps to enterprise solutions, we build digital products 
            that transform businesses across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-primary">{category.count}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories

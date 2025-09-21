// components/services/SolutionsGrid.tsx
'use client'

import React from 'react'
import { 
  ShoppingBag, 
  Tag, 
  Wifi, 
  Home, 
  Car, 
  MapPin
} from 'lucide-react'

const solutions = [
  {
    icon: ShoppingBag,
    title: "Mobile-Ready E-commerce Solutions",
    description: "E-commerce websites using responsive design that are natively friendly to mobile navigation. Optimized for speed, security, and social media compatibility.",
    highlights: ["Mobile-First Design", "Speed Optimization", "Secure Transactions", "Social Integration"]
  },
  {
    icon: Tag,
    title: "Electronic Shelf Label Systems",
    description: "Smart ESL systems to remotely change price displays across shelves and stores. Wireless communication network for automatic price updates and inventory management.",
    highlights: ["Remote Price Control", "Wireless Updates", "Inventory Display", "Promotion Management"]
  },
  {
    icon: Wifi,
    title: "Customised Sensor Networks",
    description: "Sensor networks with cloud storage and remote management. Wireless monitoring, recording, and data analysis for various business environments.",
    highlights: ["Cloud Integration", "Remote Management", "Data Analytics", "Wireless Connectivity"]
  },
  {
    icon: Home,
    title: "Smart Home & Office Automation",
    description: "IoT-based automation solutions that are reliable and cost-effective. Climate control, security systems, and mobile access control for enhanced convenience.",
    highlights: ["Climate Control", "Security Systems", "Mobile Access", "Energy Efficiency"]
  },
  {
    icon: Car,
    title: "Smart Parking Solutions",
    description: "IoT-powered e-parking solutions using sensors, smart applications, and real-time data to optimize parking search with integrated payment systems.",
    highlights: ["IoT Sensors", "Real-time Data", "Online Payments", "Slot Optimization"]
  },
  {
    icon: MapPin,
    title: "Smart Asset Tracking Solutions",
    description: "Wireless tracking and monitoring solutions for business assets, inventory, and assets in transit. Customized for diverse industries from automation to retail.",
    highlights: ["Wireless Tracking", "Real-time Monitoring", "Industry Customization", "ROI Enhancement"]
  }
]

const SolutionsGrid = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            THE SOLUTIONS WE DEVELOP
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                <solution.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {solution.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary/60 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsGrid

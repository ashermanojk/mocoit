"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Smartphone, Monitor, Settings, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesAccordion() {
  const serviceCategories = [
    {
      id: "mobile",
      title: "Mobile Development",
      icon: Smartphone,
      services: [
        {
          title: "Native iOS Development",
          description: "High-performance native applications built specifically for iOS devices",
          features: ["Swift/Objective-C", "App Store optimization", "iOS-specific features", "Performance optimization"]
        },
        {
          title: "Native Android Development", 
          description: "Robust Android applications leveraging platform-specific capabilities",
          features: ["Kotlin/Java", "Google Play optimization", "Material Design", "Android SDK integration"]
        },
        {
          title: "Cross-Platform Solutions",
          description: "Efficient development for both platforms with shared codebase",
          features: ["React Native", "Code reusability", "Faster deployment", "Cost-effective"]
        }
      ]
    },
    {
      id: "enterprise",
      title: "Enterprise Solutions", 
      icon: Monitor,
      services: [
        {
          title: "Windows Desktop Applications",
          description: "Powerful desktop solutions for Windows environments",
          features: [".NET Framework", "WPF/WinForms", "Database integration", "Enterprise security"]
        },
        {
          title: "Workflow Automation",
          description: "Streamline business processes with intelligent automation", 
          features: ["Process optimization", "Task automation", "Integration APIs", "Real-time monitoring"]
        },
        {
          title: "Custom E-Commerce Platforms",
          description: "Tailored online commerce solutions for unique business needs",
          features: ["Custom features", "Payment integration", "Inventory management", "Analytics dashboard"]
        },
        {
          title: "ERP Systems",
          description: "Integrated enterprise resource planning solutions",
          features: ["Resource management", "Financial integration", "Reporting tools", "Multi-module support"]
        }
      ]
    },
    {
      id: "consulting",
      title: "IT Consulting",
      icon: Settings,
      services: [
        {
          title: "Strategic IT Consulting", 
          description: "Expert guidance for digital transformation initiatives",
          features: ["Technology roadmap", "Architecture design", "Best practices", "Risk assessment"]
        },
        {
          title: "Security Implementation",
          description: "Robust security measures and governance frameworks",
          features: ["Security audits", "Compliance frameworks", "Data protection", "Access control"]
        },
        {
          title: "Full Development Lifecycle",
          description: "End-to-end development from concept to deployment",
          features: ["Requirements analysis", "Agile development", "Quality assurance", "Deployment support"]
        },
        {
          title: "L2 Support Services",
          description: "Reliable ongoing support and maintenance", 
          features: ["24/7 monitoring", "Issue resolution", "Performance optimization", "Regular updates"]
        }
      ]
    }
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Core Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Comprehensive Core Services for
            <br />
            <span className="text-primary">Digital Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            Beyond products, we offer end-to-end services that empower businesses to thrive in the digital landscape,
            from development to deployment and support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {serviceCategories.map((category) => (
              <AccordionItem 
                key={category.id} 
                value={category.id}
                className="border border-border rounded-lg bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">{category.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid gap-6 mt-4">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: serviceIndex * 0.1 }}
                        className="border-l-2 border-primary/20 pl-4"
                      >
                        <h4 className="font-semibold mb-2">{service.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your <span className="text-primary">Digital Journey?</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            From Proof of Concept to full deployment, we adapt swiftly to your evolving needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
            <Button variant="outline" size="lg">
              Read More About Us!
            </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

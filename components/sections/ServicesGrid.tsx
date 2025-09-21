"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Smartphone, Monitor, Settings, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesSection() {
  const serviceCategories = [
    {
      id: "mobile",
      title: "Mobile Development",
      icon: Smartphone,
      services: [
        {
          title: "Native iOS Development",
          description: "High-performance native applications built specifically for iOS devices",
          features: [
            "Swift/Objective-C",
            "App Store optimization",
            "iOS-specific features",
            "Performance optimization",
          ],
        },
        {
          title: "Native Android Development",
          description: "Robust Android applications leveraging platform-specific capabilities",
          features: ["Kotlin/Java", "Google Play optimization", "Material Design", "Android SDK integration"],
        },
        {
          title: "Cross-Platform Solutions",
          description: "Efficient development for both platforms with shared codebase",
          features: ["React Native", "Code reusability", "Faster deployment", "Cost-effective"],
        },
      ],
    },
    {
      id: "enterprise",
      title: "Enterprise Solutions",
      icon: Monitor,
      services: [
        {
          title: "Windows Desktop Applications",
          description: "Powerful desktop solutions for Windows environments",
          features: [".NET Framework", "WPF/WinForms", "Database integration", "Enterprise security"],
        },
        {
          title: "Workflow Automation",
          description: "Streamline business processes with intelligent automation",
          features: ["Process optimization", "Task automation", "Integration APIs", "Real-time monitoring"],
        },
        {
          title: "Custom E-Commerce Platforms",
          description: "Tailored online commerce solutions for unique business needs",
          features: ["Custom features", "Payment integration", "Inventory management", "Analytics dashboard"],
        },
        {
          title: "ERP Systems",
          description: "Integrated enterprise resource planning solutions",
          features: ["Resource management", "Financial integration", "Reporting tools", "Multi-module support"],
        },
      ],
    },
    {
      id: "consulting",
      title: "IT Consulting",
      icon: Settings,
      services: [
        {
          title: "Strategic IT Consulting",
          description: "Expert guidance for digital transformation initiatives",
          features: ["Technology roadmap", "Architecture design", "Best practices", "Risk assessment"],
        },
        {
          title: "Security Implementation",
          description: "Robust security measures and governance frameworks",
          features: ["Security audits", "Compliance frameworks", "Data protection", "Access control"],
        },
        {
          title: "Full Development Lifecycle",
          description: "End-to-end development from concept to deployment",
          features: ["Requirements analysis", "Agile development", "Quality assurance", "Deployment support"],
        },
        {
          title: "L2 Support Services",
          description: "Reliable ongoing support and maintenance",
          features: ["24/7 monitoring", "Issue resolution", "Performance optimization", "Regular updates"],
        },
      ],
    },
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
        >
          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto p-1 bg-muted/50">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <category.icon className="w-5 h-5" />
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-3">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Agile Engagement &<span className="text-primary"> User Experience</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                From Proof of Concept (POC) to large-scale deployment, we offer composable modules and engineered user
                experiences, adapting swiftly to evolving needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-background/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">POC</div>
                <div className="text-sm text-muted-foreground">Proof of Concept</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">MVP</div>
                <div className="text-sm text-muted-foreground">Minimum Viable Product</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">Scale</div>
                <div className="text-sm text-muted-foreground">Full Deployment</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Ongoing Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

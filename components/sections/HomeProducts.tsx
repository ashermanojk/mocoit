"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Cloud, Cpu, ArrowRight } from "lucide-react"
import Link from "next/link"
export function ProductsSection() {
  const products = [
    {
      icon: Smartphone,
      title: "Mobile-Ready E-Commerce",
      description:
        "Robust B2B/B2C platform for Android and iOS, fully customizable to integrate with your unique business workflows.",
      features: [
        "Cross-platform compatibility",
        "Custom workflow integration",
        "Real-time synchronization",
        "Scalable architecture",
      ],
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Healthcare Management",
      description:
        "Comprehensive hospital, clinical, and pharmacy management systems, deployable on private or public cloud infrastructure.",
      features: ["Hospital management", "Clinical workflows", "Pharmacy systems", "Cloud deployment"],
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
    },
    {
      icon: Cpu,
      title: "IoT OEM Suite",
      description:
        "Solutions for data acquisition, protocol conversion, interactive dashboards, smart parking, asset tracking, and custom sensor networks.",
      features: ["Data acquisition", "Protocol conversion", "Smart dashboards", "Asset tracking"],
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Core Products
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Innovative Core Products for
            <br />
            <span className="text-primary">Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            MOCOIT Labs offers a suite of powerful, customizable products designed to meet diverse industry needs,
            ensuring efficiency and scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${product.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <product.icon className={`w-8 h-8 ${product.iconColor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300 bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Ready-to-Customize
              <span className="text-primary"> Solutions</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Leveraging open-source and royalty-free technology stacks, our products offer faster time-to-value and
              significantly lower total cost of ownership.
            </p>
            <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

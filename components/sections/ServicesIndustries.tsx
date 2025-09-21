"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Factory, Smartphone, Building2, ArrowRight } from "lucide-react"

export default function IndustriesSection() {
  const industries = [
    {
      icon: Factory,
      title: "Industry 4.0 Adopters",
      description:
        "Empowering manufacturing, transportation, energy, and smart infrastructure with advanced IoT and IT/OT solutions.",
      sectors: ["Manufacturing", "Transportation", "Energy", "Smart Infrastructure"],
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile & Cloud Applications",
      description:
        "Drive growth and adaptability by shifting core business activities to mobile and cloud-based applications built for scale, speed, and global access.",
      sectors: ["Mobile Apps", "Cloud Platforms", "SaaS Solutions", "Digital Transformation"],
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
    },
  ]

  const targetAudiences = [
    "Healthcare Providers",
    "Food Processing",
    "Logistics & Warehousing",
    "Hospitals & Clinics",
    "Pharmacies",
    "Small & Medium Businesses",
    "IT Sector",
    "Non-IT Sector",
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Target Industries
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Targeting Key Industries
            <br />
            <span className="text-primary">and Audiences</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            We focus our expertise on critical sectors, driving digital transformation for both traditional industries
            and burgeoning e-commerce ecosystems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${industry.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className={`w-8 h-8 ${industry.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold">{industry.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.sectors.map((sector) => (
                      <Badge key={sector} variant="secondary" className="text-xs">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Our Primary
              <span className="text-primary"> Target Audience</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our primary audience includes small and medium businesses (SMEs) across both IT and non-IT sectors,
              spanning diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {targetAudiences.map((audience, index) => (
              <motion.div
                key={audience}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-background/50 rounded-2xl p-4 text-center hover:bg-background/70 transition-colors duration-300">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">{audience}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get in Touch!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function ClientsSection() {
  const featuredClients = [
    {
      name: "Compliance Global",
      type: "E-Learning Platform",
      description: "Online webinar selling platform for compliance training worldwide",
      category: "Technology"
    },
    {
      name: "Information Kerala Mission", 
      type: "Government Project",
      description: "Digital transformation initiative for Kerala Government",
      category: "Government"
    },
    {
      name: "Legal Conclave",
      type: "Legal Advisory Platform", 
      description: "Connecting clients with qualified lawyers across India",
      category: "Professional Services"
    },
    {
      name: "Aarti Industries",
      type: "Industrial Solutions",
      description: "IT/OT integration and digital transformation solutions",
      category: "Manufacturing"
    },
    {
      name: "G4TV",
      type: "Media Platform",
      description: "Digital content and entertainment platform solutions",
      category: "Media"
    },
    {
      name: "Comcast Spectacor",
      type: "Entertainment Solutions", 
      description: "Digital experience and engagement platforms",
      category: "Entertainment"
    }
  ]

  const otherClients = [
    "Enskool E-Learning", "A2Z Compliance Global", "Axian India Pvt Ltd",
    "Yeppo", "Digicity", "Alraqmayoon LLC", "Chang Cooperation", 
    "CGHEarth Ayurveda", "Abharan Jewellers", "Online Songbook"
  ]

  /* const achievements = [
    { metric: "50+", label: "Projects Delivered", description: "Across multiple industries" },
    { metric: "300+", label: "Establishments", description: "Served through our e-commerce platform" },
    { metric: "90+", label: "Years Experience", description: "Combined team expertise" },
    { metric: "24/7", label: "Support", description: "Post-deployment assistance" }
  ] */

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Trusted Partners
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Delivering Excellence Across <span className="text-primary">Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From government initiatives to enterprise solutions, we&apos;ve built lasting partnerships 
            with organizations that trust us to drive their digital transformation.
          </p>
        </motion.div>

        {/* Featured Client Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Featured Client Projects</h3>
            <p className="text-muted-foreground">Showcasing our impactful collaborations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredClients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {client.category}
                      </Badge>
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {client.name}
                    </h4>
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {client.type}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {client.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/*
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.metric}
                  </div>
                  <div className="font-semibold mb-1">{achievement.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Additional Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Additional Trusted Partners</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {otherClients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="px-4 py-2 hover:bg-primary/5 transition-colors">
                  {client}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

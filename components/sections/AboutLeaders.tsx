"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Ajith Jacob",
      role: "Chief Executive Officer",
      description: "Driving strategic vision and operational excellence, fostering growth and client satisfaction.",
      initials: "AJ",
    },
    {
      name: "Vijeesh Kumar",
      role: "Chief Technology Officer", 
      description: "Leading technological innovation, ensuring robust and scalable platform architectures.",
      initials: "VK",
    },
    {
      name: "Sunil Kumar",
      role: "Consulting Partner",
      description: "Providing expert guidance on market trends and business development, expanding our reach.",
      initials: "SK",
    },
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
            Leadership Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Visionary Leadership and
            <br />
            <span className="text-primary">Strategic Guidance</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            Our leadership team brings a wealth of experience, guiding MOCOIT Labs to deliver impactful and innovative
            solutions across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm overflow-hidden h-full">
                <CardContent className="p-8 text-center">
                  {/* Avatar with Initials */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {leader.initials}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {leader.name}
                  </h3>
                  
                  <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
                    {leader.role}
                  </Badge>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {leader.description}
                  </p>

                  {/* Contact Icons */}
                  <div className="flex justify-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer group/icon">
                      <Linkedin className="w-5 h-5 text-muted-foreground group-hover/icon:text-primary" />
                    </div>
                    <div className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer group/icon">
                      <Mail className="w-5 h-5 text-muted-foreground group-hover/icon:text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            Guided by Cross-Industry
            <span className="text-primary"> Advisory Board</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Our advisory board spans automation, retail, automotive, hospitality, finance, health, e-commerce, sports,
            legal, and IT/ITES sectors, ensuring comprehensive industry insights.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Automation",
              "Retail", 
              "Automotive",
              "Hospitality",
              "Finance",
              "Healthcare",
              "E-commerce",
              "Sports",
              "Legal",
              "IT/ITES",
            ].map((industry) => (
              <Badge key={industry} variant="outline" className="text-sm">
                {industry}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

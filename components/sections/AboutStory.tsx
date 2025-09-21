// components/about/AboutStory.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Target, 
  Globe, 
  Lightbulb, 
  Award,
  Clock
} from 'lucide-react'

const AboutStory = () => {
  const highlights = [
    {
      icon: Clock,
      title: "40+ Years",
      description: "Combined expertise across our team"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Technocrats and marketers working together"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving India, Middle East, and USA"
    },
    {
      icon: Target,
      title: "Focused Approach",
      description: "OEM solutions for retail and industrial sectors"
    }
  ]

  const expertise = [
    "Instrumentation", "Computing", "Electronics", "Software Development",
    "Desktop Applications", "Mobile Development", "Cloud Solutions", "Web Development", "Business Management"
  ]

  const corporateExperience = [
    "Thermax", "Wipro", "AMD", "Intel", "Fuji Electric"
  ]

  return (
    <section className="py-20 bg-background">
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
            Our Story
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            About <span className="text-primary">MOCOIT Labs</span>
          </h2>
        </motion.div>

        {/* Main Story */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">MOCOIT Labs LLP</span> is a digital solutions and platform-enabling company. 
                    We craft compelling applications, solutions and websites focused on the real-world needs of small and medium enterprises.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    We are a <span className="font-medium text-primary">young group of technocrats and marketers</span> – keen on the research and 
                    development of IT solutions for mobile and cloud platforms, integrating IoT.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">MOCOIT Labs is a compact team that works really fast</span>; 
                    and we are committed to your success by helping you create value for your customers.
                  </p>
                </div>

                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <highlight.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{highlight.title}</div>
                        <div className="text-xs text-muted-foreground">{highlight.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Our Expertise</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  Our team is versatile across multiple technology domains:
                </p>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Corporate Heritage</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  Harnessing individual corporate experience from leading companies:
                </p>
                <div className="space-y-2">
                  {corporateExperience.map((company, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{company}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Experience in R&D, Engineering Management, Marketing and Sales
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            It is important that every solution we design is <span className="font-semibold text-primary">accurate, 
            yet anticipates the next technological expectation</span>. We&apos;re committed to helping you create 
            value for your customers through innovative digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutStory

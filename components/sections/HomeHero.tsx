"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Interactive Grid Background */}
      <InteractiveGridPattern
        width={50}
        height={50}
        squares={[30, 20]}
        className={cn(
          "absolute inset-0 h-full w-full",
          "bg-gradient-to-br from-background via-background to-muted/20",
          "opacity-70"
        )}
        squaresClassName={cn(
          "fill-muted stroke-muted transition-all duration-300 ease-out",
          "hover:fill-primary hover:stroke-primary/50",
          "dark:fill-muted/10 dark:stroke-muted/20",
          "dark:hover:fill-primary/20 dark:hover:stroke-primary/40"
        )}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative pointer-events-none">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance mb-6">
              <span className="text-foreground">Digital Platforms for a</span>
              <br />
              <span className="text-primary">Connected World</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turning innovative ideas into secure, scalable products swiftly. Your trusted partner for digital
            transformation across mobile, cloud, and IoT.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="no-underline">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/services" className="no-underline">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  View Services
                  <Play className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// components/contact/ContactMap.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'

const ContactMap = () => {
  const handleGetDirections = () => {
    // Open Google Maps with directions
    const destination = "MOCOIT Labs LLP, Andheri East, Mumbai, Maharashtra, India"
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
    window.open(url, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" />
            Our Location
          </CardTitle>
          <p className="text-muted-foreground">
            Visit our office in the heart of Mumbai&apos;s business district.
          </p>
        </CardHeader>
        <CardContent className="p-0">
          {/* Placeholder Map - Replace with actual map integration */}
          <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10">
            {/* Placeholder Map Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">MOCOIT Labs LLP</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  123 Business District<br />
                  Andheri East, Mumbai - 400069<br />
                  Maharashtra, India
                </p>
                <Button onClick={handleGetDirections} variant="outline" size="sm">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
            
            {/* You can replace this with actual map integration like Google Maps or Mapbox */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e20c7930c3%3A0x99875415f52d26ae!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692345678901!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Travel Time</div>
                <div className="text-lg font-semibold">From Airport: 15 mins</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Parking</div>
                <div className="text-lg font-semibold">Available On-site</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Public Transport</div>
                <div className="text-lg font-semibold">Metro & Bus Nearby</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ContactMap

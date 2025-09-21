'use client'
import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

const portfolioProjects = [
  {
    title: "Cloud Counting",
    category: "Business Platform",
    image: "/portfolio-images/cloudcounting.png",
    status: "Live"
  },
  {
    title: "Curious School",
    category: "E-Learning Platform", 
    image: "/portfolio-images/curious-school.png",
    status: "Live"
  },
  {
    title: "Indus Motors",
    category: "Automotive Website",
    image: "/portfolio-images/indus-motors.png", 
    status: "Live"
  },
  {
    title: "Legal Conclave",
    category: "Professional Network",
    image: "/portfolio-images/legal-conclave.png",
    status: "Live"
  },
  {
    title: "Rescue Services",
    category: "Emergency Platform",
    image: "/portfolio-images/rescue.png",
    status: "Live"
  },
  {
    title: "Royal Beauty",
    category: "E-commerce",
    image: "/portfolio-images/Royal.jpg",
    status: "Live"
  },
  {
    title: "SpatoGo",
    category: "Service Platform",
    image: "/portfolio-images/spatogo.png",
    status: "Live"
  }
]

const FeaturedProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id='featured-products' className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Portfolio
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of our most impactful digital solutions that have transformed 
            businesses across different industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Embla Carousel */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex -ml-4">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="embla__slide flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_33.333%] pl-4 min-w-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge 
                          variant="outline" 
                          className="border-green-500 text-green-700 bg-background/90 backdrop-blur-sm"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.category}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollPrev}
              className="rounded-full w-10 h-10 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollNext}
              className="rounded-full w-10 h-10 p-0"
            >
              <ChevronRight className="w-4 h-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects

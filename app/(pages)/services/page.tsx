// pages/services.tsx or app/services/page.tsx

import React from 'react'
import ServicesHero from '@/components/sections/ServicesHero'
import ServicesSection from '@/components/sections/ServicesGrid'
import SolutionsGrid from '@/components/sections/ServicesSolutions'
import ServicesCallToAction from '@/components/sections/ServicesCallToAction'
import IndustriesSection from '@/components/sections/ServicesIndustries'

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesSection />
      <SolutionsGrid />
      <IndustriesSection />
      <ServicesCallToAction />
    </div>
  )
}

export default ServicesPage

// pages/products.tsx or app/products/page.tsx
'use client'

import React from 'react'
import ProductsHero from '@/components/sections/ProductsHero'
import ProductCategories from '@/components/sections/ProductsCategories'
import FeaturedProjects from '@/components/sections/ProductsFeatured'
import ProductsCallToAction from '@/components/sections/ProductsCallToAction'
import ClientsSection from '@/components/sections/ProductsClients'

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <ProductsHero />
      <ProductCategories />
      <FeaturedProjects />
      <ClientsSection />
      <ProductsCallToAction />
    </div>
  )
}

export default ProductsPage

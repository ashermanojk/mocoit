import { HeroSection } from "@/components/sections/HomeHero";
import { AboutSection } from "@/components/sections/HomeAbout";
import {ProductsSection} from "@/components/sections/HomeProducts";
import  ServicesSection  from "@/components/sections/HomeServices";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
    </>
  );
}

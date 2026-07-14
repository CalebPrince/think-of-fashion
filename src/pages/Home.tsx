import { Hero } from '@/components/sections/Hero'
import { Categories } from '@/components/sections/Categories'
import { ShopCategories } from '@/components/sections/ShopCategories'
import { GroomingFeature } from '@/components/sections/GroomingFeature'
import { WorldwideBanner } from '@/components/sections/WorldwideBanner'
import { Gallery } from '@/components/sections/Gallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <ShopCategories />
      <GroomingFeature />
      <WorldwideBanner />
      <Gallery />
      <Testimonials />
      <ContactCTA />
    </>
  )
}

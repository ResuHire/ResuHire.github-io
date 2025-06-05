// Instructions: Create the main homepage with Header, Hero section, and other key sections

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { TrustIndicators } from '@/components/TrustIndicators'
import { Features } from '@/components/Features'
import { Statistics } from '@/components/Statistics'
import { Security } from '@/components/Security'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <TrustIndicators />
      <Features />
      <Statistics />
      <Security />
      <Footer />
    </div>
  )
}

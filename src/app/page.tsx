import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowToCalculateBAC from '@/components/HowToCalculateBAC'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import BACChart from '@/components/BACChart'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BACChart />
        <HowToCalculateBAC />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
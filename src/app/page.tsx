import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImproveBMI from '@/components/ImproveBMI'
import HowToCalculateBMI from '@/components/HowToCalculateBMI'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import BMIChart from '@/components/BMIChart'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BMIChart />
        <HowToCalculateBMI />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
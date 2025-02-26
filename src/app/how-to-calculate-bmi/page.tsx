import Header from '@/components/Header'
import HowToCalculateBMI from '@/components/HowToCalculateBMI'
import Footer from '@/components/Footer'

export default function HowToCalculateBMIPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HowToCalculateBMI />
      </main>
      <Footer />
    </div>
  )
}
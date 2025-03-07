import Header from '@/components/Header'
import HowToCalculateBAC from '@/components/HowToCalculateBAC'
import Footer from '@/components/Footer'

export default function HowToCalculateBACPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HowToCalculateBAC />
      </main>
      <Footer />
    </div>
  )
} 
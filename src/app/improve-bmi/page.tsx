import Header from '@/components/Header'
import ImproveBMI from '@/components/ImproveBMI'
import Footer from '@/components/Footer'

export default function ImproveBMIPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ImproveBMI />
      </main>
      <Footer />
    </div>
  )
}
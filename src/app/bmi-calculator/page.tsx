import Header from '@/components/Header'
import BMICalculator from '@/components/BMICalculator'
import Footer from '@/components/Footer'

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            BMI Calculator
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Calculate your Body Mass Index (BMI) and get personalized health insights
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <BMICalculator />
        </div>
      </main>
      <Footer />
    </div>
  )
}
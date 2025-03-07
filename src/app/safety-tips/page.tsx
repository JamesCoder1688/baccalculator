import React from 'react'
import Header from '@/components/Header'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function SafetyTipsPage() {
  const tips = [
    {
      title: 'Drink Responsibly',
      description: 'Know your personal limits and stick to them. Count your drinks, pace yourself throughout the evening, and remember that different types of alcohol have different strengths. If you feel pressured to drink more, it\'s okay to say no.',
      
    },
    {
      title: 'Stay Hydrated',
      description: 'Alternate between alcoholic drinks and water. This not only helps prevent dehydration but also slows down your alcohol consumption. Try to drink a full glass of water between each alcoholic beverage and before going to bed.',
      
    },
    {
      title: 'Plan Ahead',
      description: 'Before drinking, decide how you\'ll get home safely. Arrange for a designated driver, save taxi numbers in your phone, or check public transportation schedules. Never get behind the wheel after drinking, and don\'t let your friends drive drunk.',
      
    },
    {
      title: 'Eat Before Drinking',
      description: 'Have a proper meal before drinking alcohol. Foods rich in protein and healthy fats help slow alcohol absorption. Avoid drinking on an empty stomach as this can lead to faster intoxication and potential health risks.',
      
    }
  ]

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Alcohol Safety Tips</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="block bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h2>
              <p className="text-gray-600 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need More Help?</h2>
          <p className="text-gray-600 mb-4">
            If you or someone you know is struggling with alcohol, seek professional help immediately. There are resources and support systems available to help you make informed decisions about alcohol consumption.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

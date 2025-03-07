import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HealthTips() {
  const tips = [
    {
      title: "Maintain a Balanced Diet",
      description: "Focus on eating a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Portion control is key to maintaining a healthy weight.",
      icon: "🥗"
    },
    {
      title: "Regular Physical Activity",
      description: "Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week. Include strength training exercises twice a week.",
      icon: "💪"
    },
    {
      title: "Stay Hydrated",
      description: "Drink plenty of water throughout the day. Water helps maintain body temperature, remove waste, and protect your joints and organs.",
      icon: "💧"
    },
    {
      title: "Get Adequate Sleep",
      description: "Aim for 7-9 hours of quality sleep per night. Good sleep helps maintain a healthy weight and supports overall well-being.",
      icon: "😴"
    },
    {
      title: "Stress Management",
      description: "Practice stress-reduction techniques like meditation, deep breathing, or yoga. Chronic stress can affect your weight and overall health.",
      icon: "🧘"
    },
    {
      title: "Regular Health Check-ups",
      description: "Schedule regular check-ups with your healthcare provider to monitor your BMI, blood pressure, and other important health indicators.",
      icon: "👨‍⚕️"
    }
  ]

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Health Tips for a Better Life</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h2>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Track Your Progress</h2>
          <p className="text-gray-600 mb-6">
            Remember that maintaining a healthy lifestyle is a journey, not a destination. Regular BMI monitoring can help you track your progress and make necessary adjustments to your health routine.
          </p>
          <div className="space-x-4">
            <a 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Calculate Your BMI
            </a>
            <a 
              href="/knowledge-center"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

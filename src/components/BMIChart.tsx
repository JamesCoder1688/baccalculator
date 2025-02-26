'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function BMIChart() {
  const router = useRouter()

  const bmiCategories = {
    men: [
      { range: '< 18.5', category: 'Underweight', color: 'bg-blue-100' },
      { range: '18.5 - 24.9', category: 'Normal weight', color: 'bg-green-100' },
      { range: '25.0 - 29.9', category: 'Overweight', color: 'bg-yellow-100' },
      { range: '≥ 30.0', category: 'Obese', color: 'bg-red-100' }
    ],
    women: [
      { range: '< 18.5', category: 'Underweight', color: 'bg-blue-100' },
      { range: '18.5 - 23.9', category: 'Normal weight', color: 'bg-green-100' },
      { range: '24.0 - 28.9', category: 'Overweight', color: 'bg-yellow-100' },
      { range: '≥ 29.0', category: 'Obese', color: 'bg-red-100' }
    ]
  }

  const recommendations = {
    underweight: {
      title: 'If you are underweight:',
      tips: [
        'Eat more frequently throughout the day',
        'Choose nutrient-rich foods',
        'Add healthy snacks between meals',
        'Include protein with every meal',
        'Consult with a healthcare provider'
      ]
    },
    normal: {
      title: 'To maintain healthy weight:',
      tips: [
        'Maintain a balanced diet',
        'Regular physical activity',
        'Stay hydrated',
        'Get adequate sleep',
        'Monitor your weight regularly'
      ]
    },
    overweight: {
      title: 'If you are overweight:',
      tips: [
        'Create a moderate calorie deficit',
        'Increase physical activity',
        'Focus on whole foods',
        'Track your food intake',
        'Seek professional guidance if needed'
      ]
    }
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
          BMI Chart
          </h2>
          <p className="mt-4 text-lg text-gray-600">
          Understanding BMI Standards          
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Men's BMI Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-800">BMI Calculator Men</h3>
            <div className="space-y-2">
              {bmiCategories.men.map((item, index) => (
                <div key={index} className={`${item.color} p-3 rounded-md flex justify-between`}>
                  <span className="font-medium">{item.range}</span>
                  <span>{item.category}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Women's BMI Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-pink-800">BMI Calculator Women</h3>
            <div className="space-y-2">
              {bmiCategories.women.map((item, index) => (
                <div key={index} className={`${item.color} p-3 rounded-md flex justify-between`}>
                  <span className="font-medium">{item.range}</span>
                  <span>{item.category}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recommendations Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Recommendations for Different BMI Categories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(recommendations).map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h4 className="font-semibold text-lg mb-3 text-blue-800">{rec.title}</h4>
                <ul className="space-y-2">
                  {rec.tips.map((tip, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() => router.push('/improve-bmi')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Your Personalized BMI Plan
            <svg 
              className="ml-2 h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
} 
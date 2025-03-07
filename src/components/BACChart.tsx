'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function BACChart() {
  const router = useRouter()

  const bacLevels = [
    { range: '0.02 - 0.03%', effects: 'Mild mood changes', color: 'bg-green-100' },
    { range: '0.04 - 0.06%', effects: 'Relaxation, mild euphoria', color: 'bg-blue-100' },
    { range: '0.07 - 0.09%', effects: 'Impaired judgment and coordination', color: 'bg-yellow-100' },
    { range: '0.10 - 0.12%', effects: 'Significant impairment', color: 'bg-orange-100' },
    { range: '≥ 0.15%', effects: 'Dangerous intoxication', color: 'bg-red-100' }
  ]

  const safetyGuidelines = {
    prevention: {
      title: 'Prevention Tips:',
      tips: [
        'Eat before and while drinking',
        'Pace your drinks',
        'Stay hydrated with water',
        'Know your limits',
        'Plan safe transportation'
      ]
    },
    legal: {
      title: 'Legal Information:',
      tips: [
        'Legal limit is 0.08% in most states',
        'Zero tolerance for under 21',
        'Commercial drivers limit: 0.04%',
        'DUI penalties are severe',
        'Implied consent laws apply'
      ]
    },
    safety: {
      title: 'Safety Measures:',
      tips: [
        'Use ride-sharing services',
        'Have a designated driver',
        'Never drink and drive',
        'Keep emergency contacts handy',
        'Monitor friends\' consumption'
      ]
    }
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            BAC Effects Chart
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Understanding Blood Alcohol Content Levels and Their Effects
          </p>
        </div>

        {/* BAC Levels Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6 mb-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-800">BAC Levels and Effects</h3>
          <div className="space-y-2">
            {bacLevels.map((item, index) => (
              <div key={index} className={`${item.color} p-3 rounded-md flex justify-between`}>
                <span className="font-medium">{item.range}</span>
                <span>{item.effects}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Note: Effects may vary by individual. Any amount of alcohol can impair judgment.
          </p>
        </motion.div>

        {/* Guidelines Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Safety Guidelines and Legal Information
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(safetyGuidelines).map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h4 className="font-semibold text-lg mb-3 text-blue-800">{guide.title}</h4>
                <ul className="space-y-2">
                  {guide.tips.map((tip, i) => (
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

        {/* Emergency Call to Action */}
        <div className="text-center">
          <p className="text-red-600 font-semibold mb-4">
            If you or someone you know needs immediate assistance, call emergency services
          </p>
        </div>
      </div>
    </div>
  )
} 
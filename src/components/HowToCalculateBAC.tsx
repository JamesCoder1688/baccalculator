import React from 'react'

export default function HowToCalculateBAC() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How to Calculate BAC
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Understanding the factors that affect your Blood Alcohol Content
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Formula Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">BAC Formula</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg font-medium text-blue-900 text-center">
                  BAC = (Alcohol in grams × 100) ÷ (Weight in grams × Gender Constant) - (0.015 × Hours)
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <h4 className="font-medium text-gray-900">Key Factors:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Weight: Heavier people have lower BAC</li>
                  <li>Gender: Women generally have higher BAC</li>
                  <li>Alcohol consumed: Standard drinks (14g alcohol each)</li>
                  <li>Time: Alcohol metabolizes at ~0.015% per hour</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example Calculation */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Example BAC Calculation</h3>
              <div className="space-y-4">
                <p className="text-gray-600">For someone who is:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Weight: 70 kg (male)</li>
                  <li>Drinks: 3 standard drinks</li>
                  <li>Time: 2 hours since first drink</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p className="text-gray-700">1. Alcohol = 3 × 14g = 42g</p>
                  <p className="text-gray-700">2. BAC = (42 × 100) ÷ (70 × 0.68) - (0.015 × 2)</p>
                  <p className="text-gray-700">3. BAC = 0.064%</p>
                </div>
                <p className="text-gray-600 mt-4">
                  This BAC of 0.064% indicates mild impairment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Standard Drink Info */}
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Drink Equivalents</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Beer</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 12 oz (355 ml)</li>
                  <li>• 5% alcohol</li>
                  <li>• 1 standard drink</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Wine</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5 oz (148 ml)</li>
                  <li>• 12% alcohol</li>
                  <li>• 1 standard drink</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Spirits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 1.5 oz (44 ml)</li>
                  <li>• 40% alcohol</li>
                  <li>• 1 standard drink</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Important Safety Information
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Time Matters</h4>
              <p className="mt-2 text-gray-600">
                Your body processes alcohol at about one standard drink per hour
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Know Your Limits</h4>
              <p className="mt-2 text-gray-600">
                Legal limit is 0.08% in most places, but impairment starts much lower
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Plan Ahead</h4>
              <p className="mt-2 text-gray-600">
                Always arrange for a designated driver or alternative transportation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
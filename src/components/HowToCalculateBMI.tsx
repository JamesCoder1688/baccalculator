import React from 'react'

export default function HowToCalculateBMI() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How to Calculate BMI
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Understanding the simple steps to calculate your Body Mass Index
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Formula Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">BMI Formula</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg font-medium text-blue-900 text-center">
                  BMI = weight (kg) ÷ height² (m²)
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <h4 className="font-medium text-gray-900">Steps to Bmi Calculate:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Convert your height to meters (if in centimeters, divide by 100)</li>
                  <li>Square your height (multiply it by itself)</li>
                  <li>Divide your weight in kilograms by your squared height</li>
                  <li>Round the result to one decimal place</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Example Calculation */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Bmi Calculation</h3>
              <div className="space-y-4">
                <p className="text-gray-600">For someone who is:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Height: 170 cm (1.7 m)</li>
                  <li>Weight: 70 kg</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p className="text-gray-700">1. Height in meters = 1.7 m</p>
                  <p className="text-gray-700">2. Height squared = 1.7 × 1.7 = 2.89 m²</p>
                  <p className="text-gray-700">3. BMI = 70 ÷ 2.89 = 24.2</p>
                </div>
                <p className="text-gray-600 mt-4">
                  This BMI of 24.2 falls within the normal weight range (18.5-24.9).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Unit Conversion Tips */}
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Unit Conversion Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Height Conversion</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Centimeters to meters: divide by 100</li>
                  <li>• Inches to meters: multiply by 0.0254</li>
                  <li>• Feet to meters: multiply by 0.3048</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Weight Conversion</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pounds to kilograms: divide by 2.205</li>
                  <li>• Stones to kilograms: multiply by 6.35</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Quick Tips for Accurate BMI Calculation
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Use Accurate Measurements</h4>
              <p className="mt-2 text-gray-600">
                Measure your height and weight accurately using calibrated equipment
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Measure at the Right Time</h4>
              <p className="mt-2 text-gray-600">
                Weigh yourself in the morning before eating and after using the bathroom
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Record Your Results</h4>
              <p className="mt-2 text-gray-600">
                Keep track of your BMI over time to monitor changes in your health status
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
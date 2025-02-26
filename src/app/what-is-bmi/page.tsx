import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WhatIsBMI() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">What is BMI?</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Body Mass Index (BMI) is a simple measurement using your weight and height to work out if your weight is healthy. The BMI calculation divides an adult's weight in kilograms by their height in metres squared.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">BMI Formula</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <p className="text-lg font-medium text-blue-900">BMI = weight (kg) ÷ height² (m²)</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">BMI Categories</h2>
          <ul className="list-none space-y-4">
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <span className="font-semibold">Underweight</span>: BMI less than 18.5
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <span className="font-semibold">Normal weight</span>: BMI 18.5 to 24.9
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <span className="font-semibold">Overweight</span>: BMI 25 to 29.9
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <span className="font-semibold">Obese</span>: BMI 30 or greater
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Important Considerations</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>BMI is a useful measurement for most people over 18.</li>
            <li>It is not applicable to children, pregnant women, or highly muscular athletes.</li>
            <li>Your ethnicity can affect your risk of some health conditions, so BMI thresholds may be different.</li>
            <li>BMI should be considered alongside other factors like diet, exercise levels, and family history.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
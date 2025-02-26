import React from 'react'

export default function WhatIsBMI() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What is BMI?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Body Mass Index (BMI) is a simple measurement using your weight and height to work out if your weight is healthy.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-lg font-medium text-gray-900">BMI Formula</h3>
                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-900">
                    BMI = weight (kg) ÷ height² (m²)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-lg font-medium text-gray-900">BMI Categories</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center text-sm">
                    <span className="w-24 font-medium">Underweight:</span>
                    <span className="text-gray-500">BMI less than 18.5</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-24 font-medium">Normal:</span>
                    <span className="text-gray-500">BMI 18.5 to 24.9</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-24 font-medium">Overweight:</span>
                    <span className="text-gray-500">BMI 25 to 29.9</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-24 font-medium">Obese:</span>
                    <span className="text-gray-500">BMI 30 or greater</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900">Important Considerations</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">BMI is a useful measurement for most people over 18</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Not applicable to children, pregnant women, or highly muscular athletes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Ethnicity can affect health risks at different BMI thresholds</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Consider BMI alongside diet, exercise levels, and family history</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
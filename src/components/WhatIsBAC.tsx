import React from 'react'

export default function WhatIsBAC() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What is BAC?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Blood Alcohol Content (BAC) is a measure of the amount of alcohol in your bloodstream, used to determine your level of intoxication.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-lg font-medium text-gray-900">BAC Formula</h3>
                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-900">
                    BAC = (Alcohol consumed in grams / (Body weight in grams × r)) × 100
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    r = 0.55 for women, 0.68 for men
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-lg font-medium text-gray-900">BAC Levels</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center text-sm">
                    <span className="w-24 font-medium">0.02 - 0.03%:</span>
                    <span className="text-gray-500">Mild mood changes</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-24 font-medium">0.04 - 0.06%:</span>
                    <span className="text-gray-500">Relaxation, mild euphoria</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-24 font-medium">0.07 - 0.09%:</span>
                    <span className="text-gray-500">Impaired judgment and coordination</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-24 font-medium">≥ 0.15%:</span>
                    <span className="text-gray-500">Dangerous intoxication</span>
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
                  <span className="ml-2">BAC is affected by weight, gender, and metabolism</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Food consumption can slow alcohol absorption</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Legal driving limit is 0.08% in most states</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Never drink and drive, regardless of BAC level</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
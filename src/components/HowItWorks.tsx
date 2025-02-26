import React from 'react'
import { ArrowPathIcon, CalculatorIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    name: 'Enter Your Details',
    description: 'Input your height, weight, age, and gender into our user-friendly calculator.',
    icon: CalculatorIcon,
  },
  {
    name: 'Get Your BMI',
    description: 'Receive instant results with your BMI score and category classification.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Personalized Recommendations',
    description: 'Get tailored health advice and recommendations based on your BMI results.',
    icon: ChartBarIcon,
  },
]

export default function HowItWorks() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <h2><p className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            Simple steps to use BMI calculator
          </p></h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get your BMI results and personalized recommendations in just a few clicks
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col items-center text-center">
                <div className="rounded-lg bg-blue-50 p-4 mb-6">
                  <step.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
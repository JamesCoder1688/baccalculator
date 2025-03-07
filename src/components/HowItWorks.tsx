import React from 'react'
import { 
  CalculatorIcon, 
  ClockIcon, 
  ScaleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const steps = [
  {
    name: 'Enter Your Details',
    description: 'Input your weight, gender, number of drinks, and drinking duration into our calculator.',
    icon: CalculatorIcon,
  },
  {
    name: 'Get Your BAC Estimate',
    description: 'Receive instant results with your estimated BAC level and impairment status.',
    icon: ScaleIcon,
  },
  {
    name: 'Safety Recommendations',
    description: 'Get personalized safety advice and estimated sobering time based on your BAC level.',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Plan Your Next Steps',
    description: 'Understand when it will be safe to drive and get alternative transportation options.',
    icon: ClockIcon,
  }
]

export default function HowItWorks() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2><p className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            How the BAC Calculator Works
          </p></h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Understand your alcohol consumption and make safe decisions in just a few steps
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
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
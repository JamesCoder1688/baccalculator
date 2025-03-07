import React from 'react'
import { 
  CalculatorIcon, 
  ClockIcon, 
  ScaleIcon, 
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real-time BAC Estimation',
    description: 'Get accurate BAC results instantly based on your inputs.',
    icon: CalculatorIcon,
  },
  {
    name: 'Sobriety Time Prediction',
    description: 'Estimate when you\'ll be safe to drive based on your current BAC.',
    icon: ClockIcon,
  },
  {
    name: 'Personalized Safety Tips',
    description: 'Receive tailored advice based on your BAC level and situation.',
    icon: UserIcon,
  },
  {
    name: 'Legal Limit Awareness',
    description: 'Understand the legal BAC limits and their implications.',
    icon: ScaleIcon,
  },
  {
    name: 'Drink Type Analysis',
    description: 'See how different types of alcohol affect your BAC.',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Privacy & Security',
    description: 'Your data is never stored or shared with third parties.',
    icon: ShieldCheckIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2><p className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            Everything you need to stay safe
          </p></h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive BAC calculator provides accurate results and safety recommendations to help you make informed decisions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
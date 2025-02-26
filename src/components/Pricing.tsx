import React from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Everything you need to start tracking your BMI',
    features: [
      'Basic BMI calculation',
      'BMI category identification',
      'General health recommendations',
      'Access to Knowledge Center',
    ],
    cta: 'Get Started',
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    description: 'Advanced features for detailed health tracking',
    features: [
      'All Basic features',
      'Personalized recommendations',
      'Progress tracking',
      'Expert consultation access',
      'Premium articles and guides',
      'Email support',
    ],
    cta: 'Start free trial',
    mostPopular: true,
  },
]

export default function Pricing() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Start with our free plan or upgrade for advanced features and personalized support
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.mostPopular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <div>
                {tier.mostPopular && (
                  <p className="inline-flex rounded-full bg-blue-600/10 px-4 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                    Most popular
                  </p>
                )}
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  {tier.price !== 'Free' && (
                    <span className="text-base text-gray-600">/month</span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
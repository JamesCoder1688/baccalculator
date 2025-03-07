'use client'

import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How accurate is the BAC calculation?",
    answer: "Our BAC calculator provides an estimate based on standard formulas. However, actual BAC can vary due to factors like metabolism, food consumption, and individual tolerance."
  },
  {
    question: "What affects my BAC level?",
    answer: "BAC is influenced by your weight, gender, number of drinks, drinking duration, and metabolism rate. Food intake and medication can also affect alcohol absorption."
  },
  {
    question: "What is the legal BAC limit for driving?",
    answer: "In most states, the legal limit is 0.08%. However, impairment can occur at much lower levels, and some states have lower limits for commercial drivers and underage drinkers."
  },
  {
    question: "How long does it take for alcohol to leave my system?",
    answer: "On average, your body processes alcohol at a rate of about 0.015% BAC per hour. However, this can vary based on individual factors."
  },
  {
    question: "What should I do if my BAC is high?",
    answer: "If your BAC is high, do not drive. Stay hydrated, eat food if possible, and wait until your BAC is well below the legal limit before driving. Consider using a ride-sharing service or calling a friend."
  }
]

export default function FAQ() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2><p className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            Frequently Asked Questions
          </p></h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about BAC calculation and alcohol safety
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <dl className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="bg-gray-50 rounded-lg">
                {({ open }: { open: boolean }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between px-4 py-4 text-left text-gray-900">
                      <span className="text-lg font-medium">{faq.question}</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-6 w-6 text-blue-600`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-4 text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
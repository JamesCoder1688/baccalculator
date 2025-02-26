'use client'

import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How is bmi calc?",
    answer: "BMI is calculated by dividing your weight in kilograms by your height in meters squared (BMI = kg/m²). Our bmi calculator does this automatically for you."
  },
  {
    question: "Is BMI accurate for everyone?",
    answer: "While BMI is a useful screening tool, it may not be accurate for athletes, elderly people, or pregnant women. It's best used as one of several health indicators."
  },
  {
    question: "How often should I check my BMI?",
    answer: "It's recommended to check your BMI every 6-12 months, or when you experience significant weight changes. Regular monitoring helps track your health progress."
  },
  {
    question: "What should I do if my BMI is outside the healthy range?",
    answer: "If your BMI is outside the healthy range (18.5-24.9), we recommend consulting with a healthcare provider who can evaluate your individual situation and provide personalized advice."
  },
  {
    question: "Are the recommendations personalized?",
    answer: "Yes, our recommendations are tailored based on your BMI, age, gender, and other factors you provide. However, they should not replace professional medical advice."
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
            Find answers to common questions about BMI calculation and interpretation
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <dl className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="bg-gray-50 rounded-lg">
                {({ open }) => (
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
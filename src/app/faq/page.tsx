import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQ() {
  const faqs = [
    {
      question: "What is BMI?",
      answer: "BMI (Body Mass Index) is a simple measure that uses your height and weight to work out if your weight is healthy. The BMI calculation divides an adult's weight in kilograms by their height in metres squared."
    },
    {
      question: "How accurate is BMI?",
      answer: "While BMI is a useful screening tool, it's not a diagnostic tool. BMI doesn't directly measure body fat or overall health status. Athletes, for example, may have a high BMI due to muscle mass rather than body fat."
    },
    {
      question: "What is a healthy BMI range?",
      answer: "For most adults, a healthy BMI range is 18.5 to 24.9. Below 18.5 is considered underweight, 25 to 29.9 is overweight, and 30 or above is obese. However, these ranges may vary for different ethnic groups."
    },
    {
      question: "Can children use BMI calculator?",
      answer: "BMI calculations for children and teens are different from adult BMI. They take into account age and gender, and are often referred to as BMI-for-age. Please consult a pediatrician for children's BMI assessment."
    },
    {
      question: "How can I improve my BMI?",
      answer: "To improve your BMI, focus on balanced nutrition and regular physical activity. This might include portion control, eating more fruits and vegetables, reducing processed foods, and engaging in both cardio and strength training exercises."
    }
  ]

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            If you couldn't find the answer you're looking for, please feel free to contact us.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

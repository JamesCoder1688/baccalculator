import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="space-y-8">
          <section className="prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. BMI Calculator Usage</h2>
            <p className="text-gray-600 mb-4">
              Our BMI calculator is provided as a free tool for personal use. While we strive for accuracy, the results should be used as a general guide only and not as a substitute for professional medical advice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Health Information</h2>
            <p className="text-gray-600 mb-4">
              The health information and recommendations provided on this website are for general educational purposes only. Every individual is unique, and what works for one person may not work for another. Always consult with healthcare professionals for personalized advice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Medical Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The BMI calculator and associated health information are not intended to diagnose, treat, cure, or prevent any disease. BMI is just one of many indicators of health and should be considered alongside other factors. Always consult your healthcare provider before making any health-related decisions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Accuracy of Information</h2>
            <p className="text-gray-600 mb-4">
              While we make every effort to ensure the accuracy of our BMI calculations and health information, we cannot guarantee that all information is completely error-free. The BMI ranges and health recommendations are based on general guidelines and may not apply to everyone.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              Users are responsible for inputting accurate height and weight measurements. Incorrect inputs will result in inaccurate BMI calculations. Users should also understand that BMI has limitations and may not be suitable for all individuals, such as athletes, pregnant women, or the elderly.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy and Data</h2>
            <p className="text-gray-600 mb-4">
              We respect your privacy. Any measurements you input into our BMI calculator are not stored on our servers. For more information about how we handle your data, please refer to our Privacy Policy.
            </p>
          </section>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need More Information?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our Terms of Service or how to use the BMI calculator, please don't hesitate to contact us.
            </p>
            <div className="space-x-4">
              <a 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a 
                href="/faq"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

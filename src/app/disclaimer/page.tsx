import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Disclaimer() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Website Disclaimer</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Medical Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The information provided on www.baccalculator.co is for general informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p className="text-gray-600 mb-4">
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">BAC Calculator Accuracy</h2>
            <p className="text-gray-600 mb-4">
              While we strive to provide accurate BAC calculations, the BAC measurement has limitations and may not be suitable for all individuals. Factors such as metabolism, food consumption, and medication can affect alcohol absorption.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Guarantees</h2>
            <p className="text-gray-600 mb-4">
              We make no guarantees about the accuracy, reliability, completeness, or timeliness of the information provided. Any reliance you place on such information is strictly at your own risk.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
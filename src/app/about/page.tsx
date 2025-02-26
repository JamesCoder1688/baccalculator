import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At www.bmijisuanqi.co, our mission is to provide accurate, easy-to-use tools for health assessment and promote better understanding of body mass index (BMI) and its role in overall health.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-600 mb-4">
              Our team consists of health professionals and technology experts dedicated to providing accurate BMI calculations and evidence-based health recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-4">
              We are committed to maintaining the highest standards of accuracy and privacy while providing valuable health insights to our users worldwide.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
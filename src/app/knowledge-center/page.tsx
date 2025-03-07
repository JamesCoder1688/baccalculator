import React from 'react'
import Header from '@/components/Header'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function KnowledgeCenter() {
  const articles = [
    {
      title: 'Understanding BMI Calculations',
      description: 'Learn how BMI is calculated and what the numbers mean for your health.',
      link: '/what-is-bmi'
    },
    {
      title: 'BMI and Health Risks',
      description: 'Discover the relationship between BMI and various health conditions.',
      link: '/'
    },
    {
      title: 'Maintaining a Healthy BMI',
      description: 'Tips and strategies for achieving and maintaining a healthy BMI through lifestyle changes.',
      link: '/'
    },
    {
      title: 'BMI Myths and Facts',
      description: 'Common misconceptions about BMI and the truth behind them.',
      link: '/'
    }
  ]

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Knowledge Center</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={article.link}
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
              <span className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Professional Advice?</h2>
          <p className="text-gray-600 mb-4">
            While BMI is a useful screening tool, it's important to consult with healthcare professionals for personalized health advice.
          </p>
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Calculate Your BMI
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

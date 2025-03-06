import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteMap = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', href: '/' },
      { name: 'BMI Calculator', href: '/calculator' },
      { name: 'What is BMI', href: '/what-is-bmi' },
      { name: 'Knowledge Center', href: '/knowledge-center' },
    ]
  },
  {
    title: 'Information',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'FAQ', href: '/faq' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ]
  }
]

export default function Sitemap() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteMap.map((section) => (
            <div key={section.title} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-blue-600 hover:text-blue-800">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
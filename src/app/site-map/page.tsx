import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Link {
  name: string;
  href: string;
  external?: boolean;
}

const siteMap: { title: string; links: Link[] }[] = [
  {
    title: 'Main Features',
    links: [
      { name: 'Home', href: '/', external: false },
      { name: 'BAC Calculator', href: '/bac-calculator', external: false },
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'BAC Guide', href: '/how-to-calculate-bac', external: false },
      { name: 'Safety Tips', href: '/safety-tips', external: false },
      { name: 'Legal Limits', href: '/bac-driving-laws', external: false },
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact', external: false },
      { name: 'About Us', href: '/about', external: false },
      { name: 'Site Map', href: '/site-map', external: false },
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy', external: false },
      { name: 'Terms of Service', href: '/terms', external: false },
      { name: 'Disclaimer', href: '/disclaimer', external: false },
    ]
  },
  {
    title: 'Friend Links',
    links: [
      { name: 'BMI Calculator', href: 'https://www.bmi-calculator.co', external: true },
      { name: 'Speed Test', href: 'https://www.cesu-wang.com', external: true },
      { name: 'Dog Names', href: 'https://www.dognames.cc', external: true },
    ]
  }
]

export default function Sitemap() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Site Map</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {siteMap.map((section) => (
            <div key={section.title} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {link.name} ↗
                      </a>
                    ) : (
                      <Link href={link.href} className="text-blue-600 hover:text-blue-800">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            This site map provides an overview of all pages available on BAC Calculator. We strive to make our content easily accessible and organized for our users.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
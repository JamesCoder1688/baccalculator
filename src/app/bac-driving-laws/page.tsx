import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'BAC Legal Limits - Blood Alcohol Content Laws and Regulations',
  description: 'Learn about BAC legal limits for driving in different regions and understand blood alcohol content laws and regulations.',
}

export default function LegalLimits() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">BAC Legal Limits</h1>
        
        <div className="prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Understanding BAC Legal Limits</h2>
            <p className="text-gray-600 mb-6">
              Blood Alcohol Content (BAC) limits are legal thresholds that determine whether a person is legally considered to be driving under the influence of alcohol.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common BAC Limits</h2>
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Region</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">BAC Limit</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">United States</td>
                    <td className="px-6 py-4 text-sm text-gray-600">0.08%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Standard limit for most states</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">European Union</td>
                    <td className="px-6 py-4 text-sm text-gray-600">0.05%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">General limit for most EU countries</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">UK</td>
                    <td className="px-6 py-4 text-sm text-gray-600">0.08%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">England, Wales, and Northern Ireland</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Important Notes</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>BAC limits may vary by vehicle type (commercial vs. private)</li>
              <li>Some regions have zero-tolerance policies for new drivers</li>
              <li>Penalties for exceeding BAC limits can include fines, license suspension, and imprisonment</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Safety Recommendation</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-700">
                The safest approach is to not drink at all if you plan to drive. Even small amounts of alcohol can affect your driving ability.
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Note: This information is for general reference only. Laws may change and vary by jurisdiction. Always check your local regulations.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

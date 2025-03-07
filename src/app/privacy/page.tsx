import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: March 2024</p>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We only collect the necessary information for BAC calculation (weight, gender, drinks) and anonymous usage data to improve our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use your information solely for BAC calculation and to provide relevant safety recommendations. All data is used anonymously to improve our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Storage and Security</h2>
            <p className="text-gray-600 mb-4">
              We do not store personal information. Your inputs are processed in real-time and are not saved on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use essential cookies to ensure the basic functionality of our website. No tracking or advertising cookies are used.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The BAC Calculator is provided for educational and informational purposes only. Do not rely on this tool to make decisions about your ability to drive or operate machinery. The safest option is not to drive after drinking any amount of alcohol.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For privacy-related questions or concerns, please contact us at:{' '}
              <a href="mailto:privacy@bac-calculator.com" className="text-blue-600 hover:text-blue-800">
                privacy@bac-calculator.com
              </a>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              This privacy policy is subject to change without notice. Please check this page periodically for updates.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
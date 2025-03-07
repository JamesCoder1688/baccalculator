import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - BAC Calculator',
  description: 'Terms and conditions for using the BAC Calculator service. Learn about your rights and responsibilities when using our blood alcohol content calculation tools.',
}

export default function TermsPage() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-700">
              Important: The BAC Calculator is provided for educational and informational purposes only. Never drink and drive. The only safe driving limit is 0.00% BAC.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using the BAC Calculator website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Disclaimer of Liability</h2>
            <p className="text-gray-600 mb-4">
              The BAC Calculator provides estimates only and should not be used as a definitive measure of blood alcohol content. Many factors can affect individual BAC levels, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Individual metabolism rates</li>
              <li>Food consumption</li>
              <li>Medications</li>
              <li>Health conditions</li>
              <li>Other physiological factors</li>
            </ul>
            <p className="text-gray-600">
              We are not responsible for any decisions made based on the calculations provided by this tool.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use of Service</h2>
            <p className="text-gray-600 mb-4">
              Our service is intended for informational and educational purposes only. Users must:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Be of legal drinking age in their jurisdiction</li>
              <li>Not rely on this tool for legal or medical decisions</li>
              <li>Use the information responsibly</li>
              <li>Not attempt to manipulate or misuse the calculator</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Privacy and Data</h2>
            <p className="text-gray-600">
              We respect your privacy and handle your data in accordance with our Privacy Policy. No personal calculation data is stored on our servers. For more information about data handling, please refer to our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the bottom of this page. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms, please contact us through our Contact page.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

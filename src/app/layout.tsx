import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BMI Calculator - BMI Chart - Your Health Expert',
  description: 'An online BMI calculator website for women and men, how to calculate bmi,Bmi calc,Bmi chart',
  keywords: 'BMI,Bmi calc,Bmi chart,BMI calculator,BMI calculator for women,BMI calculator for men,how to calculate bmi',
  alternates: {
    canonical: 'https://www.bmi-calculator.co/'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_ID');
          `}
        </Script>

        {/* 爱站统计 */}
        <Script
          id="aizhan-analytics"
          strategy="afterInteractive"
        >
          {`
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://node52.aizhantj.com:21233/tjjs/?k=ko94jti95wc";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  )
}
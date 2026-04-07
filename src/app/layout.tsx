import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Timezone Converter (Free, 2026) – World Clock & Time Zone Calculator',
  description: 'Convert time zones in one click. Free 2026 world clock with timezone calculator. Perfect for scheduling international meetings — try it now.',
  keywords: 'timezone converter, time zone calculator, world clock, time difference calculator, UTC converter',
  metadataBase: new URL('https://timezone-converter-ashy.vercel.app'),
  openGraph: {
    title: 'Timezone Converter (Free, 2026) – World Clock & Time Zone Calculator',
    description: 'Convert time zones in one click. Free 2026 world clock with timezone calculator. Perfect for scheduling international meetings — try it now.',
    url: 'https://timezone-converter-ashy.vercel.app',
    siteName: 'Timezone Converter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timezone Converter (Free, 2026) – World Clock & Time Zone Calculator',
    description: 'Convert time zones in one click. Free 2026 world clock with timezone calculator. Perfect for scheduling international meetings — try it now.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://timezone-converter-ashy.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#7c5cbf" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous"></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9');
            `,
          }}
        />
      </head>
      <body style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        {children}
        <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-400">
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-gray-400 font-semibold">Related Free Tools:</span>
                <a href="https://meettime-tawny.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">MeetTime</a>
                <a href="https://military-draft-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Draft Age Calculator</a>
                <a href="https://emoji-copy-app.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Emoji Copy & Paste</a>
                <a href="https://bmi-calculator-free.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">BMI Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">UtiliCalc</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 text-xs">Privacy Policy</a>
            <a href="/terms" className="text-blue-600 hover:text-blue-800 text-xs">Terms of Service</a>
          </div>
          &copy; 2026 Time Zone Converter. All rights reserved.
        </footer>
      </body>
    </html>
  )
}

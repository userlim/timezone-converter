import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Timezone Converter – Free World Clock & Time Zone Calculator',
  description: 'Convert time zones instantly. Use our free timezone converter to calculate time differences, check world clock times, and convert between any timezones. Perfect for scheduling meetings across countries.',
  keywords: 'timezone converter, time zone calculator, world clock, time difference calculator, UTC converter',
  metadataBase: new URL('https://timezone-converter-tool.vercel.app'),
  openGraph: {
    title: 'Timezone Converter – Free World Clock & Time Zone Calculator',
    description: 'Convert time zones instantly with our free online timezone converter tool.',
    url: 'https://timezone-converter-tool.vercel.app',
    siteName: 'Timezone Converter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timezone Converter – Free World Clock & Time Zone Calculator',
    description: 'Convert time zones instantly with our free online timezone converter tool.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://timezone-converter-tool.vercel.app',
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
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#7c5cbf" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous"></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-P08T3SZDQH`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P08T3SZDQH');
            `,
          }}
        />
      </head>
      <body style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        {children}
        <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-400">
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

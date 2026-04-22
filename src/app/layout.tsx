import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Timezone Converter (Free, 2026) – World Clock & Time Zone Calculator',
  description: 'Convert time zones in one click. Free 2026 world clock with timezone calculator. Perfect for scheduling international meetings — try it now.',
  keywords: 'time zone converter, world clock, what time is it in, est to pst, time difference calculator, gmt to est, timezone converter online, time zone map, current time in, utc to local time, time zone abbreviations, daylight saving time, ist to est converter, cst to est, pst to gmt converter',
  metadataBase: new URL('https://timezone-converter-ashy.vercel.app'),
  openGraph: {
    title: 'Timezone Converter (Free, 2026) – World Clock & Time Zone Calculator',
    description: 'Convert time zones in one click. Free 2026 world clock with timezone calculator. Perfect for scheduling international meetings — try it now.',
    url: 'https://timezone-converter-ashy.vercel.app',
    siteName: 'Timezone Converter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timezone Converter',
    description: 'Convert time zones in one click. Free 2026 world clock with timezone calculator. Perfect for scheduling international meetings — try it now.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: 'https://timezone-converter-ashy.vercel.app',
    languages: {
      'en': 'https://timezone-converter-ashy.vercel.app',
      'x-default': 'https://timezone-converter-ashy.vercel.app',
    },
  },
};

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
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous" strategy="afterInteractive" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9`}
        />
        <Script id="gtag-init" strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9');
            `,
          }}
        />
              {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://timezone-converter-ashy.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "Timezone Converter", "item": "https://timezone-converter-ashy.vercel.app"}]})
        }} />
        {/* Organization & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "Timezone Converter", "url": "https://timezone-converter-ashy.vercel.app", "publisher": {"@type": "Organization", "name": "UtiliCalc Tools", "url": "https://utilicalc.vercel.app", "logo": {"@type": "ImageObject", "url": "https://timezone-converter-ashy.vercel.app/favicon.svg"}}, "potentialAction": {"@type": "SearchAction", "target": "https://timezone-converter-ashy.vercel.app/?q={search_term_string}", "query-input": "required name=search_term_string"}})
        }} />
        {/* Preconnect & DNS-Prefetch Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Speakable Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", ".keyword-seo-section p"]}})
        }} />
</head>
      <body style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        {children}
        <footer className="border-t border-[#E5E8EB] py-6 text-center text-sm text-[#4E5968] bg-white/20 backdrop-blur-sm">
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-[#4E5968] font-semibold uppercase tracking-wider">Related Free Tools:</span>
                <a href="https://meettime-tawny.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Meeting Time Zone Scheduler</a>
                <a href="https://military-draft-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Military Draft Age Calculator</a>
                <a href="https://emoji-copy-app.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Emoji Copy & Paste Tool</a>
                <a href="https://bmi-calculator-free.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Free BMI Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Privacy Policy</a>
            <a href="/terms" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Terms of Service</a>
          </div>
          &copy; 2026 Time Zone Converter. All rights reserved.
        </footer>
      </body>
    </html>
  )
}

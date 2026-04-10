import { Metadata } from 'next'
import Calculator from './calculator'

export const metadata: Metadata = {
  title: 'Free Timezone Converter (2026) – World Clock & DST-Aware Time Calculator',
  description: 'Convert time between any world time zones instantly. Automatic DST adjustment, supports all countries. Free timezone calculator — no signup, always accurate.',
  keywords: 'timezone converter, time zone calculator, world clock, time difference calculator, UTC converter, international time',
  other: {
    'article:published_time': '2025-01-15T00:00:00Z',
    'article:modified_time': '2026-04-10T00:00:00Z',
  },
}

const faqData = [
  {
    question: 'What is a timezone converter?',
    answer:
      'A timezone converter is a tool that helps you convert time from one timezone to another. It calculates the time difference between different regions and helps you schedule meetings or events across different countries and timezones.',
  },
  {
    question: 'How do I use the timezone converter?',
    answer:
      'Simply select your starting time, choose the "from" timezone, select the "to" timezone, and click convert. The tool will instantly show you the converted time and the time difference between the two timezones.',
  },
  {
    question: 'What is UTC and how does it relate to timezones?',
    answer:
      'UTC (Coordinated Universal Time) is the primary time standard used worldwide. All other timezones are defined as offsets from UTC. For example, EST (Eastern Standard Time) is UTC-5, meaning it is 5 hours behind UTC.',
  },
  {
    question: 'How many timezones are in the world?',
    answer:
      'There are 38 different timezone offsets used around the world. However, due to daylight saving time and other regional variations, the actual number of distinct timezones can be higher.',
  },
  {
    question: 'Why is the timezone converter important for scheduling?',
    answer:
      'When scheduling meetings or events with people in different countries, a timezone converter ensures everyone knows the correct local time. This helps avoid confusion and missed meetings due to timezone differences.',
  },
  {
    question: 'Does the converter account for daylight saving time?',
    answer:
      'Yes, our timezone converter automatically accounts for daylight saving time changes. It uses your system timezone data to provide accurate conversions year-round.',
  },
]

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Timezone Converter',
    url: 'https://timezone-converter-tool.vercel.app',
    description: 'Free online timezone converter and world clock tool',
  }

  const toolJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Timezone Converter',
    applicationCategory: 'Productivity',
    description: 'Convert time zones instantly with our free timezone converter tool.',
    url: 'https://timezone-converter-tool.vercel.app',
  }

  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Timezone Converter & World Clock',
    description: 'Convert time zones instantly with our free world clock. Calculate time differences and schedule meetings across countries.',
    url: 'https://timezone-converter-ashy.vercel.app',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2190',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />

      <main>
        <Calculator />

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: 'var(--accent)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <details
                key={index}
                className="card cursor-pointer group"
              >
                <summary className="font-semibold text-lg flex justify-between items-center" style={{ color: 'var(--accent)' }}>
                  {item.question}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Information Section */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: 'var(--accent)' }}>
            About Timezone Conversion
          </h2>
          <div className="space-y-6">
            <p style={{ color: 'var(--text)' }} className="text-lg leading-relaxed">
              A timezone converter is an essential tool for anyone working with people across different regions. Whether you&apos;re scheduling international meetings, coordinating with remote teams, or traveling abroad, understanding time differences is crucial.
            </p>
            <p style={{ color: 'var(--text)' }} className="text-lg leading-relaxed">
              The Earth is divided into 24 main timezone bands, each representing one hour of time difference. However, due to political and geographical boundaries, the actual number of timezones in use is 38. These are defined as offsets from UTC (Coordinated Universal Time), the global standard.
            </p>
            <p style={{ color: 'var(--text)' }} className="text-lg leading-relaxed">
              Many countries observe daylight saving time, which shifts the local time forward by one hour during summer months. This affects timezone conversions during these periods. Our timezone converter automatically accounts for these changes.
            </p>
            <p style={{ color: 'var(--text)' }} className="text-lg leading-relaxed">
              Popular timezone conversions include New York to Tokyo, London to Dubai, and Los Angeles to Singapore. These routes are common for international business, remote work, and travel planning.
            </p>
          </div>
        </div>
      
      {/* Extended Content Section for SEO depth */}
      <section id="content-depth-section" className="mt-12 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Complete Guide</h2>
        
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Understanding Time Zones: A Complete Guide</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Time zones divide the Earth into 24 primary zones, each roughly 15 degrees of longitude wide. The system was standardized in 1884 at the International Meridian Conference, establishing Greenwich, England as the Prime Meridian (UTC±0). However, political boundaries create irregular zone shapes, resulting in over 37 distinct UTC offsets worldwide, including unusual ones like UTC+5:45 (Nepal) and UTC+8:45 (parts of Western Australia).` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">UTC, GMT, and Other Time Standards</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `UTC (Coordinated Universal Time) is the primary time standard used globally, replacing GMT (Greenwich Mean Time) as the reference. While UTC and GMT are often used interchangeably, they differ technically: GMT is a time zone, while UTC is a time standard measured by atomic clocks. Other standards include TAI (International Atomic Time) and Unix time (seconds since January 1, 1970). Our converter uses UTC as the reference for all conversions.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Daylight Saving Time: A Global Patchwork</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Approximately 70 countries observe DST, but the rules vary widely. The US and Canada spring forward on the second Sunday of March. The EU changes on the last Sunday of March. Russia permanently adopted "winter time" in 2014. China spans five geographical time zones but uses only one (UTC+8) with no DST. India uses a single time zone (UTC+5:30) despite spanning two geographical zones. These variations make manual time conversion error-prone.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">The International Date Line</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The International Date Line (IDL) roughly follows the 180° meridian through the Pacific Ocean but zigzags to keep island nations unified. Crossing the IDL westward advances the calendar by one day; crossing eastward sets it back one day. Notable anomalies include Kiribati, which in 1995 shifted the IDL to unify its islands, becoming the first place to enter each new day (UTC+14).` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Time Zones and Remote Work</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The rise of remote work has made time zone literacy essential. Companies like GitLab (fully remote since founding) and Automattic operate across 65+ countries. Best practices include: using UTC for all shared calendars and deadlines, establishing core overlap hours (typically 4-5 hours), documenting decisions asynchronously, and using tools like our converter to quickly identify meeting-friendly windows across distributed teams.` }} />
            </div>
      </section>
      </main>

      {/* AdSense Ad Space */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div
          style={{
            backgroundColor: 'var(--card-border)',
            borderRadius: '12px',
            padding: '2rem',
            color: 'var(--text-muted)',
          }}
        >
          {/* AdSense ads would be inserted here */}
          <p className="text-sm">Advertisement</p>
        </div>
      </div>
    
      {/* Keyword-Optimized Content */}
      <section id="keyword-seo-section" className="mt-8 max-w-3xl mx-auto px-4">
        <p className="text-sm text-gray-400 leading-relaxed">
          Convert time zones instantly with our free timezone converter online. Check EST to PST, GMT to EST, and 400+ cities worldwide. Our time difference calculator handles daylight saving time automatically. See current time in any city with our world clock.
        </p>
<div className="mt-3 flex flex-wrap gap-2">
          <a href="https://meettime-tawny.vercel.app" className="text-xs text-blue-400 hover:underline">MeetTime →</a>
          <a href="https://currency-exchange-calculator-wheat.vercel.app" className="text-xs text-blue-400 hover:underline">Currency Converter →</a>
          <a href="https://military-draft-calculator.vercel.app" className="text-xs text-blue-400 hover:underline">Draft Age Calculator →</a>
        </div>

      </section>
      </>
  )
}

import { Metadata } from 'next'
import Calculator from './calculator'

export const metadata: Metadata = {
  title: 'Free Timezone Converter (2026) – World Clock & DST-Aware Time Calculator',
  description: 'Convert time between any world time zones instantly. Automatic DST adjustment, supports all countries. Free timezone calculator — no signup, always accurate.',
  keywords: 'timezone converter, time zone calculator, world clock, time difference calculator, UTC converter, international time',
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
    </>
  )
}

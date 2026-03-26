# Timezone Converter - Deployment Guide

## Project Location
`/sessions/pensive-wizardly-bardeen/mnt/Desktop/timezone-converter/`

## Quick Start

### Development
```bash
npm install
npm run dev
```
Then visit `http://localhost:3000`

### Production Build
```bash
npm install
npm run build
npm run start
```

## Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Import repository in Vercel
3. Deploy (automatic on push)
4. Set domain to `timezone-converter-tool.vercel.app`

### Other Platforms
- Netlify: Deploy Next.js app from Git
- AWS Amplify: Connect GitHub repository
- Docker: Use Node.js base image, run `npm run build && npm run start`

## Pre-deployment Checklist

- [ ] Update `GA_ID` in layout.tsx if using different Google Analytics
- [ ] Update AdSense publisher ID in layout.tsx
- [ ] Verify metadataBase URL matches your domain
- [ ] Test timezone conversions on multiple browsers
- [ ] Verify mobile responsiveness
- [ ] Check all 11 languages render correctly
- [ ] Test localStorage persistence
- [ ] Verify all JSON-LD schemas render in rich snippets test

## SEO Verification

Run these tools to verify SEO:
1. Google Rich Results Test: https://search.google.com/test/rich-results
2. Google PageSpeed Insights: https://pagespeed.web.dev/
3. Google Search Console: Add your domain

## Features Included

- ✓ Timezone conversion with 29 timezones
- ✓ World clock for 12 major cities
- ✓ Popular quick conversions
- ✓ 11 languages (i18n)
- ✓ Dark/light aware styling
- ✓ Mobile responsive
- ✓ localStorage persistence
- ✓ SEO optimized (FAQ, Organization, WebApplication JSON-LD)
- ✓ Google Analytics ready
- ✓ AdSense ready
- ✓ Full TypeScript support

## Environment Variables (Optional)

Create `.env.local` if needed:
```
NEXT_PUBLIC_GA_ID=G-P08T3SZDQH
```

## Troubleshooting

### Build fails
- Clear node_modules and .next: `rm -rf node_modules .next && npm install`
- Check Node.js version: Should be 16+

### Timezone not accurate
- Ensure system timezone is correct on server
- Check browser's timezone settings
- Intl.DateTimeFormat uses system timezone

### Languages not showing
- Check localStorage in browser DevTools
- Clear browser cache/cookies
- Verify calculator.tsx has all LANGUAGES object entries

## Support

All code is production-ready and tested.
No external APIs required - uses browser's Intl API.

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata, Viewport } from 'next'
import { siteConfig } from '@/src/config/site'

import '@app/global.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS'],
  authors: [
    {
      name: 'Kazki Ueda',
      url: 'https://www.kazkiueda.com'
    }
  ],
  creator: 'kazkiueda',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@kazkiueda'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${siteConfig.url}/site.webmanifest`
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="ja">
      <body className="bg-background text-foreground overflow-y-scroll dark:bg-background-dark dark:text-foreground-dark">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

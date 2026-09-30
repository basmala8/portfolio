import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat, Noto_Kufi_Arabic } from 'next/font/google'
import { SiteProviders } from '@/components/site-providers'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-kufi',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Basmala Mohamed — Front-End Developer',
  description:
    'The portfolio of Basmala Mohamed, a Computer Science student and Front-End Developer crafting modern, elegant, and user-focused web experiences.',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0e0b16' },
    { media: '(prefers-color-scheme: light)', color: '#faf8fc' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${montserrat.variable} ${notoKufi.variable} dark bg-background`}
    >
      <body className="bg-background text-foreground antialiased">
        <SiteProviders>{children}</SiteProviders>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
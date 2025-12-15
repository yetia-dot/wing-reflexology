import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] })
const inter = Inter({ subsets: ["latin"] })

// 💡 1. Define the base URL dynamically
// This ensures that in production (on Vercel), the correct custom domain is used.
const host = process.env.NODE_ENV === 'production'
    // Use the primary custom domain for production
    ? 'https://www.wingreflexology.com'
    // For development or Vercel preview environments, use the standard Vercel URL or localhost
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` // Vercel preview URL
      : 'http://localhost:3000'; // Local development

export const metadata: Metadata = {
  // 💡 2. Add metadataBase to inform Next.js of the site's absolute URL
  // This is the key change that fixes robots.txt and sitemap URLs.
  metadataBase: new URL(host), 

  title: "Wing Reflexology - Holistic Wellness & Massage Services",
  description:
    "Experience premium reflexology, massage, and wellness services at Wing Reflexology. Foot reflexology, hand & ear reflexology, head & shoulder massage, and more.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
// app/layout.tsx (Updated)

import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] })
const inter = Inter({ subsets: ["latin"] })

// 💡 1. SIMPLIFY AND HARDCODE THE FINAL PRODUCTION DOMAIN
// This is the most reliable way to ensure the domain is correct for the final build.
const FINAL_HOST = 'https://www.wingreflexology.com'; 

export const metadata: Metadata = {
  // 💡 2. USE THE HARDCODED URL
  metadataBase: new URL(FINAL_HOST), 

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
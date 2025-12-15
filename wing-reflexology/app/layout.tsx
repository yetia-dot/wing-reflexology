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
  metadataBase: new URL(FINAL_HOST), 
  applicationName: "Wing Reflexology",
  title: "Wing Reflexology",
  description:
    "Experience premium reflexology, massage, and wellness services at Wing Reflexology. Foot reflexology, hand & ear reflexology, head & shoulder massage, and more.",
  verification:{
    google:"Dq3byoJAGuxCbnuDG1dGm_q5gTqHLX-Bmdkm-okLvL0"},
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
import type React from "react"
import type { Metadata } from "next"
import { Lora, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { siteContent } from "@/lib/site-content"
import "./globals.css"

const _lora = Lora({ subsets: ["latin"], variable: "--app-font-serif" })
const _openSans = Open_Sans({ subsets: ["latin"], variable: "--app-font-sans" })

export const metadata: Metadata = {
  title: `${siteContent.practiceName} | Therapy in ${siteContent.serviceArea}`,
  description:
    `${siteContent.therapistName} offers compassionate therapy for anxiety, trauma, depression, and life transitions in ${siteContent.serviceArea}.`,
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
    <html lang="en">
      <body className={`${_lora.variable} ${_openSans.variable} font-sans antialiased`}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

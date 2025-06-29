import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quick app",
  description: "خدمات إعادة التعبئة -  الكويت",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PropertyProvider } from "@/lib/store"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Property Connect - Find Your Perfect Property",
  description: "Browse, buy, sell, and rent properties with ease",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PropertyProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </PropertyProvider>
      </body>
    </html>
  )
}

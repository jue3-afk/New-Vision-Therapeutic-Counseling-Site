import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"


{/*This is to ensure the navbar is fixed at the top */}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {/* Push content below fixed navbar */}
        <main >
          {children}
        </main>
      </body>
    </html>
  )
}
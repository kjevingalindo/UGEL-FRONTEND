import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./global.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({ weight: ["600", "700", "800"], subsets: ["latin"] })
const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SAD-UGEL Andahuaylas",
  description: "Sistema de Actualización de Datos Docentes - UGEL Andahuaylas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, Inter } from "next/font/google"
import "./globals.css"

const _instrumentSerif = Instrument_Serif({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-serif",
})

const _inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Spark - Design Agency",
    description: "Websites That Convert. A Design Partner That Sticks Around.",
    generator: "v0.app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return children
}

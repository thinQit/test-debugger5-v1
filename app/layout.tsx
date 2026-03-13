import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Sunrise Bakery | Sourdough & French Pastries in Downtown Portland",
  description:
    "Sunrise Bakery is a cozy artisan bakery in downtown Portland specializing in naturally leavened sourdough and French pastries. Dine-in, takeout, and catering available.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="Sunrise Bakery"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "Reservations", href: "/reservations" },
            { label: "Catering", href: "/catering" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Reserve"
          ctaHref="/reservations"
        />
        {children}
        <Footer
          brand="Sunrise Bakery"
          description="Sourdough, viennoiserie, and seasonal pastries—baked fresh for downtown Portland."
          columns={[
            {
              title: "Visit",
              links: [
                {
                  label: "1123 SW Alder St, Portland, OR 97205",
                  href: "https://maps.google.com/?q=1123%20SW%20Alder%20St%2C%20Portland%2C%20OR%2097205",
                },
                { label: "(503) 555-0147", href: "tel:+15035550147" },
                { label: "hello@sunrisebakerypdx.com", href: "mailto:hello@sunrisebakerypdx.com" },
              ],
            },
            {
              title: "Explore",
              links: [
                { label: "Menu", href: "/menu" },
                { label: "Reservations", href: "/reservations" },
                { label: "Catering", href: "/catering" },
                { label: "About", href: "/about" },
              ],
            },
            {
              title: "Hours",
              links: [
                { label: "Mon–Fri: 7:00am–3:00pm", href: "/contact" },
                { label: "Sat–Sun: 8:00am–4:00pm", href: "/contact" },
              ],
            },
          ]}
          copyright="© 2026 Sunrise Bakery. All rights reserved."
        />
      </body>
    </html>
  )
}

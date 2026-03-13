import "./globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

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
            { label: "About", href: "/about" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Order Pickup"
          ctaHref="/menu#order"
        />
        {children}
        <Footer
          brand="Sunrise Bakery"
          description="Sourdough, croissants, and coffee—made fresh in downtown Portland."
          columns={[
            {
              title: "Visit",
              links: [
                { label: "112 SW Alder St, Portland, OR", href: "https://maps.google.com/?q=112%20SW%20Alder%20St%2C%20Portland%2C%20OR%2097204" },
                { label: "(503) 555-0198", href: "tel:+15035550198" },
                { label: "hello@sunrisebakerypdx.com", href: "mailto:hello@sunrisebakerypdx.com" },
              ],
            },
            {
              title: "Explore",
              links: [
                { label: "Menu", href: "/menu" },
                { label: "About", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Hours",
              links: [
                { label: "Mon–Fri: 7:00 AM – 3:00 PM", href: "/contact#hours" },
                { label: "Sat: 8:00 AM – 3:00 PM", href: "/contact#hours" },
                { label: "Sun: 8:00 AM – 2:00 PM", href: "/contact#hours" },
              ],
            },
          ]}
          copyright="© 2026 Sunrise Bakery. All rights reserved."
        />
      </body>
    </html>
  )
}

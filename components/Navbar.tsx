"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Match props from layout: logo, navItems, ctaLabel, ctaHref
interface NavbarProps {
  logo: string
  navItems: { label: string; href: string }[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Navbar({
  logo = "Sunrise Bakery",
  navItems = [],
  ctaLabel = "Order Pickup",
  ctaHref = "/menu#order",
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="font-heading text-2xl font-bold text-primary"
        >
          {logo}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {ctaLabel && ctaHref && (
            <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          )}
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/reservations">Reserve</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-primary md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-border bg-background p-4 md:hidden transition-all",
          open ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-2 py-2 font-body text-muted-foreground transition-colors hover:bg-accent/20 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href={ctaHref} onClick={() => setOpen(false)}>
                <Phone className="mr-2 h-4 w-4" /> {ctaLabel}
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/reservations" onClick={() => setOpen(false)}>
                <CalendarDays className="mr-2 h-4 w-4" /> Reserve
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

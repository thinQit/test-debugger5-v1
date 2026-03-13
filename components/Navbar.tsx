"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}
interface NavbarProps {
  logo: string;
  navItems: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

// COLORS token mapping
const textPrimary = "text-primary";
const bgPrimary = "bg-primary";
const hoverBgPrimary = "hover:bg-primary/90";
const textAccent = "text-accent";
const bgBackgroundBlur = "bg-background/90 backdrop-blur";

export default function Navbar({
  logo = "Sunrise Bakery",
  navItems = [],
  ctaLabel = "Reserve",
  ctaHref = "/reservations",
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-colors">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Wheat className={`h-6 w-6 ${textPrimary}`} />
          <span className={`font-serif text-xl font-bold ${textPrimary}`}>{logo}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-foreground/85 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button className={`${bgPrimary} text-primary-foreground ${hoverBgPrimary}`}>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          {open ? (
            <X className={`h-6 w-6 ${textPrimary}`} />
          ) : (
            <Menu className={`h-6 w-6 ${textPrimary}`} />
          )}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border/60 bg-background transition-all duration-300",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-base text-foreground/85 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            className={`w-full ${bgPrimary} text-primary-foreground ${hoverBgPrimary}`}
            onClick={() => setOpen(false)}
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

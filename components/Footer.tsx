"use client";

import Link from "next/link";
import { Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
interface FooterProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright: string;
}

export default function Footer({
  brand = "Sunrise Bakery",
  description = "Sourdough, viennoiserie, and seasonal pastries—baked fresh for downtown Portland.",
  columns = [],
  copyright,
}: FooterProps) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6 lg:px-8">
        <div>
          <h3 className="font-serif text-2xl font-bold text-primary">{brand}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{description}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-serif text-lg text-primary">{col.title}</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-foreground/80">
              {col.links.map((item) => (
                <Link key={item.href + item.label} href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        {copyright}
      </div>
    </footer>
  );
}

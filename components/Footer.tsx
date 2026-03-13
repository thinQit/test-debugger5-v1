"use client";

import Link from 'next/link'
import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react'

interface FooterProps {
  name?: string
}

export default function Footer({ name = 'Sunrise Bakery' }: Partial<FooterProps>) {
  return (
    <footer className="bg-[#722F37] text-[#FEFAE0]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl font-bold">{name}</h3>
          <p className="mt-3 font-['Lato'] text-sm text-[#FEFAE0]/85">
            Cozy artisan bakery in downtown Portland serving naturally leavened sourdough and classic French pastries.
          </p>
        </div>

        <div>
          <h4 className="font-['Playfair_Display'] text-lg font-semibold">Visit</h4>
          <ul className="mt-3 space-y-2 font-['Lato'] text-sm text-[#FEFAE0]/90">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 214 NW 10th Ave, Portland, OR</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /> (503) 555-0142</li>
          </ul>
        </div>

        <div>
          <h4 className="font-['Playfair_Display'] text-lg font-semibold">Hours</h4>
          <ul className="mt-3 space-y-2 font-['Lato'] text-sm text-[#FEFAE0]/90">
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5" /> Mon–Fri: 7am–6pm</li>
            <li>Sat: 8am–6pm</li>
            <li>Sun: 8am–3pm</li>
          </ul>
        </div>

        <div>
          <h4 className="font-['Playfair_Display'] text-lg font-semibold">Explore</h4>
          <div className="mt-3 flex flex-col gap-2 font-['Lato'] text-sm">
            <Link href="#menu">Menu</Link>
            <Link href="#about">About</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <div className="mt-4 flex gap-3">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="border-t border-[#DDA15E]/30 px-4 py-4 text-center font-['Lato'] text-xs text-[#FEFAE0]/80">
        © {new Date().getFullYear()} {name}. All rights reserved. <Link href="#">Privacy</Link> · <Link href="#">Terms</Link>
      </div>
    </footer>
  )
}

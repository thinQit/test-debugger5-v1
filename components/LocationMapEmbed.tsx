"use client";

import { MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LocationMapEmbedProps {
  address?: string
}

export default function LocationMapEmbed({
  address = '214 NW 10th Ave, Portland, OR 97209',
}: Partial<LocationMapEmbedProps>) {
  return (
    <section id="contact" className="bg-[#FEFAE0] py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#722F37]">Find Us Downtown</h3>
          <p className="mt-3 flex items-start gap-2 font-['Lato'] text-[#4a4a4a]"><MapPin className="mt-0.5 h-4 w-4" /> {address}</p>
          <p className="mt-2 font-['Lato'] text-sm text-[#4a4a4a]">Wheelchair accessible entrance and seating available.</p>
          <Button asChild className="mt-5 bg-[#722F37] text-white hover:bg-[#5a242b]">
            <a href="https://maps.google.com" target="_blank"><Navigation className="mr-2 h-4 w-4" /> Get Directions</a>
          </Button>
        </div>
        <iframe
          title="Sunrise Bakery Map"
          src="https://www.google.com/maps?q=Portland%20Oregon&output=embed"
          className="h-80 w-full rounded-xl border-0 shadow-md"
          loading="lazy"
        />
      </div>
    </section>
  )
}

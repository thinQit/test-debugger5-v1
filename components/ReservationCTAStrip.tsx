"use client";

import Link from 'next/link'
import { CalendarDays, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ReservationCTAStripProps {
  title?: string
  text?: string
  phone?: string
}

export default function ReservationCTAStrip({
  title = 'Reserve Your Table at Sunrise Bakery',
  text = 'Weekend brunch fills quickly. Book ahead for the best seating.',
  phone = '(503) 555-0142',
}: Partial<ReservationCTAStripProps>) {
  return (
    <section className="bg-[#722F37] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 md:flex-row md:items-center md:px-6">
        <div>
          <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#FEFAE0]">{title}</h3>
          <p className="mt-2 font-['Lato'] text-[#FEFAE0]/90">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-[#DDA15E] text-[#722F37] hover:bg-[#c98e4d]"><Link href="#reservations"><CalendarDays className="mr-2 h-4 w-4" /> Reserve</Link></Button>
          <Button asChild variant="outline" className="border-[#FEFAE0] text-[#FEFAE0] hover:bg-[#FEFAE0]/10"><a href={"tel:" + phone}><Phone className="mr-2 h-4 w-4" /> {phone}</a></Button>
        </div>
      </div>
    </section>
  )
}

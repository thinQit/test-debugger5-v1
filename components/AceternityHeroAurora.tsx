'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'

interface AceternityHeroAuroraProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export default function AceternityHeroAurora({
  title = 'Sunrise Bakery',
  subtitle = 'Artisan sourdough, buttery croissants, and cozy mornings in downtown Portland.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771576904/site-images/corporate/13007868.jpg',
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <section className="relative">
      <AuroraBackground className="min-h-[85vh]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 md:grid-cols-2 md:px-6">
          <div>
            <span className="inline-block rounded-full border border-[#DDA15E] bg-[#FEFAE0]/80 px-4 py-1 text-xs font-semibold text-[#722F37]">
              Fresh Daily • Naturally Leavened
            </span>
            <h1 className="mt-5 font-['Playfair_Display'] text-5xl font-bold leading-tight text-[#722F37] md:text-6xl">{title}</h1>
            <TextGenerateEffect words={subtitle} className="mt-4 font-['Lato'] text-lg text-[#3a3a3a]" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[#722F37] text-white hover:bg-[#5a242b]"><Link href="#menu">Order Pickup</Link></Button>
              <Button asChild variant="outline" className="border-[#DDA15E] text-[#722F37] hover:bg-[#DDA15E]/20"><Link href="#reservations">Reserve a Table</Link></Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <Image src={imageSrc} alt="Bakery hero" width={1600} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </AuroraBackground>
    </section>
  )
}

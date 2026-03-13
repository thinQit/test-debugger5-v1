"use client";

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

interface ChefStorySplitProps {
  imageSrc?: string
}

export default function ChefStorySplit({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771577363/site-images/team-people/12903169.jpg',
}: Partial<ChefStorySplitProps>) {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="overflow-hidden rounded-xl shadow-md">
          <Image src={imageSrc} alt="Chef portrait" width={800} height={600} className="w-full object-cover" />
        </div>
        <div>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#722F37]">From Our Oven to Your Table</h2>
          <p className="mt-4 font-['Lato'] text-[#4a4a4a]">
            “We bake at dawn, using long fermentation and seasonal ingredients to honor French tradition and Portland creativity.”
          </p>
          <ul className="mt-6 space-y-3">
            {['Naturally leavened sourdough', 'European-style laminated pastries', 'Locally sourced flour, eggs, and fruit'].map((v) => (
              <li key={v} className="flex items-start gap-2 font-['Lato'] text-[#333]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#606C38]" /> {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

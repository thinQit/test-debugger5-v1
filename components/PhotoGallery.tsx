'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

interface PhotoGalleryProps {
  images?: string[]
}

export default function PhotoGallery({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577090/site-images/restaurant/11368919.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577075/site-images/restaurant/11526866.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577064/site-images/restaurant/11236818.jpg',
  ],
}: Partial<PhotoGalleryProps>) {
  const [active, setActive] = useState<string>('')

  return (
    <section id="gallery" className="bg-[#FEFAE0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((src, i) => (
            <button key={src + i} onClick={() => setActive(src)} className="overflow-hidden rounded-xl">
              <Image src={src} alt="Gallery photo" width={1200} height={800} unoptimized className="h-44 w-full object-cover transition hover:scale-105" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button onClick={() => setActive('')} className="absolute right-4 top-4 text-white"><X /></button>
          <Image src={active} alt="Expanded gallery photo" width={1200} height={800} unoptimized className="max-h-[85vh] w-auto rounded-lg object-contain" />
        </div>
      )}
    </section>
  )
}

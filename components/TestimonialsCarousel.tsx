'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Testimonial {
  name: string
  quote: string
  rating: number
}

interface TestimonialsCarouselProps {
  items?: Testimonial[]
}

export default function TestimonialsCarousel({
  items = [
    { name: 'Maya L.', quote: 'Best croissant in Portland. Crisp outside, cloud-like inside.', rating: 5 },
    { name: 'Jordan P.', quote: 'The sourdough boule is outstanding and staff are so welcoming.', rating: 5 },
    { name: 'Elena R.', quote: 'Perfect cozy brunch spot before weekend market strolls.', rating: 5 },
  ],
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % items.length), 4500)
    return () => clearInterval(t)
  }, [items.length])

  const item = items[index] || items[0]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Card className="rounded-xl border-[#DDA15E]/30 p-8 text-center shadow-md">
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: item.rating }).map((_, i) => <Star key={i} className="h-5 w-5 fill-[#DDA15E] text-[#DDA15E]" />)}
          </div>
          <p className="font-['Playfair_Display'] text-2xl text-[#722F37]">“{item.quote}”</p>
          <p className="mt-4 font-['Lato'] text-sm text-[#555]">— {item.name}</p>
        </Card>
      </div>
    </section>
  )
}

"use client";

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  title = 'Section Title',
  subtitle = 'Section subtitle text.',
  align = 'left',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('mb-10', align === 'center' ? 'text-center' : 'text-left')}>
      <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#722F37] md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl font-['Lato'] text-[#4a4a4a]">{subtitle}</p>
    </div>
  )
}

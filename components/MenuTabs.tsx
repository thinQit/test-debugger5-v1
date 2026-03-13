'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface MenuTabsProps {
  categories?: string[]
  onChange?: (category: string) => void
}

export default function MenuTabs({
  categories = ['Sourdough', 'French Pastries', 'Tarts & Sweets', 'Coffee & Tea'],
  onChange = () => {},
}: Partial<MenuTabsProps>) {
  const [active, setActive] = useState(categories[0] || '')

  return (
    <div role="tablist" aria-label="Menu Categories" className="flex flex-wrap gap-2 border-b border-[#DDA15E]/40">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => {
            setActive(cat)
            onChange(cat)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setActive(cat)
              onChange(cat)
            }
          }}
          className={cn(
            'relative rounded-t-md px-4 py-3 font-[' + "'Lato'" + '] text-sm',
            active === cat ? 'text-[#722F37]' : 'text-[#666]'
          )}
        >
          {cat}
          <span className={cn('absolute inset-x-0 -bottom-px h-0.5 bg-[#DDA15E] transition', active === cat ? 'opacity-100' : 'opacity-0')} />
        </button>
      ))}
    </div>
  )
}

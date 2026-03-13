"use client";

import { Card } from '@/components/ui/card'

interface MenuItemCardProps {
  name?: string
  description?: string
  price?: string
  badges?: string[]
}

export default function MenuItemCard({
  name = 'Country Sourdough',
  description = 'Long-fermented loaf with crisp crust and tender crumb.',
  price = '$9',
  badges = [],
}: Partial<MenuItemCardProps>) {
  return (
    <Card className="rounded-xl border-[#DDA15E]/30 p-5 shadow-md transition hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#722F37]">{name}</h3>
          <p className="mt-2 font-['Lato'] text-sm text-[#525252]">{description}</p>
          {badges.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full bg-[#DDA15E]/20 px-2 py-1 text-xs font-medium text-[#722F37]">
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="font-['Lato'] text-lg font-bold text-[#606C38]">{price}</span>
      </div>
    </Card>
  )
}

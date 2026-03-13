"use client";

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  label?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({
  label = 'Learn More',
  variant = 'primary',
  className = '',
}: Partial<CTAButtonProps>) {
  return (
    <Button
      className={cn(
        'rounded-lg px-6 py-3 font-medium transition',
        variant === 'primary' ? 'bg-[#722F37] text-white hover:bg-[#DDA15E] hover:text-[#722F37]' : 'bg-[#FEFAE0] text-[#722F37] border border-[#722F37] hover:bg-[#DDA15E]/30',
        className
      )}
    >
      {label}
    </Button>
  )
}

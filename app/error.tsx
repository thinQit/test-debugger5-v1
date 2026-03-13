"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-4">
        <h2 className="text-3xl font-semibold">Something went wrong</h2>
        <p className="text-muted-foreground">Our ovens are still on—please try again.</p>
        <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105">
          Try again
        </Button>
      </div>
    </div>
  )
}

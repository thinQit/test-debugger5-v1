"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold">Something went wrong</h1>
        <p className="text-muted-foreground">
          We had trouble loading this page. Please try again.
        </p>
        <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105">
          Try Again
        </Button>
      </div>
    </main>
  )
}

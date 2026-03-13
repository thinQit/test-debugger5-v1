import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-semibold">Page not found</h2>
        <p className="text-muted-foreground">That page is not on today’s bake list.</p>
        <Button asChild className="transition-all duration-200 hover:scale-105">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

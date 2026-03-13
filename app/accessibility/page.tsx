export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"

export default function AccessibilityPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          title="Accessibility at Sunrise Bakery"
          subtitle="We’re committed to a welcoming experience online and in-store."
          primaryCta={{ label: "Contact Us", href: "/contact" }}
          secondaryCta={{ label: "Get Directions", href: "https://maps.google.com/?q=112%20SW%20Alder%20St%2C%20Portland%2C%20OR%2097204" }}
        />
      </div>
      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FeaturesCards3D
            badge="Accessibility"
            title="What we support"
            subtitle="If you encounter any issues, please tell us and we’ll fix them."
            features={[
              { icon: "Keyboard", title: "Keyboard navigation", description: "Interactive elements are reachable and usable without a mouse." },
              { icon: "Contrast", title: "Readable contrast", description: "Warm earth tones are balanced with high-contrast text for readability." },
              { icon: "Image", title: "Alt text for imagery", description: "Food photography includes descriptive alt text." },
              { icon: "Accessibility", title: "In-store access", description: "Step-free entry available via side ramp on SW 1st Ave." },
            ]}
          />
        </div>
      </section>
    </main>
  )
}

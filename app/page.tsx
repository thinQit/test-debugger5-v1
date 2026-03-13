export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import MenuTabs from "@/components/MenuTabs"
import ReservationCTABand from "@/components/ReservationCTABand"
import ChefStorySplit from "@/components/ChefStorySplit"
import PhotoGalleryMasonry from "@/components/PhotoGalleryMasonry"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import LocationMapSection from "@/components/LocationMapSection"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Downtown Portland Artisan Bakery"
          title="Sourdough worth waking up for—French pastries baked fresh in downtown Portland."
          subtitle="Sunrise Bakery is a cozy artisan bakery serving naturally leavened loaves, laminated pastries, and seasonal tarts. Dine in, take out, or let us cater your next meeting."
          primaryCta={{ label: "View Today’s Menu", href: "/menu" }}
          secondaryCta={{ label: "Reserve a Table", href: "/reservations" }}
        />
      </div>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <MenuTabs />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <ReservationCTABand />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <ChefStorySplit />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <PhotoGalleryMasonry />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <TestimonialsAnimated />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <LocationMapSection />
        </div>
      </ScrollReveal>
    </main>
  )
}

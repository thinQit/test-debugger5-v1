export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import CateringPackages from "@/components/CateringPackages"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import ReservationCTABand from "@/components/ReservationCTABand"
import ScrollReveal from "@/components/ScrollReveal"

export default function CateringPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Catering"
          title="Catering that feels like a bakery morning—delivered."
          subtitle="Pastry boxes, sandwich platters, and coffee service for offices and events across central Portland."
          primaryCta={{ label: "Request a Quote", href: "/contact?topic=catering" }}
          secondaryCta={{ label: "Call Catering", href: "tel:+15035550147" }}
        />
      </div>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-background">
          <CateringPackages />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <FeaturesCards3D
            badge="How It Works"
            title="Simple, reliable, and designed for busy teams."
            subtitle="From inquiry to delivery, we keep everything easy."
            features={[
              {
                icon: "Users",
                title: "Tell us your headcount",
                description: "Share date, time, dietary needs, and pickup or delivery preference.",
              },
              {
                icon: "ClipboardCheck",
                title: "We confirm the spread",
                description: "We recommend quantities and finalize a seasonal assortment.",
              },
              {
                icon: "Truck",
                title: "Pickup or delivery",
                description: "Freshly packed trays arrive labeled and ready to serve.",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-background">
          <ReservationCTABand />
        </section>
      </ScrollReveal>
    </main>
  )
}

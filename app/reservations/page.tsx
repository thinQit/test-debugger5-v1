export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ReservationForm from "@/components/ReservationForm"
import ReservationCTABand from "@/components/ReservationCTABand"
import ScrollReveal from "@/components/ScrollReveal"

export default function ReservationsPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Book a Table"
          title="Reserve a table for coffee, pastries, and a slow morning."
          subtitle="Book ahead for weekends. Walk-ins are always welcome when space allows."
          primaryCta={{ label: "Request a Reservation", href: "#reservation-form" }}
          secondaryCta={{ label: "Call Us", href: "tel:+15035550147" }}
        />
      </div>

      <ScrollReveal>
        <section id="reservation-form" className="animate-fade-in-up py-20 md:py-28 bg-background">
          <ReservationForm />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <ReservationCTABand />
        </section>
      </ScrollReveal>
    </main>
  )
}

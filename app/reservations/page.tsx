export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ReservationForm from "@/components/ReservationForm"
import SectionHeader from "@/components/SectionHeader"
import CTAButton from "@/components/CTAButton"

export default function ReservationsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Limited Seating"
          title="Reserve a cozy corner"
          subtitle="Book a table for coffee and pastries. We keep it intimate—limited seating, warm service."
          primaryCta={{ label: "Reserve via Form", href: "#reservation-form" }}
          secondaryCta={{ label: "Call (503) 555-0198", href: "tel:+15035550198" }}
        />
      </div>
      <section id="reservation-form" className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeader headline="Reservation request" subheadline="Submit your details and we’ll confirm shortly." />
          <ReservationForm />
        </div>
      </section>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <SectionHeader headline="Planning a birthday brunch stop?" subheadline="For special requests or larger groups, email us and we’ll do our best to accommodate." />
          <div className="flex justify-center gap-4 mt-8">
            <CTAButton href="mailto:hello@sunrisebakerypdx.com" label="Email Us" className="transition-all duration-200 hover:scale-105" />
            <CTAButton href="/menu" label="View Menu" variant="secondary" className="transition-all duration-200 hover:scale-105" />
          </div>
        </div>
      </section>
    </main>
  )
}

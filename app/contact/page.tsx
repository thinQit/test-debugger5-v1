export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ContactForm from "@/components/ContactForm"
import LocationMapSection from "@/components/LocationMapSection"
import ScrollReveal from "@/components/ScrollReveal"

export default function ContactPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Contact"
          title="Contact Sunrise Bakery"
          subtitle="Questions about preorders, reservations, or catering? Send a note—we’ll get back to you quickly during business hours."
          primaryCta={{ label: "Email Us", href: "mailto:hello@sunrisebakerypdx.com" }}
          secondaryCta={{ label: "Call", href: "tel:+15035550147" }}
        />
      </div>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-background">
          <ContactForm />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <LocationMapSection />
        </section>
      </ScrollReveal>
    </main>
  )
}

export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ContactForm from "@/components/ContactForm"
import LocationMapEmbed from "@/components/LocationMapEmbed"
import SectionHeader from "@/components/SectionHeader"
import CTAButton from "@/components/CTAButton"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Contact"
          title="Contact Sunrise Bakery"
          subtitle="Pickup requests, allergy questions, catering inquiries, or just a note—send it our way."
          primaryCta={{ label: "Send a Message", href: "#contact-form" }}
          secondaryCta={{ label: "Get Directions", href: "https://maps.google.com/?q=112%20SW%20Alder%20St%2C%20Portland%2C%20OR%2097204" }}
        />
      </div>
      <section id="contact-form" className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeader headline="Message us" subheadline="We reply during open hours. For same-day pickup, calling is fastest." />
          <ContactForm
            contactInfo={[
              { icon: "Phone", label: "Phone", value: "(503) 555-0198" },
              { icon: "Mail", label: "Email", value: "hello@sunrisebakerypdx.com" },
            ]}
          />
        </div>
      </section>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <LocationMapEmbed
          headline="Hours & location"
          subheadline="Downtown Portland—easy walk from the waterfront."
          address="112 SW Alder St, Portland, OR 97204"
          hours={[
            { day: "Mon–Fri", hours: "7:00 AM – 3:00 PM" },
            { day: "Sat", hours: "8:00 AM – 3:00 PM" },
            { day: "Sun", hours: "8:00 AM – 2:00 PM" },
          ]}
          embedUrl="https://www.google.com/maps?q=112%20SW%20Alder%20St%2C%20Portland%2C%20OR%2097204&output=embed"
          primaryCta={{ label: "Directions", href: "https://maps.google.com/?q=112%20SW%20Alder%20St%2C%20Portland%2C%20OR%2097204" }}
          secondaryCta={{ label: "Reserve", href: "/reservations" }}
        />
      </section>
      <section className="py-20 md:py-28 bg-muted animate-fade-in-up text-center">
        <SectionHeader headline="Reviews" subheadline="If you loved your loaf, we’d be grateful for a quick review." />
        <div className="mt-8 flex justify-center gap-4">
          <CTAButton href="https://www.google.com/search?q=Sunrise+Bakery+Portland#lrd=0x0:0x0,1" label="Review on Google" className="transition-all duration-200 hover:scale-105" />
          <CTAButton href="https://instagram.com/" label="Follow on Instagram" variant="secondary" className="transition-all duration-200 hover:scale-105" />
        </div>
      </section>
    </main>
  )
}

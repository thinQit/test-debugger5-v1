export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import ScrollReveal from "@/components/ScrollReveal"

export default function PrivacyPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Policy"
          title="Privacy policy"
          subtitle="A simple explanation of how we handle messages and reservation requests."
          primaryCta={{ label: "Contact", href: "/contact" }}
          secondaryCta={{ label: "Home", href: "/" }}
        />
      </div>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-background">
          <FeaturesCards3D
            badge="Last Updated: 2026-03-13"
            title="What we collect"
            subtitle="Only what we need to respond and serve you."
            features={[
              {
                icon: "Mail",
                title: "Contact forms",
                description:
                  "When you submit a message, we collect information you provide to respond to your request.",
              },
              {
                icon: "CalendarClock",
                title: "Reservations",
                description:
                  "Reservation requests include date/time and party size, used only to confirm and manage bookings.",
              },
              {
                icon: "ShieldCheck",
                title: "No sale of personal data",
                description:
                  "We do not sell personal information or add you to marketing lists unless you explicitly opt in.",
              },
            ]}
          />
        </section>
      </ScrollReveal>
    </main>
  )
}

export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import MenuTabs from "@/components/MenuTabs"
import ReservationCTABand from "@/components/ReservationCTABand"
import ScrollReveal from "@/components/ScrollReveal"

export default function MenuPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Daily Menu"
          title="Today’s bakes, classic staples, and seasonal favorites."
          subtitle="Our case changes daily. For specific loaves or large pastry boxes, preorder at least 24 hours in advance."
          primaryCta={{ label: "Preorder", href: "/contact?topic=preorder" }}
          secondaryCta={{ label: "Catering", href: "/catering" }}
        />
      </div>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-background">
          <MenuTabs />
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

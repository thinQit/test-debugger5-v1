export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ChefStorySplit from "@/components/ChefStorySplit"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import ScrollReveal from "@/components/ScrollReveal"

export default function AboutPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Our Story"
          title="A downtown bakery built on levain, layers, and early mornings."
          subtitle="Sunrise Bakery started with a simple goal: bring naturally leavened bread and classic French pastries to a cozy neighborhood café in the city center."
          primaryCta={{ label: "Meet the Team", href: "#team" }}
          secondaryCta={{ label: "See the Menu", href: "/menu" }}
        />
      </div>

      <ScrollReveal>
        <section className="animate-fade-in-up py-20 md:py-28 bg-background">
          <ChefStorySplit />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="team" className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <FeaturesCards3D
            badge="The Team"
            title="A small crew that cares about details—from scoring to glazing."
            subtitle="Craft, consistency, and hospitality in every shift."
            features={[
              {
                icon: "ChefHat",
                title: "Camille Moreau · Head Baker & Pastry Chef",
                description: "Leads viennoiserie and seasonal desserts with meticulous lamination.",
              },
              {
                icon: "Wheat",
                title: "Jordan Kim · Bread Lead",
                description: "Manages levain and fermentation schedules for consistent crust and crumb.",
              },
              {
                icon: "Coffee",
                title: "Avery Patel · Café Manager",
                description: "Ensures warm service, smooth operations, and a welcoming dining room.",
              },
            ]}
          />
        </section>
      </ScrollReveal>
    </main>
  )
}

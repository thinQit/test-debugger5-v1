export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ChefStorySplit from "@/components/ChefStorySplit"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import ScrollReveal from "@/components/ScrollReveal"
import CTAButton from "@/components/CTAButton"

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Our Story"
          title="A neighborhood bakery with French technique"
          subtitle="We bake with time, temperature, and intention—bringing sourdough tradition and pastry craft together in downtown Portland."
          primaryCta={{ label: "Meet the Bakers", href: "#team" }}
          secondaryCta={{ label: "Visit Us", href: "/contact" }}
        />
      </div>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <ChefStorySplit
              headline="Why Sunrise"
              subheadline="Because the best part of the day starts with something warm."
              primaryCta={{ label: "See the Menu", href: "/menu" }}
              secondaryCta={{ label: "Reserve a Table", href: "/reservations" }}
              chef={{
                name: "Camille Laurent",
                title: "Head Baker & Pastry Chef",
                bio: "Sunrise Bakery began as a single sourdough starter named Alder in a tiny apartment kitchen.",
                signature: "“If it’s not delicious on its own, it doesn’t belong in the case.”",
                image: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577044/site-images/restaurant/1121480.jpg",
              }}
              values={[
                { title: "Daily bake time", description: "2:30 AM start every morning." },
                { title: "Croissant folds", description: "27 layers (and counting)." },
                { title: "Starter", description: "Established 2018." },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
      <section id="team" className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FeaturesCards3D
            badge="Meet the Team"
            title="Small crew, big mornings"
            subtitle="The bakers behind your favorite loaves and pastries."
            features={[
              { icon: "User", title: "Camille Laurent", description: "Head Baker & Pastry Chef." },
              { icon: "Wheat", title: "Noah Kim", description: "Bread Lead and fermentation specialist." },
              { icon: "Cookie", title: "Priya Desai", description: "Pastry & prep, seasonal tart wizard." },
            ]}
          />
          <div className="mt-10 flex gap-4">
            <CTAButton href="/reservations" label="Reserve" className="transition-all duration-200 hover:scale-105" />
            <CTAButton href="/menu#order" label="Order Pickup" variant="secondary" className="transition-all duration-200 hover:scale-105" />
          </div>
        </div>
      </section>
    </main>
  )
}

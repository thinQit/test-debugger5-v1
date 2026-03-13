export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import SectionHeader from "@/components/SectionHeader"
import MenuTabs from "@/components/MenuTabs"
import MenuItemCard from "@/components/MenuItemCard"
import CTAButton from "@/components/CTAButton"
import ScrollReveal from "@/components/ScrollReveal"

export default function MenuPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Fresh Daily"
          title="The pastry case, organized"
          subtitle="Browse breads, pastries, tarts, and drinks. Preorder for pickup to guarantee your favorites."
          primaryCta={{ label: "Order for Pickup", href: "#order" }}
          secondaryCta={{ label: "Call to Check Availability", href: "tel:+15035550198" }}
        />
      </div>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeader headline="Full menu" subheadline="Prices include packaging. Taxes calculated at checkout for pickup orders." />
            <MenuTabs tabs={[{ id: "breads", label: "Breads" }, { id: "viennoiserie", label: "Viennoiserie" }, { id: "sweets", label: "Sweets" }, { id: "drinks", label: "Drinks" }]} />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <MenuItemCard name="Country Sourdough Boule" description="Naturally leavened, 900g loaf." price="$9" className="card-hover" />
              <MenuItemCard name="Pain au Chocolat" description="Two dark chocolate batons." price="$6" className="card-hover" />
              <MenuItemCard name="Lemon Curd Tartlet" description="Torched meringue topping." price="$7" className="card-hover" />
              <MenuItemCard name="Latte" description="12oz. Oat milk +$0.75" price="$5.50" className="card-hover" />
            </div>
          </div>
        </section>
      </ScrollReveal>
      <section id="order" className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader headline="Pickup ordering (simple)" subheadline="Submit a pickup request and we’ll confirm by text or email." />
          <div className="flex flex-wrap gap-4 mt-8">
            <CTAButton href="/contact?intent=pickup" label="Open Pickup Form" className="transition-all duration-200 hover:scale-105" />
            <CTAButton href="tel:+15035550198" label="Questions? Call us" variant="secondary" className="transition-all duration-200 hover:scale-105" />
          </div>
        </div>
      </section>
    </main>
  )
}

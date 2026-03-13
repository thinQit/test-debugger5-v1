export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import PhotoGallery from "@/components/PhotoGallery"
import CTAButton from "@/components/CTAButton"

export default function GalleryPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Gallery"
          title="Fresh bakes, warm light"
          subtitle="A look at our loaves, layers, and little moments behind the counter."
          primaryCta={{ label: "Visit Today", href: "/contact" }}
          secondaryCta={{ label: "View Menu", href: "/menu" }}
        />
      </div>
      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <PhotoGallery
          headline="The bake, the case, the café"
          subheadline="Photos rotate seasonally—check back for new tarts and specials."
          layout="grid"
          images={[
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577071/site-images/restaurant/10918163.jpg", alt: "Sourdough loaves cooling on racks" },
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577092/site-images/restaurant/12387876.jpg", alt: "Croissant dough rolled and folded" },
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577697/site-images/hero-backgrounds/1242348.jpg", alt: "Pastry case at opening" },
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg", alt: "Seasonal tart close-up" },
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577099/site-images/restaurant/10445929.jpg", alt: "Coffee pour" },
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg", alt: "Warm bakery interior" },
          ]}
          primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
          secondaryCta={{ label: "Order Pickup", href: "/menu#order" }}
        />
      </section>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Want us to cater your office morning?</h2>
        <p className="text-muted-foreground mt-4">Email us for pastry boxes and loaf bundles (24–48 hours notice recommended).</p>
        <div className="mt-8 flex justify-center gap-4">
          <CTAButton href="mailto:hello@sunrisebakerypdx.com?subject=Catering%20Inquiry" label="Email Catering" className="transition-all duration-200 hover:scale-105" />
          <CTAButton href="tel:+15035550198" label="Call" variant="secondary" className="transition-all duration-200 hover:scale-105" />
        </div>
      </section>
    </main>
  )
}

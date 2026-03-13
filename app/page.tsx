export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora"
import SectionHeader from "@/components/SectionHeader"
import MenuTabs from "@/components/MenuTabs"
import MenuItemCard from "@/components/MenuItemCard"
import ReservationCTAStrip from "@/components/ReservationCTAStrip"
import ChefStorySplit from "@/components/ChefStorySplit"
import PhotoGallery from "@/components/PhotoGallery"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import LocationMapEmbed from "@/components/LocationMapEmbed"
import ScrollReveal from "@/components/ScrollReveal"
import CTAButton from "@/components/CTAButton"

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="Sourdough worth waking up for—French pastries, Portland-made."
          subheadline="Sunrise Bakery is a cozy artisan bakery in downtown Portland. Naturally leavened loaves, laminated pastries, and seasonal tarts—baked fresh every morning with local grains and cultured butter."
          primaryCta={{ label: "Order for Pickup", href: "/menu#order" }}
          secondaryCta={{ label: "Reserve a Table", href: "/reservations" }}
          backgroundImageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577087/site-images/restaurant/11236793.jpg"
          badges={["Naturally leavened sourdough", "French lamination", "Local flour & seasonal fruit"]}
          quickInfo={[
            { label: "Today’s Hours", value: "7:00 AM – 3:00 PM" },
            { label: "Address", value: "112 SW Alder St, Portland, OR 97204" },
            { label: "Phone", value: "(503) 555-0198" },
          ]}
          note="Arrive early for croissants—our first batch usually sells out by 10:30."
          overlayClassName="bg-black/40"
          minHeightClassName="min-h-[80vh]"
        />
      </div>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up" id="menu">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeader
              headline="Today’s menu—baked in small batches"
              subheadline="Seasonal items rotate weekly. Ask about gluten-friendly options and nut-free handling."
            />
            <MenuTabs
              tabs={[
                { id: "sourdough", label: "Sourdough" },
                { id: "pastries", label: "French Pastries" },
                { id: "tarts", label: "Tarts & Sweets" },
                { id: "coffee", label: "Coffee & Tea" },
              ]}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
              <MenuItemCard name="Country Sourdough Boule" description="Naturally leavened, crackling crust, open crumb." price="$9" className="card-hover" />
              <MenuItemCard name="Butter Croissant" description="72-hour fermentation, cultured butter lamination." price="$5" className="card-hover" />
              <MenuItemCard name="Seasonal Fruit Tart" description="Vanilla pastry cream, buttery pâte sucrée, market fruit." price="$7.50" className="card-hover" />
              <MenuItemCard name="Latte" description="12oz, silky microfoam. Oat milk available." price="$5.50" className="card-hover" />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton href="/menu" label="View Full Menu" className="transition-all duration-200 hover:scale-105" />
              <CTAButton href="/menu#allergens" label="Dietary & Allergens" variant="secondary" className="transition-all duration-200 hover:scale-105" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="animate-fade-in-up">
        <ReservationCTAStrip
          headline="Save a seat for a slow morning"
          subheadline="Reserve a cozy table for coffee and pastries. Walk-ins welcome when available."
          primaryCta={{ label: "Reserve Now", href: "/reservations" }}
          secondaryCta={{ label: "Call (503) 555-0198", href: "tel:+15035550198" }}
          reservationDetails={[
            { label: "Seating", value: "Indoor café seating (18 seats) + window bar (6 seats)" },
            { label: "Reservation Window", value: "Up to 7 days in advance" },
            { label: "Party Size", value: "1–6 guests" },
          ]}
          finePrint="Reservations are held for 10 minutes. For groups of 5–6, please arrive together."
        />
      </div>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <ChefStorySplit
              headline="From starter to storefront—our bread has a story"
              subheadline="Sunrise Bakery is led by Chef Camille Laurent, trained in classical French pastry and obsessed with naturally leavened doughs."
              primaryCta={{ label: "Meet the Team", href: "/about" }}
              secondaryCta={{ label: "Our Ingredients", href: "/about#ingredients" }}
              chef={{
                name: "Camille Laurent",
                title: "Head Baker & Pastry Chef",
                bio: "After a decade in Parisian pâtisseries and Portland cafés, Camille opened Sunrise to bring long-fermented sourdough and true French lamination to the neighborhood.",
                signature: "“If it’s not delicious on its own, it doesn’t belong in the case.”",
                image: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576876/site-images/corporate/1181252.jpg",
              }}
              values={[
                { title: "Long fermentation", description: "Our sourdough ferments 18–36 hours for depth of flavor and a tender crumb." },
                { title: "Local grains", description: "We source Pacific Northwest flour and rotate heritage grains when available." },
                { title: "Seasonal pastry", description: "Tarts and fillings follow the market." },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

      <div className="animate-fade-in-up bg-muted py-20 md:py-28">
        <PhotoGallery
          headline="A little golden, a little messy—in the best way"
          subheadline="Peek at today’s bake, our downtown counter, and the pastry case at opening."
          images={[
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577061/site-images/restaurant/10375821.jpg", alt: "Croissants fresh from oven" },
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577047/site-images/restaurant/10456027.jpg", alt: "Sourdough crumb close-up" },
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577700/site-images/hero-backgrounds/13551578.jpg", alt: "Pastry case morning light" },
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577055/site-images/restaurant/12436190.jpg", alt: "Latte and canelé" },
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg", alt: "Seasonal fruit tart" },
            { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577722/site-images/hero-backgrounds/13371856.jpg", alt: "Bakery storefront rain" },
          ]}
          layout="masonry"
          primaryCta={{ label: "See More Photos", href: "/gallery" }}
          secondaryCta={{ label: "Follow on Instagram", href: "https://instagram.com/" }}
        />
      </div>

      <div className="animate-fade-in-up bg-background py-20 md:py-28">
        <TestimonialsCarousel
          headline="Portland says it best"
          subheadline="A few notes from regulars, early risers, and croissant loyalists."
          testimonials={[
            {
              quote: "The country sourdough is my weekly staple—crusty, tangy, and somehow still soft.",
              name: "Maya R.",
              designation: "Downtown commuter",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577054/site-images/restaurant/10207592.jpg",
            },
            {
              quote: "Finally, real lamination. The pain au chocolat has crisp layers and a buttery aroma.",
              name: "Jordan K.",
              designation: "Pastry nerd",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577710/site-images/hero-backgrounds/12981879.jpg",
            },
            {
              quote: "Cozy vibe, friendly staff, and the seasonal fruit tart is always spot-on.",
              name: "Elena S.",
              designation: "Weekend regular",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577101/site-images/restaurant/11123392.jpg",
            },
          ]}
        />
      </div>

      <div className="animate-fade-in-up bg-muted py-20 md:py-28">
        <LocationMapEmbed
          headline="Find us downtown—follow the smell of butter"
          subheadline="Steps from the waterfront and easy to reach by MAX."
          address="112 SW Alder St, Portland, OR 97204"
          phone="(503) 555-0198"
          email="hello@sunrisebakerypdx.com"
          hours={[
            { day: "Mon–Fri", hours: "7:00 AM – 3:00 PM" },
            { day: "Sat", hours: "8:00 AM – 3:00 PM" },
            { day: "Sun", hours: "8:00 AM – 2:00 PM" },
          ]}
          embedUrl="https://www.google.com/maps?q=112%20SW%20Alder%20St%2C%20Portland%2C%20OR%2097204&output=embed"
          primaryCta={{ label: "Get Directions", href: "https://maps.google.com/?q=112%20SW%20Alder%20St%2C%20Portland%2C%20OR%2097204" }}
          secondaryCta={{ label: "Email Us", href: "mailto:hello@sunrisebakerypdx.com" }}
        />
      </div>
    </main>
  )
}

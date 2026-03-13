export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import SectionHeader from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          title="Privacy policy"
          subtitle="A simple policy for a simple site: we only use your info to respond to your requests."
          primaryCta={{ label: "Contact Us", href: "/contact" }}
          secondaryCta={{ label: "Back Home", href: "/" }}
        />
      </div>
      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeader headline="What we collect" subheadline="When you submit a form, we collect the information you provide." />
          <div className="grid gap-6 mt-10">
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold">Contact forms</h3>
              <p className="text-muted-foreground mt-2">If you submit a reservation request or contact message, we collect your name, email, and any details you include so we can respond.</p>
            </Card>
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold">No selling of data</h3>
              <p className="text-muted-foreground mt-2">We do not sell your personal information.</p>
            </Card>
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold">Retention</h3>
              <p className="text-muted-foreground mt-2">We keep messages only as long as needed to provide service and follow up.</p>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground mt-8">Last updated: 2026-03-13</p>
        </div>
      </section>
    </main>
  )
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { Button } from "@/components/ui/button";

interface AceternityHeroAuroraProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function AceternityHeroAurora({
  title = "Sunrise Bakery",
  subtitle = "Downtown Portland’s cozy destination for naturally leavened sourdough, French pastries, and café moments worth savoring.",
  imageSrc = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771577700/site-images/hero-backgrounds/11829357.jpg",
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <section className="relative">
      <AuroraBackground className="min-h-[86vh]">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-24 md:grid-cols-2 md:px-6 lg:px-8">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#DDA15E]">Artisan Bakery • Portland</p>
            <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl">{title}</h1>
            <div className="mt-5 max-w-xl text-white/90">
              <TextGenerateEffect words={subtitle} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="bg-[#722F37] text-white hover:bg-[#5f252d]">
                <Link href="#reservation">Reserve a Table</Link>
              </Button>
              <Button variant="outline" className="border-[#DDA15E] bg-transparent text-white hover:bg-white/10">
                <Link href="#menu">Explore Menu</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl md:h-[500px]">
            <Image src={imageSrc} alt="Fresh pastries and bread display" fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}

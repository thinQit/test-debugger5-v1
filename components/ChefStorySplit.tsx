"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

interface ChefStorySplitProps {
  heading?: string;
}

export default function ChefStorySplit({
  heading = "Meet the Bakers Behind Sunrise",
}: Partial<ChefStorySplitProps>) {
  return (
    <section id="about" className="relative bg-[#f9f2da] py-20 md:py-28">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#DDA15E_0.6px,transparent_0.6px)] [background-size:10px_10px]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div>
          <h2 className="font-serif text-4xl font-bold text-[#722F37]">{heading}</h2>
          <p className="mt-4 text-foreground/80">
            Chef Camille and Baker Julien trained in Lyon before opening Sunrise Bakery in Portland. Their philosophy: slow fermentation, seasonal ingredients, and old-world technique.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-foreground/85">
            <li>• Organic Pacific Northwest flour partnerships</li>
            <li>• House-cultured starter maintained daily since 2018</li>
            <li>• Zero-waste pastry kitchen and compost initiative</li>
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="overflow-hidden rounded-xl">
            <Image src="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg" alt="Chef portrait" width={600} height={400} className="h-64 w-full object-cover" unoptimized />
            <div className="p-4"><h3 className="font-serif text-lg text-[#722F37]">Chef Camille</h3></div>
          </Card>
          <Card className="overflow-hidden rounded-xl">
            <Image src="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg" alt="Baker portrait" width={600} height={400} className="h-64 w-full object-cover" unoptimized />
            <div className="p-4"><h3 className="font-serif text-lg text-[#722F37]">Baker Julien</h3></div>
          </Card>
        </div>
      </div>
    </section>
  );
}

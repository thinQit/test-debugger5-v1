"use client";

import Link from "next/link";
import { MapPin, Car, TrainFront } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationMapSectionProps {
  mapEmbedUrl?: string;
}

export default function LocationMapSection({
  mapEmbedUrl = "https://www.google.com/maps?q=Portland%20Oregon&output=embed",
}: Partial<LocationMapSectionProps>) {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <iframe title="Sunrise Bakery Location" src={mapEmbedUrl} className="h-[380px] w-full rounded-xl border" loading="lazy" />
        <div>
          <h3 className="font-serif text-3xl font-bold text-[#722F37]">Find Sunrise Bakery</h3>
          <p className="mt-3 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-[#DDA15E]" />214 NW Alder St, Portland, OR 97209</p>
          <p className="mt-3 flex items-center gap-2 text-sm"><TrainFront className="h-4 w-4 text-[#DDA15E]" />2 blocks from MAX Green Line</p>
          <p className="mt-2 flex items-center gap-2 text-sm"><Car className="h-4 w-4 text-[#DDA15E]" />Street parking + SmartPark garage nearby</p>
          <div className="mt-6 flex gap-3">
            <Button className="bg-[#722F37] text-white"><Link href="https://maps.google.com">Directions</Link></Button>
            <Button variant="outline"><Link href="tel:+15035550142">Call Us</Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

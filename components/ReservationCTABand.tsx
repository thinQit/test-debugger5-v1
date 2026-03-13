"use client";

import Link from "next/link";
import { CalendarClock, Users, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReservationCTABandProps {
  title?: string;
}

export default function ReservationCTABand({
  title = "Reserve Your Table at Sunrise Bakery",
}: Partial<ReservationCTABandProps>) {
  return (
    <section id="reservation" className="bg-[#722F37] py-14 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h3 className="font-serif text-3xl font-bold">{title}</h3>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/90">
            <span className="inline-flex items-center gap-1"><CalendarClock className="h-4 w-4 text-[#DDA15E]" /> 90-minute seating</span>
            <span className="inline-flex items-center gap-1"><Users className="h-4 w-4 text-[#DDA15E]" /> Parties up to 10</span>
            <span className="inline-flex items-center gap-1"><CircleAlert className="h-4 w-4 text-[#DDA15E]" /> 24h cancellation notice</span>
          </div>
        </div>
        <Button className="bg-[#DDA15E] text-[#2b1a09] hover:bg-[#c98f52]">
          <Link href="#reservation-form">Book Now</Link>
        </Button>
      </div>
    </section>
  );
}

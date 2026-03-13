"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  quote: string;
}
interface TestimonialsAnimatedProps {
  testimonials?: Testimonial[];
}

export default function TestimonialsAnimated({
  testimonials = [
    { name: "Maya R.", quote: "Best sourdough in Portland. The crust sings when you cut it." },
    { name: "Elliot T.", quote: "Croissants are perfectly flaky and the staff remembers my order." },
    { name: "Nora K.", quote: "We booked catering for our studio launch and every tray vanished." },
  ],
}: Partial<TestimonialsAnimatedProps>) {
  const [index, setIndex] = useState(0);
  const active = testimonials[index] || testimonials[0];

  return (
    <section id="testimonials" className="bg-[#FEFAE0] py-20 md:py-28">
      <div className="mx-auto w-full max-w-3xl px-4 text-center md:px-6">
        <Card className="rounded-xl p-8">
          <div className="mb-4 flex justify-center gap-1">
            {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-4 w-4 fill-[#DDA15E] text-[#DDA15E]" />)}
          </div>
          <p className="font-serif text-2xl text-[#722F37]">“{active?.quote}”</p>
          <p className="mt-3 text-sm text-foreground/70">— {active?.name}</p>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button key={t.name} onClick={() => setIndex(i)} className={cn("h-2.5 w-2.5 rounded-full", i === index ? "bg-[#722F37]" : "bg-[#722F37]/30")} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

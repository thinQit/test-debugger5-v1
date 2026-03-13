"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CateringPackagesProps {
  leadTimeNote?: string;
}

export default function CateringPackages({
  leadTimeNote = "Please allow 72 hours lead time for catering orders.",
}: Partial<CateringPackagesProps>) {
  const plans = [
    { name: "Morning Meeting", price: "$180", items: ["12 Croissants", "12 Pain au Chocolat", "Coffee Tote"] },
    { name: "Brunch Table", price: "$320", items: ["3 Sourdough Loaves", "24 Mixed Pastries", "2 Seasonal Quiches"] },
    { name: "Celebration Spread", price: "$540", items: ["Custom Tart Selection", "Sandwich Platter", "Dessert Assortment"] },
  ];

  return (
    <section id="catering" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="rounded-xl p-6 shadow-md">
              <h3 className="font-serif text-2xl text-[#722F37]">{plan.name}</h3>
              <p className="mt-1 text-3xl font-bold text-[#606C38]">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.items.map((item) => <li key={item}>• {item}</li>)}
              </ul>
              <Button className="mt-6 w-full bg-[#722F37] text-white">Select Package</Button>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-foreground/70">{leadTimeNote}</p>
      </div>
    </section>
  );
}

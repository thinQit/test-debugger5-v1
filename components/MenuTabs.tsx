"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import MenuItemCard from "@/components/MenuItemCard";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags: string[];
}
interface MenuTabsProps {
  categories?: Record<string, MenuItem[]>;
}

export default function MenuTabs({
  categories = {
    Breads: [
      { name: "Country Sourdough", description: "72-hour fermented loaf, crackling crust.", price: "$9", tags: ["Vegan"] },
      { name: "Olive Levain", description: "Kalamata olives and rosemary, hearth baked.", price: "$11", tags: [] },
    ],
    Pastries: [
      { name: "Butter Croissant", description: "Classic French croissant with 27 layers.", price: "$5", tags: ["Vegetarian"] },
      { name: "Pain au Chocolat", description: "Dark chocolate batons, flaky exterior.", price: "$6", tags: ["Vegetarian"] },
    ],
    "Café": [
      { name: "Quiche Lorraine", description: "Bacon, Gruyère, and caramelized onion.", price: "$12", tags: [] },
      { name: "Seasonal Tartine", description: "Rotating produce on toasted levain.", price: "$14", tags: ["Vegetarian"] },
    ],
    Drinks: [
      { name: "House Drip Coffee", description: "Single-origin rotating roast.", price: "$4", tags: ["Vegan"] },
      { name: "Lavender Honey Latte", description: "Portland lavender, local honey.", price: "$6", tags: ["Vegetarian"] },
    ],
  },
}: Partial<MenuTabsProps>) {
  const tabs = Object.keys(categories);
  const [active, setActive] = useState(tabs[0] || "Breads");

  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={cn(
                "relative px-4 py-3 text-sm font-medium",
                active === tab ? "text-[#722F37]" : "text-foreground/70"
              )}
            >
              {tab}
              <span className={cn("absolute bottom-0 left-0 h-0.5 w-full bg-[#DDA15E] transition-transform", active === tab ? "scale-x-100" : "scale-x-0")} />
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {(categories[active] || []).map((item) => (
            <MenuItemCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

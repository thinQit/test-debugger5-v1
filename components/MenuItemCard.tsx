"use client";

import { Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MenuItemCardProps {
  name?: string;
  description?: string;
  price?: string;
  tags?: string[];
}

export default function MenuItemCard({
  name = "Signature Sourdough",
  description = "Naturally fermented for 36 hours with a deep caramelized crust.",
  price = "$8",
  tags = [],
}: Partial<MenuItemCardProps>) {
  return (
    <Card className={cn("rounded-xl border border-border bg-card p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg")}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl font-semibold text-[#722F37]">{name}</h3>
        <span className="font-sans text-lg font-bold text-[#606C38]">{price}</span>
      </div>
      <p className="mt-2 text-sm text-foreground/80">{description}</p>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-[#FEFAE0] px-2.5 py-1 text-xs text-[#722F37]">
              <Leaf className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}

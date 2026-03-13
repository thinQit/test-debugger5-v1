"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";
import { ChefHat, Flame, Leaf, Star, UtensilsCrossed, Wine, User, Image } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { User, Image, 
  ChefHat,
  Flame,
  Leaf,
  Star,
  UtensilsCrossed,
  Wine,
};

export default function FeaturesCards3D({
  badge = "Menu Highlights",
  headline = "Crafted Plates, Bold Character",
  subheadline = "Discover signature dishes built from seasonal produce, open-flame techniques, and refined presentation.",
  features = [
    {
      icon: "Flame",
      title: "Wood-Fired Ribeye",
      description:
        "Dry-aged ribeye with smoked butter and charred shallot, finished over open flame for deep, savory richness.",
    },
    {
      icon: "Leaf",
      title: "Garden Harvest Risotto",
      description:
        "Creamy arborio rice with roasted squash, wild mushrooms, and parmesan, layered with fresh herb oil.",
    },
    {
      icon: "Wine",
      title: "Sommelier Pairings",
      description:
        "Curated wine flights selected nightly to complement each course and elevate every bite.",
    },
  ],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="card-hover relative group/card border border-border w-auto h-auto rounded-xl p-6 bg-background">
                  <CardItem translateZ="50" className="mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {React.createElement(Icon, { className: "h-6 w-6" })}
                    </div>
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="text-muted-foreground mt-2 text-sm">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}

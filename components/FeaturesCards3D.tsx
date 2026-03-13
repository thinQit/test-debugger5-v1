"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";
import { ChefHat, UtensilsCrossed, Info, Sparkles, Globe, Shield, Star, Zap, Heart, Users, Truck, Coffee, Mail, ShieldCheck } from 'lucide-react';

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

const iconMap: Record<string, React.ElementType> = { Users, Truck, Coffee, Mail, ShieldCheck, 
  ChefHat,
  UtensilsCrossed,
  Info,
  Sparkles,
  Globe,
  Shield,
  Star,
  Zap,
  Heart,
};

export default function FeaturesCards3D({
  badge = "Discover Ember & Vine",
  headline = "Experience Our Signature Dining Journey",
  subheadline = "Explore our chef-led services, seasonal menu highlights, and the story behind our kitchen philosophy.",
  features = [
    {
      icon: "ChefHat",
      title: "Chef’s Tasting Service",
      description:
        "A curated multi-course experience with optional wine pairing, designed nightly around peak seasonal ingredients.",
    },
    {
      icon: "UtensilsCrossed",
      title: "Menu Highlights",
      description:
        "Guest favorites include saffron seafood risotto, ember-roasted lamb, and warm pistachio cake with citrus cream.",
    },
    {
      icon: "Info",
      title: "Our Story",
      description:
        "Rooted in heritage recipes and modern craft, Ember & Vine blends hospitality, flavor, and atmosphere into every meal.",
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
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <CardContainer key={index} className="inter-var" containerClassName="w-full">
                <CardBody className="card-hover relative w-full h-auto rounded-xl p-6 border border-border bg-card text-card-foreground shadow-sm">
                  <CardItem translateZ={50} className="mb-4 rounded-lg bg-primary/10 p-3 text-primary">
                    {React.createElement(Icon, { className: "h-7 w-7" })}
                  </CardItem>
                  <CardItem translateZ={60} className="font-serif text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ={40} className="mt-2 text-sm text-muted-foreground">
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

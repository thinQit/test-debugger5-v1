"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SectionHeadingProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title = "Section Title",
  subtitle = "",
  ctaLabel = "",
  ctaHref = "#",
  secondaryCtaLabel = "",
  secondaryCtaHref = "#",
  centered = false,
}: Partial<SectionHeadingProps>) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <h2 className="font-serif text-4xl font-bold text-[#722F37] md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-foreground/80">{subtitle}</p> : null}
      {(ctaLabel || secondaryCtaLabel) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {ctaLabel ? (
            <Button className="bg-[#722F37] text-white hover:bg-[#5f252d]">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          ) : null}
          {secondaryCtaLabel ? (
            <Button variant="outline" className="border-[#DDA15E]">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          ) : null}
        </div>
      )}
    </div>
  );
}

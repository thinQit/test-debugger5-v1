"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SiteContainerProps {
  children?: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

export default function SiteContainer({
  children = null,
  className = "",
  as = "div",
}: Partial<SiteContainerProps>) {
  const Tag = as;

  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8", className)}>
      <div className="space-y-6 md:space-y-8">{children}</div>
    </Tag>
  );
}

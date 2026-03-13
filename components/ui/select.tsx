"use client";

import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select({ className = "", children, ...props }: SelectProps) {
  return (
    <select
      className={cn("h-10 w-full rounded-md border border-input bg-background px-3 text-sm", className)}
      {...props}
    >
      {children}
    </select>
  );
}

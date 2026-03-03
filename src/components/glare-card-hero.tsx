"use client";

import { GlareCard } from "@/components/ui/glare-card";

export function GlareCardHero({ children }: { children: React.ReactNode }) {
  return (
    <GlareCard className="h-svh w-full [--radius:0px]">
      <div className="relative h-full w-full ">
        {children}
      </div>
    </GlareCard>
  );
}

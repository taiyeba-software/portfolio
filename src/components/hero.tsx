import { siteConfig } from "@/lib/data";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";
import { GlareCardHero } from "@/components/glare-card-hero";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden"
    >
      <GlareCardHero>

        <div className="flex min-h-svh items-center px-6 sm:px-10 lg:px-20 pt-20 sm:pt-16 md:pt-0">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-[7fr_3fr] gap-0 md:gap-0 items-center">

              {/* Left side */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">

                {/* Main Statement */}
                  <h1 className="mb-8 max-w-3xl text-3xl font-medium leading-[1.15] tracking-tight text-[hsl(var(--foreground))] sm:text-4xl lg:text-5xl xl:text-6xl">
                    I design and <span className="font-mono font-normal">develop()</span>{" "}
                    <span className="font-semibold">
                      products, shape meaningful brands, and build + lead inspired,
                      talented teams.
                    </span>
                  </h1>

                  {/* Subline */}
                  <p className="max-w-md text-sm leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-base">
                    Full‑stack developer focused on clean architecture, scalable systems,
                    and thoughtful digital experiences.
                  </p>
              </div>

              {/* Right side — 30% width */}
              <div className="relative flex items-center justify-center md:justify-end h-full">
                <div className="relative h-72 w-56 sm:h-96 sm:w-72 md:h-[420px] md:w-[340px] lg:h-[660px] lg:w-[440px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/profile.png"
                    alt="Profile photo"
                    fill
                    className="object-cover object-center grayscale"
                    priority
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 340px, 420px"
                  />
                </div>
              </div>

            </div>
      </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </GlareCardHero>
    </section>
  );
}

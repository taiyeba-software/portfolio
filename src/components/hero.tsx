import { ArrowDown } from "lucide-react";
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
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 items-center">

              {/* Left side */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">

                {/* Main Statement */}
                  <h1 className="type-h1 mb-8 max-w-3xl xl:text-6xl">
                    I design and <span className="font-light text-primary" style={{ fontFamily: "var(--font-m-plus-code-latin)" }}>develop()</span>{" "}
                    <span className="font-semibold">
                      products, shape meaningful brands, and build + lead inspired,
                      talented teams.
                    </span>
                  </h1>

                  {/* Subline */}
                  <p className="type-body max-w-md text-[hsl(var(--muted-foreground))]">
                    Full‑stack developer focused on clean architecture, scalable systems,
                    and thoughtful digital experiences.
                  </p>
              </div>

              {/* Right side — 30% width */}
              <div className="relative flex items-center justify-center md:justify-end m-[10px]">
                <Image
                  src="/images/profile.png"
                  alt="Profile photo"
                  width={440}
                  height={660}
                  className="w-full max-w-[590px] lg:max-w-[600px] h-auto object-contain grayscale"
                  priority
                />
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

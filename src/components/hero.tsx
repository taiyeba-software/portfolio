import { ArrowDown } from "lucide-react";
import { GlareCardHero } from "@/components/glare-card-hero";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <GlareCardHero>

        <div className="
          relative z-10
          w-full min-h-[100svh]
          flex items-center
          px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28
          pt-20 pb-16
        ">
          <div className="
            mx-auto w-full max-w-7xl
            grid grid-cols-1 lg:grid-cols-2
            items-center
            gap-8 lg:gap-4
          ">

            {/* ── LEFT: Text ── */}
            <div className="
              flex flex-col items-start text-left
              order-2 lg:order-1
            ">
              <h1 className="
                mb-5
                font-extrabold
                leading-[1.18]
                tracking-tight
                text-foreground
                text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[3.15rem]
              ">
                Backend-focused developer building{" "}
                <mark
                  className="
                    bg-transparent text-white
                    font-light
                    px-1.5 py-0.5
                    rounded-none
                    not-italic
                    whitespace-nowrap
                    relative inline-block
                    after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0
                    after:h-[2px] after:rounded-full
                    after:bg-gradient-to-r after:from-sky-400 after:via-blue-500 after:to-cyan-400
                  "
                  style={{ fontFamily: "var(--font-m-plus-code-latin)" }}
                >
                  scalable APIs
                </mark>
                {" "}and full-stack applications with real-world integrations.
              </h1>

              <p className="
                max-w-[44ch]
                text-sm sm:text-base lg:text-[1rem]
                leading-[1.8]
                text-muted-foreground
              ">
                Built REST APIs with authentication, payments, and cloud
                integrations. Experienced with MongoDB, Express, Next.js, and
                Cloudinary. Currently seeking internship opportunities in
                backend or full-stack development.
              </p>
            </div>

            {/* ── RIGHT: Profile image ── */}
            <div className="
              flex items-end justify-center
              order-1 lg:order-2
              lg:justify-center lg:self-center
              lg:mb-0
            ">
              <Image
                src="/images/profile.png"
                alt="Profile photo"
                width={620}
                height={940}
                className="
                  h-auto
                  w-[200px] sm:w-[260px] md:w-[300px]
                  lg:w-[430px] xl:w-[500px]
                  max-h-[72vh]
                  object-contain object-bottom
                  grayscale
                "
                priority
              />
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="
            absolute bottom-7 left-1/2 -translate-x-1/2
            z-20 animate-bounce
            text-muted-foreground hover:text-foreground
            transition-colors
          "
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5" />
        </a>

        </GlareCardHero>
      </div>
    </section>
  );
}
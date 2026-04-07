import { MaskContainer } from '@/components/ui/svg-mask-effect'

export function About() {
  const teaserText = (
    <p className="mx-auto max-w-3xl px-6 text-center font-sans text-lg font-bold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:px-10 lg:px-20">
      Move closer — my potential awaits… a journey of creativity, code, and design ready to be unlocked. 
      Each hover reveals not just words, but the passion and skills that drive me forward. 
      Step into the light, and discover the developer I'm becoming.
    </p>
  )

  const fullAboutText = (
    <div className="mx-auto max-w-2xl pt-4 sm:pt-6">
      <h3 className="mb-8 bg-gradient-to-r from-[#00FFB3] via-[#0077FF] to-[#00FFB3] bg-clip-text text-center font-sans text-3xl font-bold tracking-tight text-transparent drop-shadow-[0_0_12px_rgba(0,255,179,0.6)] sm:text-4xl">
        About Me
      </h3>
      <div className="space-y-4 text-left font-sans">
        <p className="text-base leading-relaxed text-black drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
          I’m a Computer Science & Engineering student and full-stack developer focused on building structured, scalable digital systems. My academic background in CSE introduced me to software engineering, and hands-on projects helped me turn theory into production-ready skills.
        </p>
        <p className="text-base leading-relaxed text-black/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
          I work primarily with the MERN stack and Next.js, building applications that go beyond UI — including authentication, modular backend layers, cloud deployment, and real-world debugging considerations. I’m especially interested in how APIs, databases, caching layers, and services connect in real systems.
        </p>
        <p className="text-base leading-relaxed text-black/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
          Alongside full-stack development, I’m exploring applied AI systems. My final-year research project focuses on early emotional signal detection in Bangla code-mixed social media text, combining NLP fundamentals with responsible system design.
        </p>
      </div>
    </div>
  )

  return (
    <section
      id="about"
      className="relative mt-16 flex min-h-svh flex-col items-center justify-center overflow-hidden px-3 py-4 sm:px-0 sm:py-0"
    >
      <MaskContainer
        revealText={teaserText}
        maskTransitionDuration={0.55}
        maskTransitionDelay={0.00}
        fadeTransitionDuration={0.55}
        fadeTransitionDelay={0.00}
        className="min-h-svh w-full bg-black text-white dark:text-black"
      >
        {fullAboutText}
      </MaskContainer>
    </section>
  )
}
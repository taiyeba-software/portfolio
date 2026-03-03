import { aboutData } from '@/lib/data'
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
    <div className="mx-auto max-w-4xl">
      <h3 className="mb-8 bg-gradient-to-r from-[#00FFB3] via-[#0077FF] to-[#00FFB3] bg-clip-text text-center font-sans text-3xl font-bold tracking-tight text-transparent drop-shadow-[0_0_12px_rgba(0,255,179,0.6)] sm:text-4xl">
        About Me
      </h3>
      <p className="mb-6 text-left font-sans text-base leading-relaxed text-black drop-shadow-[0_1px_4px_rgba(0,255,179,0.3)]">
        I'm a <span className="font-bold text-[#00FFB3] drop-shadow-[0_0_8px_rgba(0,255,179,0.5)]">Full-Stack Developer</span> focused on building performant,
        scalable products with clean architecture and thoughtful user experience.
      </p>
      <div className="space-y-4 text-left font-sans">
        {aboutData.paragraphs.map((paragraph, index) => {
          const highlighted = paragraph
            .replace('React', '<span class="font-mono font-bold text-[#0077FF] drop-shadow-[0_0_6px_rgba(0,119,255,0.5)]">React</span>')
            .replace('Next.js', '<span class="font-mono font-bold text-[#0077FF] drop-shadow-[0_0_6px_rgba(0,119,255,0.5)]">Next.js</span>')
            .replace('Node.js', '<span class="font-mono font-bold text-[#0077FF] drop-shadow-[0_0_6px_rgba(0,119,255,0.5)]">Node.js</span>')

          return (
            <p
              key={index}
              className="text-base leading-relaxed text-black drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          )
        })}
      </div>
    </div>
  )

  return (
    <section
      id="about"
      className="relative mt-16 flex min-h-svh flex-col items-center justify-center overflow-hidden"
    >
      <MaskContainer
        revealText={teaserText}
        className="min-h-svh w-full bg-black text-white dark:text-black"
      >
        {fullAboutText}
      </MaskContainer>
    </section>
  )
}

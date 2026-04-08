import { siteConfig } from '@/lib/data'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-border/40 bg-white/5 backdrop-blur px-6 sm:px-8 py-12">
          <div className="text-center">
            {/* <h2 className="mb-2 font-mono text-sm text-muted-foreground">{'// contact'}</h2> */}
            <h3 className="type-h2 mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <p className="type-body mx-auto mb-10 max-w-lg text-muted-foreground text-pretty">
              I am actively looking for internship opportunities where I can contribute to backend systems, learn from experienced engineers, and grow into a production-level developer.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary">
              📧 Email Me
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-border/50 bg-white/3 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/8 hover:border-primary/50 hover:shadow-[0_12px_32px_-8px_hsl(var(--primary)/0.2)]"
            >
              💼 LinkedIn
            </a>

            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-border/50 bg-white/3 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/8 hover:border-primary/50 hover:shadow-[0_12px_32px_-8px_hsl(var(--primary)/0.2)]"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
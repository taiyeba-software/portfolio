import { siteConfig } from '@/lib/data'
import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 font-mono text-sm text-muted-foreground">{'// contact'}</h2>
        <h3 className="mb-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Get in Touch
        </h3>
        <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
          {"If you'd like to discuss a project or just say hi, I'm always open to a conversation."}
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          Say Hello
        </a>
      </div>
    </section>
  )
}

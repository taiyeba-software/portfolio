import { projectsData } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 font-mono text-sm text-muted-foreground">{'// projects'}</h2>
        <h3 className="mb-10 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Selected Work
        </h3>
        <div className="flex flex-col gap-6">
          {projectsData.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-muted-foreground/30 hover:bg-secondary/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-lg font-medium text-card-foreground">{project.title}</h4>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

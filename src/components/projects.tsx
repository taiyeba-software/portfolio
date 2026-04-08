import Image from 'next/image'
import { projectsData } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '../../components/ui/badge'
import {
  Card,
  CardContent,
} from '../../components/ui/card'
import { cn } from '@/lib/utils'

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* <h2 className="mb-2 text-center font-mono text-sm text-muted-foreground">{'// projects'}</h2> */}
        <h3 className="type-h2 mb-12 text-center">
          My Work
        </h3>

        <div className="my-24 space-y-6">
          {projectsData.map((project, index) => (
            
            <Card
              key={project.title}
              className={cn(
                'group overflow-hidden border-border/70 bg-card/85 py-0 font-sans transition-all duration-300 hover:-translate-y-0.5 hover:bg-card hover:shadow-[0_14px_28px_-16px_hsl(var(--primary)/0.5)]',
                index === 0
                  ? 'border-primary/45 shadow-[0_0_0_1px_hsl(var(--primary)/0.25)]'
                  : 'border-border/60'
              )}
            >
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div
                  className={cn(
                    'grid grid-cols-1 gap-4 sm:gap-5 md:items-center md:gap-6',
                    index === 0 ? 'md:grid-cols-[1.3fr_1fr]' : 'md:grid-cols-[1fr_1fr]'
                  )}
                >
                  <div
                    className={cn(
                      'space-y-4',
                      index % 2 === 1 && index !== 0 ? 'md:order-2' : 'md:order-1'
                    )}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="type-label">
                        {project.company}
                      </p>
                      {project.status === 'Live' && (
                        <Badge
                          variant="secondary"
                          className="border-emerald-500/30 bg-emerald-500/10 text-[11px] font-semibold text-emerald-500"
                        >
                          🟢 Live
                        </Badge>
                      )}
                      {project.status === 'Upcoming' && (
                        <Badge
                          variant="secondary"
                          className="border-amber-500/30 bg-amber-500/10 text-[11px] font-semibold text-amber-500"
                        >
                          🟡 Upcoming
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h4 className="type-h4 sm:text-xl">
                        {project.title}
                      </h4>
                      <p className="type-accent text-base leading-snug sm:text-lg">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {project.problem && (
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">Problem:</span> {project.problem}
                        </p>
                      )}

                      {project.solution && (
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">Solution:</span> {project.solution}
                        </p>
                      )}

                      <p className="type-body whitespace-pre-line text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    {project.features && (
                      <div className="pt-2">
                        <p className="mb-1 text-sm font-semibold text-primary">Key Features:</p>
                        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 border-t border-border/60 pt-3">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md border border-primary/40 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        GitHub
                      </a>
                      {project.status === 'Upcoming' ? (
                        <button
                          type="button"
                          disabled
                          className="inline-flex cursor-not-allowed items-center gap-1 text-sm font-semibold text-muted-foreground/70"
                        >
                          In Development
                        </button>
                      ) : (
                        <a
                          href={project.liveDemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
                        >
                          Live demo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div
                    className={cn(
                      'relative aspect-[4/3] overflow-hidden rounded-lg border border-border/60 bg-secondary/35',
                      index % 2 === 1 && index !== 0 ? 'md:order-1' : 'md:order-2'
                    )}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 35vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

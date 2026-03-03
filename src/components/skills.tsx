import { skillsData } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 font-mono text-sm text-muted-foreground">{'// skills'}</h2>
        <h3 className="mb-10 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {skillsData.map((skill) => (
            <div key={skill.category} className="flex flex-col gap-3">
              <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {skill.category}
              </h4>
              <ul className="flex flex-col gap-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

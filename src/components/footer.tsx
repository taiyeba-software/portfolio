import { siteConfig } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {`Built by ${siteConfig.name}`}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {`${new Date().getFullYear()}`}
        </p>
      </div>
    </footer>
  )
}

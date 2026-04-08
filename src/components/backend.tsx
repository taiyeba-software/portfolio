'use client'

import { Database, Lock, Zap, Webhook, ShoppingCart } from 'lucide-react'

const highlights = [
  {
    icon: Zap,
    title: 'REST APIs',
    description: 'Designed REST APIs with controller-service architecture',
  },
  {
    icon: ShoppingCart,
    title: 'Order Flow',
    description: 'Implemented order flow: cart -> order -> inventory update',
  },
  {
    icon: Database,
    title: 'MongoDB & Mongoose',
    description: 'Used MongoDB + Mongoose for schema design',
  },
  {
    icon: Lock,
    title: 'Authentication & RBAC',
    description: 'Handled authentication & role-based access (user/admin)',
  },
  {
    icon: Webhook,
    title: 'Webhooks Integration',
    description: 'Integrated Cloudinary & Stripe webhooks',
  },
]

export function BackendSection() {
  return (
    <section id="backend" className="bg-card/50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h3 className="mb-12 text-2xl font-bold">Backend Engineering Highlights</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className="rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/50 hover:shadow-sm"
              >
                <div className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div className="flex-1">
                    <h4 className="mb-1 font-semibold text-foreground">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

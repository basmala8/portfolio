'use client'

import { Code2, LayoutTemplate, type LucideIcon, MonitorSmartphone, Palette, ShoppingBag } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { useSite } from '@/components/site-providers'

const icons: LucideIcon[] = [MonitorSmartphone, LayoutTemplate, ShoppingBag, Code2, Palette]

export function Services() {
  const { t } = useSite()

  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      {/* subtle ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px] dark:bg-primary/5" />

      <SectionHeading
        kicker={t.nav.services}
        title={t.services.title}
        subtitle={t.services.subtitle}
        center
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((service, i) => {
          const Icon = icons[i] ?? Palette
          const featured = i === 0
          return (
            <Reveal
              key={service.name}
              delay={i * 60}
              className={featured ? 'lg:col-span-1 lg:row-span-1' : ''}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/90 p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_45px_-15px_rgba(117,82,186,0.18)] dark:hover:shadow-[0_20px_45px_-15px_rgba(195,178,245,0.12)]">
                <div className="pointer-events-none absolute -top-16 -right-16 size-36 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(195,178,245,0.35)]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold tracking-tight text-foreground">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

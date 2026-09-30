'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { useSite } from '@/components/site-providers'

export function Skills() {
  const { t } = useSite()

  return (
    <section id="skills" className="relative scroll-mt-24 bg-muted/40 py-24 md:py-32">
      {/* subtle ambient glow */}
      <div className="pointer-events-none absolute -top-20 right-1/4 size-80 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={t.nav.skills} title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.items.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/80 bg-card/90 p-7 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_45px_-15px_rgba(117,82,186,0.18)] dark:hover:shadow-[0_20px_45px_-15px_rgba(195,178,245,0.12)]">
                <div className="pointer-events-none absolute -top-16 -right-16 size-36 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs font-semibold tracking-wider text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{skill.desc}</p>
                <span className="mt-5 block h-px w-0 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

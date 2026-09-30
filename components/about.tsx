'use client'

import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useSite } from '@/components/site-providers'

export function About() {
  const { t } = useSite()

  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute top-1/2 -start-20 size-80 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5" />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 shrink-0 bg-gradient-to-r from-primary to-accent" />

                <span className="text-xs font-semibold tracking-[0.32em] text-accent uppercase">
                  {t.nav.about}
                </span>
              </div>

              <h2 className="mt-4 font-serif text-4xl leading-tight font-semibold tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
                {t.about.title}
              </h2>
            </div>

            <div className="shrink-0 rounded-2xl border border-border/80 bg-card/95 px-4 py-3 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 sm:px-5 sm:py-3.5">
              <p className="font-serif text-2xl font-bold text-primary sm:text-3xl">
                CS
              </p>

              <p className="whitespace-nowrap text-[0.6rem] font-medium tracking-[0.16em] text-accent uppercase sm:text-[0.68rem] sm:tracking-[0.2em]">
                Student &amp; Dev
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-4xl text-base leading-relaxed text-muted-foreground text-pretty md:mt-10 md:text-lg lg:text-xl">
            {t.about.body}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/70 p-4 shadow-[0_8px_25px_-12px_rgba(0,0,0,0.25)] backdrop-blur-sm md:mt-10 md:p-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary md:size-12">
              <GraduationCap className="size-5 md:size-6" />
            </span>

            <div className="min-w-0">
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-accent uppercase">
                {t.about.educationLabel}
              </p>

              <p className="text-sm font-medium text-foreground md:text-base">
                {t.about.education}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {t.about.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-2 text-xs font-medium tracking-wide text-foreground/90 transition-colors hover:border-primary hover:bg-primary/15 md:text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
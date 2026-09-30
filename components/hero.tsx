'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Code2, GraduationCap } from 'lucide-react'
import { useSite } from '@/components/site-providers'

export function Hero() {
  const { t } = useSite()
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setOffset({ x, y })
    }

    window.addEventListener('pointermove', onMove)

    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16 md:pt-36 md:pb-20"
    >
      {/* soft luxury radial ambient glows */}
      <div className="pointer-events-none absolute -top-32 -right-24 size-[44rem] rounded-full bg-primary/15 blur-[120px] dark:bg-primary/10" />

      <div className="pointer-events-none absolute -bottom-40 -left-24 size-[40rem] rounded-full bg-accent/20 blur-[130px] dark:bg-accent/8" />

      {/* decorative background wordmark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-serif text-[22vw] leading-none font-semibold tracking-tight text-primary/[0.03]"
      >
        PORTFOLIO
      </span>

      {/* Always side-by-side */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-[1.15fr_0.85fr] items-center gap-5 px-4 sm:gap-8 sm:px-6 md:gap-12 lg:gap-20">

        {/* Text column */}
        <div className="flex min-w-0 w-full flex-col items-start text-start">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 sm:w-10 bg-gradient-to-r from-primary to-accent" />

            <span className="text-[0.6rem] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-accent uppercase">
              {t.hero.label}
            </span>
          </div>

          <h1 className="font-serif text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.name}
          </h1>

          <div className="mt-3 flex items-center gap-2.5 sm:mt-4">
            <span className="size-1.5 shrink-0 rounded-full bg-primary animate-pulse" />

            <p className="text-[0.65rem] sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.25em] text-primary uppercase">
              {t.hero.role}
            </p>
          </div>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
            {t.hero.desc}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-medium tracking-wide text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/95 sm:gap-2.5 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              {t.hero.viewWork}

              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 sm:size-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-5 py-3 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary sm:px-7 sm:py-3.5 sm:text-sm"
            >
              {t.hero.connect}
            </a>
          </div>
        </div>

        {/* Visual column */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full">

            {/* arch frame — kept exactly the original structure */}
            <div className="absolute inset-0 overflow-hidden rounded-[50%_50%_50%_50%/60%_60%_40%_40%] border border-accent/40 bg-gradient-to-b from-secondary/80 via-card to-background shadow-2xl dark:border-primary/30">
              <Image
                src="/avatar.png"
                alt="Illustrated avatar of Basmala Mohamed"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover object-top"
              />
            </div>

            {/* Education card */}
            <div className="absolute -top-3 -end-2 z-20 flex items-center gap-2 rounded-2xl border border-border/80 bg-card/90 px-2.5 py-2 shadow-xl backdrop-blur-md sm:-top-4 sm:-end-4 sm:gap-2.5 sm:px-4 sm:py-2.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary sm:size-7">
                <GraduationCap className="size-3.5 sm:size-4" />
              </span>

              <div className="text-start">
                <p className="text-[0.5rem] font-medium tracking-[0.15em] text-accent uppercase sm:text-[0.65rem] sm:tracking-[0.2em]">
                  Education
                </p>

                <p className="text-[9px] font-semibold text-foreground sm:text-xs">
                  EELU — 4th Year
                </p>
              </div>
            </div>

            {/* Specialization card */}
            <div className="absolute -bottom-3 -start-2 z-20 flex items-center gap-2 rounded-2xl border border-border/80 bg-card/90 px-2.5 py-2 shadow-xl backdrop-blur-md sm:-bottom-4 sm:-start-4 sm:gap-2.5 sm:px-4 sm:py-2.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent sm:size-7">
                <Code2 className="size-3.5 sm:size-4" />
              </span>

              <div className="text-start">
                <p className="text-[0.5rem] font-medium tracking-[0.15em] text-primary uppercase sm:text-[0.65rem] sm:tracking-[0.2em]">
                  Specialization
                </p>

                <p className="text-[9px] font-semibold text-foreground sm:text-xs">
                  Front-End Developer
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { TextAnimate } from '@/components/ui/text-animate'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { ShimmerButton } from '@/components/ui/shimmer-button'
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

    return () => {
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16 md:pt-36 md:pb-20 bg-background"
    >
      {/* ================= BACKGROUND GLOW EFFECTS ================= */}
      {/* توهج ضوئي علوي قوي متناسق مع اللون الأساسي للموقع */}
      <div className="pointer-events-none absolute -top-40 -right-20 size-[50rem] rounded-full bg-primary/20 blur-[140px] dark:bg-primary/15 animate-pulse duration-[6s]" />

      {/* توهج ضوئي سفلي ممتد ليعطي عمق فخم للخلفية */}
      <div className="pointer-events-none absolute -bottom-40 -left-20 size-[45rem] rounded-full bg-accent/25 blur-[150px] dark:bg-accent/12" />

      {/* وهج مركزي خفيف جداً يقع مباشرة خلف الكارت والنصوص لربط العناصر بصرياً */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[60rem] rounded-full bg-primary/[0.03] blur-[160px]" />

      {/* Background text */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-serif text-[22vw] leading-none font-semibold tracking-tight text-primary/[0.025]"
      >
        PORTFOLIO
      </span>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-[1.15fr_0.85fr] items-center gap-5 px-4 sm:gap-8 sm:px-6 md:gap-12 lg:gap-20">

        {/* ================= LEFT SIDE (NARRATIVE) ================= */}
        <div className="flex min-w-0 w-full flex-col items-start text-start">

          {/* Small label */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-primary to-accent sm:w-10" />
            <span className="text-[0.6rem] font-semibold tracking-[0.25em] text-accent uppercase sm:text-xs sm:tracking-[0.35em]">
              {t.hero.label}
            </span>
          </div>

          {/* Name */}
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="font-serif text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t.hero.name}
          </TextAnimate>

          {/* Role */}
          <TextAnimate
            animation="fadeIn"
            by="word"
            className="mt-3 text-[0.65rem] font-medium tracking-[0.15em] text-primary uppercase sm:mt-4 sm:text-sm sm:tracking-[0.25em]"
          >
            {t.hero.role}
          </TextAnimate>

          {/* Description */}
          <TextAnimate
            animation="fadeIn"
            by="word"
            className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg"
          >
            {t.hero.desc}
          </TextAnimate>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-4">

            {/* View My Work */}
            <ShimmerButton
              type="button"
              shimmerColor="#ffffff"
              background="hsl(var(--primary))"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
              className="px-5 py-3 text-xs font-medium tracking-wide sm:px-7 sm:py-3.5 sm:text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.viewWork}
                <ArrowRight className="size-3.5 sm:size-4" />
              </span>
            </ShimmerButton>

            {/* Let's Connect */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-5 py-3 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary sm:px-7 sm:py-3.5 sm:text-sm"
            >
              {t.hero.connect}
            </a>

          </div>
        </div>

        {/* ================= RIGHT SIDE (VISUAL CARD) ================= */}
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px]">
          <div
            className="relative aspect-[4/5] w-full transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${offset.x * 10}px, ${offset.y * 10}px, 0)`,
            }}
          >
            {/* Animated card */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-accent/40 bg-card/70 shadow-2xl backdrop-blur-md dark:border-primary/30">
              
              <AnimatedGridPattern
                numSquares={24}
                maxOpacity={0.18}
                duration={3}
                repeatDelay={1}
                className="absolute inset-0 h-full w-full skew-y-6 fill-primary/10 stroke-primary/20"
              />

              {/* Center content */}
              <div className="absolute inset-7 flex flex-col items-center justify-center rounded-[1.5rem] border border-white/20 bg-background/35 p-4 shadow-[0_20px_60px_-20px_rgba(117,82,186,0.35)] backdrop-blur-xl sm:inset-8">

                {/* BM */}
                <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-[0_0_35px_rgba(195,178,245,0.2)] sm:size-16">
                  <span className="font-serif text-xl font-semibold text-primary sm:text-2xl">
                    BM
                  </span>
                </div>

                {/* My Stack */}
                <p className="mt-4 text-center font-serif text-lg font-semibold text-foreground sm:text-xl">
                  My Stack
                </p>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-medium text-foreground sm:text-xs">
                    React
                  </span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-medium text-foreground sm:text-xs">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-medium text-foreground sm:text-xs">
                    JavaScript
                  </span>
                </div>
              </div>

              {/* Soft glow inside card */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[60px]" />
            </div>

            {/* Education card */}
            <div className="absolute -bottom-4 -start-5 rounded-xl border border-border/80 bg-card/95 px-3 py-2 shadow-xl backdrop-blur-md sm:-bottom-5 sm:-start-6 sm:rounded-2xl sm:px-4 sm:py-3">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary sm:size-8">
                  <GraduationCap className="size-3.5 sm:size-4" />
                </span>
                <div>
                  <p className="text-[8px] font-semibold tracking-wider text-accent uppercase sm:text-[9px]">
                    Education
                  </p>
                  <p className="text-[9px] font-medium text-foreground sm:text-[10px]">
                    EELU · 4th Year
                  </p>
                </div>
              </div>
            </div>

            {/* CS Badge Card (تم إغلاقها وتنسيقها بشكل صحيح) */}
            <div className="absolute -top-3 -end-4 rounded-xl border border-border/80 bg-card/95 px-3 py-1.5 shadow-xl backdrop-blur-md sm:-top-4 sm:-end-5 sm:rounded-2xl sm:px-4 sm:py-2">
              <p className="text-[9px] font-semibold tracking-wider text-primary uppercase sm:text-[10px]">
                CS Student & Dev
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

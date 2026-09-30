'use client'

import Image from 'next/image'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { useSite } from '@/components/site-providers'
import { cn } from '@/lib/utils'

const projectsData = [
  {
    index: '01',
    name: 'LUXEORA',
    desc: 'A luxury jewelry and artisanal accessories website featuring elegant jewelry pieces and refined designs, with a sophisticated visual style that reflects the brand’s luxurious identity.',
    image: '/luxeora.png',
    live: 'https://basmala8.github.io/LUXEORA-Luxury-Jewelry-Artisanal-Accessories-E-Commerce-Website-/',
    code: 'https://github.com/basmala8/LUXEORA-Luxury-Jewelry-Artisanal-Accessories-E-Commerce-Website-',
  },
  {
    index: '02',
    name: "L'Aura Ceramics",
    desc: 'A ceramics and home decor website showcasing a collection of ceramic products and decorative pieces through a clean and elegant layout that keeps the products at the center.',
    image: '/alora2.png',
    live: 'https://basmala8.github.io/L-Aura-Ceramics-Home-Decor-E-Commerce-Website/',
    code: 'https://github.com/basmala8/L-Aura-Ceramics-Home-Decor-E-Commerce-Website',
  },
  {
    index: '03',
    name: 'Medical Booking App',
    desc: 'A responsive medical booking web application built with React, allowing users to browse doctors, view doctor details, book appointments, and manage their appointments through a simple and user-friendly interface.',
    image: '/1f.PNG',
    live: 'https://medical-ger4beyg6-bm5563645-4836.vercel.app/',
    code: 'https://github.com/basmala8',
  },
]

export function Projects() {
  const { t } = useSite()

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-muted/40 py-16 md:py-32"
    >
      <div className="pointer-events-none absolute top-1/3 -start-24 size-72 rounded-full bg-primary/10 blur-[140px] dark:bg-primary/5 md:size-96" />

      <div className="pointer-events-none absolute bottom-1/4 -end-24 size-72 rounded-full bg-accent/15 blur-[140px] dark:bg-accent/5 md:size-96" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Projects"
          title="Featured Works"
          subtitle="A collection of my recent web development and e-commerce projects."
        />

        <div className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-28">
          {projectsData.map((project, i) => {
            const reversed = i % 2 === 1

            return (
              <Reveal key={project.name}>
                <article className="grid grid-cols-[1.1fr_0.9fr] items-center gap-5 sm:gap-8 md:gap-12 lg:gap-14">

                  {/* Project Image */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'group relative block w-full overflow-hidden rounded-2xl border border-accent/40 bg-card shadow-[0_20px_50px_-20px_rgba(117,82,186,0.2)] transition-all duration-500 hover:border-primary/50 dark:border-primary/25 md:rounded-[2rem]',
                      reversed && 'order-2',
                    )}
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={project.image.trim()}
                        alt={`${project.name} website preview`}
                        width={1200}
                        height={750}
                        className="size-full object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />

                    <span className="absolute end-3 top-3 flex size-10 items-center justify-center rounded-full border border-border/70 bg-background/90 text-primary shadow-lg backdrop-blur-md transition-all duration-400 md:end-4 md:top-4 md:size-11">
                      <ArrowUpRight className="size-4 md:size-5 rtl:rotate-90" />
                    </span>
                  </a>

                  {/* Project Info */}
                  <div
                    className={cn(
                      'flex min-w-0 w-full flex-col items-start',
                      reversed && 'order-1',
                    )}
                  >
                    <span className="font-serif text-4xl font-semibold tracking-tight text-accent/50 md:text-6xl">
                      {project.index}
                    </span>

                    <h3 className="mt-1 font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:mt-2 md:text-5xl">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground text-pretty sm:text-sm md:mt-4 md:text-base">
                      {project.desc}
                    </p>

                    {/* Buttons */}
                    <div className="mt-5 flex w-full flex-wrap items-center gap-2 sm:w-auto md:mt-7 md:gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-medium tracking-wide text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/95 sm:flex-initial md:px-6 md:py-3 md:text-sm"
                      >
                        Live Demo

                        <ArrowUpRight className="size-3.5 md:size-4 rtl:rotate-90" />
                      </a>

                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border/80 bg-card/60 px-4 py-2.5 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary sm:flex-initial md:px-6 md:py-3 md:text-sm"
                      >
                        <Code2 className="size-3.5 text-accent md:size-4" />

                        Source Code
                      </a>
                    </div>
                  </div>

                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
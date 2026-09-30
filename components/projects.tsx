'use client'

import Image from 'next/image'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const projectsData = [
  {
    index: '01',
    name: 'LUXEORA',
    desc: 'A luxury jewelry and artisanal accessories website featuring elegant jewelry pieces and refined designs, with a sophisticated visual style that reflects the brand’s luxurious identity.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/luxeora.png',
    live: 'https://github.io',
    code: 'https://github.com',
  },
  {
    index: '02',
    name: "L'Aura Ceramics",
    desc: 'A ceramics and home decor website showcasing a collection of ceramic products and decorative pieces through a clean and elegant layout that keeps the products at the center.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/alora2.png',
    live: 'https://github.io',
    code: 'https://github.com',
  },
  {
    index: '03',
    name: 'Medical Booking App',
    desc: 'A responsive medical booking web application built with React, allowing users to browse doctors, view doctor details, book appointments, and manage their appointments through a simple and user-friendly interface.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    image: '/1f.PNG',
    live: 'https://vercel.app',
    code: 'https://github.com',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-muted/40 py-16 md:py-28"
    >
      <div className="pointer-events-none absolute top-1/3 -start-24 size-72 rounded-full bg-primary/10 blur-[140px] dark:bg-primary/5 md:size-96" />
      <div className="pointer-events-none absolute bottom-1/4 -end-24 size-72 rounded-full bg-accent/15 blur-[140px] dark:bg-accent/5 md:size-96" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          kicker="Projects"
          title="Featured Works"
          subtitle="A collection of my recent web development and e-commerce projects."
        />

        {/* العودة للترتيب الرأسي المتبادل الأصلي مع تقليل الفراغات (gap-16) ليكون ملموماً */}
        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-24">
          {projectsData.map((project, i) => {
            const reversed = i % 2 === 1

            return (
              <Reveal key={project.name}>
                {/* ضبط نسب الأعمدة إلى grid-cols-1 وفي الشاشات الكبيرة md:grid-cols-2 بالتساوي لتقليص حجم الصورة */}
                <article className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'group relative block w-full overflow-hidden rounded-2xl border border-accent/30 bg-card shadow-lg transition-all duration-500 hover:border-primary/50 dark:border-primary/20 md:rounded-[1.5rem]',
                      reversed && 'md:order-2',
                    )}
                  >
                    {/* حصر أبعاد الصورة في نسبة ثابتة ورشيقة aspect-[16/9] تمنع أي تمطيط أو تشويه بصري */}
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.name} website preview`}
                        width={1000}
                        height={562}
                        className="size-full object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-103"
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
                    <span className="absolute end-3 top-3 flex size-9 items-center justify-center rounded-full border border-border/70 bg-background/90 text-primary shadow-md backdrop-blur-md transition-all duration-300 md:size-10">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </a>

                  {/* تفاصيل المشروع بنفس التنسيق الأصلي المحبب لكِ */}
                  <div
                    className={cn(
                      'flex min-w-0 w-full flex-col items-start',
                      reversed && 'md:order-1',
                    )}
                  >
                    <span className="font-serif text-3xl font-bold tracking-tight text-accent/40 md:text-5xl">
                      {project.index}
                    </span>

                    <h3 className="mt-1 font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl md:mt-2 md:text-3xl">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground text-pretty sm:text-sm md:mt-4">
                      {project.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex w-full flex-wrap items-center gap-2 sm:w-auto md:mt-6 md:gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium tracking-wide text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/95 sm:flex-initial md:px-5 md:py-2.5 md:text-sm"
                      >
                        Live Demo
                        <ArrowUpRight className="size-3.5" />
                      </a>

                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border/80 bg-card/60 px-4 py-2 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary sm:flex-initial md:px-5 md:py-2.5 md:text-sm"
                      >
                        <Code2 className="size-3.5 text-accent" />
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

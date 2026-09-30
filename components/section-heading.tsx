import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  kicker,
  title,
  subtitle,
  center,
}: {
  kicker?: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <Reveal className={cn('max-w-2xl', center && 'mx-auto text-center')}>
      {kicker ? (
        <div className={cn('flex items-center gap-3', center && 'justify-center')}>
          <span className="h-px w-8 bg-gradient-to-r from-primary to-accent" />
          <span className="text-xs font-semibold tracking-[0.32em] text-accent uppercase">
            {kicker}
          </span>
          {center ? <span className="h-px w-8 bg-gradient-to-l from-primary to-accent" /> : null}
        </div>
      ) : null}
      <h2 className="mt-4 font-serif text-4xl leading-tight font-semibold tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}

'use client'

import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { useSite } from '@/components/site-providers'

export function Footer() {
  const { t } = useSite()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/80 bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-tight text-foreground">{t.hero.name}</p>
          <p className="mt-1 text-xs font-semibold tracking-[0.25em] text-accent uppercase">{t.footer.role}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <a
            href="mailto:bm5563645@gmail.com"
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
          >
            bm5563645@gmail.com
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/basmala-mohamed-qrr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.linkedinLabel}
              className="flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/60 text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_12px_rgba(195,178,245,0.3)]"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="https://github.com/basmala8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.githubLabel}
              className="flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/60 text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_12px_rgba(195,178,245,0.3)]"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href="mailto:bm5563645@gmail.com"
              aria-label={t.contact.emailLabel}
              className="flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/60 text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_12px_rgba(195,178,245,0.3)]"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-6 py-5 text-center text-xs tracking-wide text-muted-foreground">
          © {year} {t.hero.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

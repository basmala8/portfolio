'use client'

import { type FormEvent, useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { useSite } from '@/components/site-providers'
import { cn } from '@/lib/utils'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'

type Status = 'idle' | 'sending' | 'success' | 'error'

const contactLinks = [
  {
    key: 'email',
    href: 'mailto:bm5563645@gmail.com',
    value: 'bm5563645@gmail.com',
    Icon: Mail,
  },
  {
    key: 'linkedin',
    href: 'https://linkedin.com/in/basmala-mohamed-qrr',
    value: 'basmala-mohamed-qrr',
    Icon: LinkedinIcon,
  },
  {
    key: 'github',
    href: 'https://github.com/basmala8',
    value: 'basmala8',
    Icon: GithubIcon,
  },
] as const

export function Contact() {
  const { t } = useSite()
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(form),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const labels: Record<string, string> = {
    email: t.contact.emailLabel,
    linkedin: t.contact.linkedinLabel,
    github: t.contact.githubLabel,
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background/60 px-2.5 py-2 text-[10px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15 sm:px-3 sm:py-2.5 sm:text-xs md:px-4 md:py-3 md:text-sm'

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-3 py-16 sm:px-4 sm:py-20 md:px-6 md:py-32"
    >
      {/* subtle ambient glow */}
      <div className="pointer-events-none absolute bottom-10 -start-20 size-80 rounded-full bg-primary/10 blur-[130px] dark:bg-primary/5" />

      <div className="pointer-events-none absolute top-10 -end-20 size-80 rounded-full bg-accent/15 blur-[130px] dark:bg-accent/5" />

      {/* Contact Info + Form */}
      <div className="grid grid-cols-[0.9fr_1.1fr] items-start gap-3 sm:gap-5 md:gap-10 lg:gap-16">

        {/* Info */}
        <div className="min-w-0">
          <Reveal>
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
              <span className="h-px w-4 bg-gradient-to-r from-primary to-accent sm:w-6 md:w-8" />

              <span className="truncate text-[8px] font-semibold tracking-[0.18em] text-accent uppercase sm:text-[10px] sm:tracking-[0.25em] md:text-xs md:tracking-[0.32em]">
                {t.nav.contact}
              </span>
            </div>

            <h2 className="mt-2 font-serif text-lg leading-tight font-semibold tracking-tight text-balance text-foreground sm:mt-3 sm:text-2xl md:mt-4 md:text-5xl">
              {t.contact.title}
            </h2>

            <p className="mt-2 max-w-md text-[10px] leading-relaxed text-muted-foreground text-pretty sm:mt-3 sm:text-xs md:mt-4 md:text-base">
              {t.contact.subtitle}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-5 flex flex-col gap-2 sm:mt-7 sm:gap-3 md:mt-10 md:gap-4">
              {contactLinks.map(({ key, href, value, Icon }) => (
                <li key={key}>
                  <a
                    href={href}
                    target={key === 'email' ? undefined : '_blank'}
                    rel={
                      key === 'email'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={`${labels[key]}: ${value}`}
                    className="group flex min-w-0 items-center gap-2 rounded-xl border border-border/80 bg-card/90 p-2 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_12px_30px_-10px_rgba(117,82,186,0.15)] dark:hover:shadow-[0_12px_30px_-10px_rgba(195,178,245,0.1)] sm:gap-3 sm:rounded-2xl sm:p-3 md:gap-4 md:p-4"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(195,178,245,0.3)] sm:size-9 sm:rounded-xl md:size-11">
                      <Icon className="size-3.5 sm:size-4 md:size-5" />
                    </span>

                    <span className="flex min-w-0 flex-col">
                      <span className="truncate text-[7px] font-semibold tracking-[0.12em] text-accent uppercase sm:text-[9px] sm:tracking-[0.15em] md:text-[0.68rem] md:tracking-[0.18em]">
                        {labels[key]}
                      </span>

                      <span className="truncate text-[9px] font-medium text-foreground transition-colors duration-300 group-hover:text-primary sm:text-[11px] md:text-sm">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="w-full min-w-0 rounded-2xl border border-border/80 bg-card/85 p-3 shadow-[0_10px_35px_-15px_rgba(0,0,0,0.2)] backdrop-blur-md sm:rounded-3xl sm:p-5 md:p-9 lg:max-w-[620px] lg:justify-self-end"
          >
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">

              {/* Name */}
              <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                <label
                  htmlFor="name"
                  className="text-[7px] font-semibold tracking-[0.12em] text-accent uppercase sm:text-[9px] sm:tracking-[0.15em] md:text-[0.68rem] md:tracking-[0.18em]"
                >
                  {t.contact.name}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                <label
                  htmlFor="email"
                  className="text-[7px] font-semibold tracking-[0.12em] text-accent uppercase sm:text-[9px] sm:tracking-[0.15em] md:text-[0.68rem] md:tracking-[0.18em]"
                >
                  {t.contact.email}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                <label
                  htmlFor="message"
                  className="text-[7px] font-semibold tracking-[0.12em] text-accent uppercase sm:text-[9px] sm:tracking-[0.15em] md:text-[0.68rem] md:tracking-[0.18em]"
                >
                  {t.contact.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={cn(inputClass, 'resize-none')}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-[9px] font-medium tracking-wide text-primary-foreground shadow-[0_10px_28px_-10px_rgba(117,82,186,0.35)] transition-all duration-300 hover:gap-2 hover:bg-primary/95 hover:shadow-[0_16px_36px_-10px_rgba(117,82,186,0.55)] disabled:opacity-60 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-xs md:gap-2.5 md:px-7 md:py-3.5 md:text-sm dark:shadow-[0_10px_28px_-10px_rgba(195,178,245,0.3)] dark:hover:shadow-[0_16px_36px_-10px_rgba(195,178,245,0.5)]"
              >
                {status === 'sending'
                  ? t.contact.sending
                  : t.contact.send}

                <Send className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 rtl:-scale-x-100 sm:size-3.5 md:size-4" />
              </button>

              {/* Success */}
              {status === 'success' ? (
                <p
                  className="text-[9px] font-medium text-primary sm:text-xs md:text-sm"
                  role="status"
                >
                  {t.contact.success}
                </p>
              ) : null}

              {/* Error */}
              {status === 'error' ? (
                <p
                  className="text-[9px] font-medium text-destructive sm:text-xs md:text-sm"
                  role="alert"
                >
                  {t.contact.error}
                </p>
              ) : null}

            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
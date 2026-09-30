'use client'

import { useEffect, useState } from 'react'
import { Languages, Menu, Moon, Sun } from 'lucide-react'
import { CloseIcon } from '@/components/icons'
import { useSite } from '@/components/site-providers'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { t, theme, toggleTheme, lang, toggleLang } = useSite()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ]

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-7',
          scrolled
            ? 'border border-border/80 bg-background/85 shadow-[0_12px_36px_-15px_rgba(117,82,186,0.18)] backdrop-blur-xl dark:bg-card/85 dark:shadow-[0_16px_40px_-18px_rgba(0,0,0,0.85)]'
            : 'border border-transparent bg-transparent',
        )}
      >
        <a href="#home" className="group flex items-center gap-2.5" aria-label={t.hero.name}>
          <span className="flex size-9 items-center justify-center rounded-full border border-primary/40 font-serif text-base font-semibold text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(195,178,245,0.4)]">
            B
          </span>
          <span className="hidden font-serif text-lg font-medium tracking-wide text-foreground transition-colors group-hover:text-primary sm:inline">
            {t.hero.name}
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-light tracking-wide text-foreground/80 transition-colors duration-300 hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground/85 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
          >
            <Languages className="size-3.5 text-accent" />
            <span className={lang === 'en' ? 'font-arabic' : undefined}>
              {lang === 'en' ? 'العربية' : 'English'}
            </span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="relative flex size-9 items-center justify-center overflow-hidden rounded-full border border-border/80 bg-card/60 text-foreground/85 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_15px_rgba(195,178,245,0.3)]"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            <Sun
              className={cn(
                'absolute size-4 transition-all duration-500',
                theme === 'light' ? 'translate-y-0 rotate-0 opacity-100' : '-translate-y-6 rotate-90 opacity-0',
              )}
            />
            <Moon
              className={cn(
                'absolute size-4 transition-all duration-500',
                theme === 'dark' ? 'translate-y-0 rotate-0 opacity-100' : 'translate-y-6 -rotate-90 opacity-0',
              )}
            />
          </button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex size-9 items-center justify-center rounded-full border border-border/80 bg-card/60 text-foreground/85 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-2xl transition-all duration-500 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex items-center justify-between px-6 pt-7">
          <span className="font-serif text-xl font-semibold text-foreground">{t.hero.name}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
            aria-label="Close menu"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>
        <ul className="flex flex-1 flex-col items-center justify-center gap-7">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-foreground/85 transition-all duration-300 hover:scale-105 hover:text-primary"
                style={{ transitionDelay: open ? `${i * 35}ms` : '0ms' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

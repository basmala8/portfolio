'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { dictionaries, type Dict, type Lang } from '@/lib/i18n'

type Theme = 'light' | 'dark'

type SiteContextValue = {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: Dict
  setLang: (lang: Lang) => void
  toggleLang: () => void
  theme: Theme
  toggleTheme: () => void
}

const SiteContext = createContext<SiteContextValue | null>(null)

export function SiteProviders({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const storedLang = (localStorage.getItem('lang') as Lang) || 'en'
    const storedTheme = (localStorage.getItem('theme') as Theme) || 'dark'
    setLangState(storedLang)
    setTheme(storedTheme)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(() => setLangState((p) => (p === 'en' ? 'ar' : 'en')), [])
  const toggleTheme = useCallback(() => setTheme((p) => (p === 'light' ? 'dark' : 'light')), [])

  return (
    <SiteContext.Provider
      value={{
        lang,
        dir: lang === 'ar' ? 'rtl' : 'ltr',
        t: dictionaries[lang],
        setLang,
        toggleLang,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export function useSite() {
  const ctx = useContext(SiteContext)
  if (!ctx) throw new Error('useSite must be used within SiteProviders')
  return ctx
}

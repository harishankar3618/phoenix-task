import { useState, useEffect } from 'react'

const STORAGE_KEY = 'phx_lang'
export type Lang = 'en' | 'hi' | 'gu' | 'te'

export default function useLanguage() {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
      if (stored) setLang(stored)
      document.documentElement.lang = stored || 'en'
    } catch (e) {
      // ignore (SSR safety)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.lang = lang
    } catch (e) {}
  }, [lang])

  return { lang, setLang }
}

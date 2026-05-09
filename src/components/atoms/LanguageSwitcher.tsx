import React, {useState} from 'react'
import useLanguage, { Lang } from '../../hooks/useLanguage'

const labels: Record<Lang,string> = { en: 'English', hi: 'हिन्दी', gu: 'ગુજરાતી', te: 'తెలుగు' }

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setOpen(v => !v)} className="flex items-center gap-2 rounded-full px-3 py-1 bg-white/6 text-sm">
        {labels[lang as Lang]}
        <span className="text-xs">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md bg-black/90 border border-white/6 py-2">
          {(['en','hi','gu','te'] as Lang[]).map(l => (
            <button key={l} onClick={() => { setLang(l); setOpen(false) }} className="w-full text-left px-3 py-2 text-sm hover:bg-white/5">{labels[l]}</button>
          ))}
        </div>
      )}
    </div>
  )
}

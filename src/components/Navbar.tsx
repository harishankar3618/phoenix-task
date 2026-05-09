import Link from 'next/link'
import React from 'react'
import LanguageSwitcher from './atoms/LanguageSwitcher'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-black/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 bg-brand-red flex items-center justify-center font-bold rounded">P</div>
          <div className="hidden sm:block">
            <div className="font-semibold">Phoenix</div>
            <div className="text-xs text-gray-300">Business Advisory</div>
          </div>
        </Link>
        <nav className="hidden lg:flex gap-6 items-center text-sm">
          <a href="#" className="hover:text-brand-red">Home</a>
          <a href="#programs" className="hover:text-brand-red">Programs</a>
          <a href="#success-stories" className="hover:text-brand-red">Success Stories</a>
          <a href="#about" className="hover:text-brand-red">About</a>
          <a href="#contact" className="px-4 py-2 bg-white/6 rounded text-sm hover:bg-white/10">Schedule Consultation</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <div className="lg:hidden"> 
            <button aria-label="Open menu" className="p-2">☰</button>
          </div>
        </div>
      </div>
    </header>
  )
}

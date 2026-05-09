import React from 'react'

export default function HeroSection() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-black/60 to-black/60"></div>
      <div className="relative z-10 max-w-4xl text-center px-4">
        <p className="eyebrow text-xs uppercase tracking-wider text-brand-red font-semibold">As Featured On Forbes</p>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">Expand Your Business. Live Anywhere.</h1>
        <p className="mt-4 text-lg text-gray-300">Trusted business migration to USA, Australia, New Zealand &amp; UAE — for Indian HNIs</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#eligibility" className="px-6 py-3 bg-brand-red rounded-md font-semibold">Check Your Eligibility</a>
          <a href="#stories" className="px-6 py-3 border border-white/10 rounded-md">Watch Client Stories</a>
        </div>
      </div>
    </section>
  )
}

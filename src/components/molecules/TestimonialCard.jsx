import React from 'react'
import { Play } from 'lucide-react'

export default function TestimonialCard({ name, country, visa, thumb, active = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={active
        ? 'group overflow-hidden rounded-[1.5rem] border border-phoenix-red bg-white/[0.12] text-left shadow-[0_4px_20px_rgba(255,82,82,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,82,82,0.25)]'
        : 'group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]'}
    >
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        <img
          src={thumb}
          alt={`${name} thumbnail`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-phoenix-red/90 text-white/90 shadow-glow">
          <Play className="h-5 w-5 fill-current" />
        </div>
      </div>
      <div className="p-5">
        <p className="mb-2 text-sm font-medium uppercase text-phoenix-red/80 tracking-wider">{country}</p>
        <h3 className="mt-0 font-display text-xl font800 text-white">{name}</h3>
        <p className="mt-2 text-sm text-white/70">{visa}</p>
      </div>
    </button>
  )
}

import React from 'react'

export default function StatCard({ value, prefix = '', suffix = '', label, accent = false }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <div className={accent ? 'font-stat text-3xl font800 text-phoenix-red' : 'font-display text-3xl font800 text-white'}>
        {prefix}
        {value}
        {suffix}
      </div>
      <p className="mt-1 text-xs font-semibold uppercase text-white/50">{label}</p>
    </div>
  )
}

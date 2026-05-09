import React from 'react'
import { ArrowRight } from 'lucide-react'
import Flag from '../atoms/Flag.tsx'

export default function ProgrammeCard({ programme }) {
  const linkHref = programme.external ?? programme.href
  const external = Boolean(programme.external)

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-zinc-950 text-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-phoenix-red/60 hover:shadow-premium">
      <img
        src={programme.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.36] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.46]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.1),rgba(17,17,17,0.92)_42%,#111111_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-phoenix-red to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex min-h-[510px] flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
            <Flag country={programme.countryCode} size={30} />
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70 backdrop-blur-xl">
            {programme.countryName}
          </span>
        </div>

        <div className="mt-auto">
          <p className="text-xs font800 uppercase text-phoenix-red">{programme.eyebrow}</p>
          <h3 className="mt-2 font-display text-2xl font800 leading-tight">{programme.visa}</h3>
          <ul className="mt-5 space-y-3">
            {programme.benefits.slice(0, 4).map((benefit) => (
              <li key={benefit} className="flex gap-2 text-sm leading-6 text-white/75">
                <span className="mt-1 h-4 w-4 shrink-0 rounded-full border border-phoenix-red/60 bg-phoenix-red/20" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <a
            href={linkHref}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font800 text-phoenix-black transition hover:bg-phoenix-red hover:text-white"
          >
            {programme.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  )
}

import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function BlogCard({ title, category, thumbnail, href }) {
  return (
    <a href={href} className="group block overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase text-phoenix-black">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font800 leading-tight text-phoenix-black">{title}</h3>
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-phoenix-red transition group-hover:gap-3">
          Read More
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </a>
  )
}

import React from 'react'

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/[0.04] px-3 py-1 text-sm font-medium">{children}</span>
  )
}

import React from 'react'

export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold tracking-widest text-brand-red uppercase">{children}</div>
  )
}

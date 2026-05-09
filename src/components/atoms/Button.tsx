import React from 'react'
import cx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({ variant = 'primary', size = 'md', className, children, ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md font-semibold transition'
  const variants: Record<string,string> = {
    primary: 'bg-brand-red text-white hover:bg-brand-red-dark',
    secondary: 'bg-white/6 text-white hover:bg-white/10',
    ghost: 'bg-transparent text-white',
    whatsapp: 'bg-[#25D366] text-black'
  }
  const sizes: Record<string,string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button className={cx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

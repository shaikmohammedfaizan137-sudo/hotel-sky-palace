'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/whatsapp'
import { getImageUrl } from '@/lib/utils'

const navLinks = [
  { href: '#room', label: 'Rooms' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#contact', label: 'Contact & Map' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const whatsappUrl = getWhatsAppLink('Hello Hotel Sky Palace, I would like to book a Deluxe AC Room at your Shamshabad, Hyderabad property.')

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src={getImageUrl('/images/logo.png')}
            alt="Hotel Sky Palace logo"
            width={40}
            height={40}
            className="h-10 w-auto max-w-[120px] object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-foreground">
              Hotel Sky Palace
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
              Shamshabad, Hyderabad
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-5 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 shadow-md flex items-center gap-1.5"
          >
            <span>Book Now</span>
          </a>
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 border-t border-border bg-background px-4 py-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-primary px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  )
}

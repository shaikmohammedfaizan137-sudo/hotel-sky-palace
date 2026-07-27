'use client'

import { Phone } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/whatsapp'

export function MobileStickyBar() {
  const whatsappUrl = getWhatsAppLink('Hello Hotel Sky Palace, I would like to book a room at your Shamshabad, Hyderabad property.')

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-between gap-3 border-t border-border bg-background/95 p-3 backdrop-blur-lg md:hidden shadow-2xl">
      <a
        href="tel:+919014333452"
        className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-xs font-bold uppercase tracking-wider text-foreground w-1/3"
      >
        <Phone className="h-4 w-4 text-primary" /> Call
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg flex-1 text-center"
      >
        <span>Book Now</span>
      </a>
    </div>
  )
}

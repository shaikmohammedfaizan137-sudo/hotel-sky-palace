'use client'

import { useState } from 'react'
import { Calendar, Users, Calculator, ArrowRight, ShieldCheck } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/whatsapp'

export function BookingCalculator() {
  const [occupancy, setOccupancy] = useState<'single' | 'double'>('double')
  const [nights, setNights] = useState<number>(1)
  const [checkIn, setCheckIn] = useState<string>('')

  const pricePerNight = occupancy === 'single' ? 2000 : 2500
  const totalPrice = pricePerNight * (nights || 1)

  const dateText = checkIn ? ` starting from ${checkIn}` : ''
  const whatsappMsg = `Hello Hotel Sky Palace, I would like to book a Deluxe AC Room (${occupancy === 'single' ? 'Single' : 'Double'} Occupancy - ₹${pricePerNight}/night) for ${nights} night(s)${dateText}. Total estimated amount: ₹${totalPrice.toLocaleString('en-IN')}. Please confirm availability.`

  const bookingUrl = getWhatsAppLink(whatsappMsg)

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="rounded-2xl border border-primary/30 bg-card/80 p-6 backdrop-blur-md shadow-2xl md:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Instant Estimation
            </span>
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
              Calculate Your Stay & Book
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary font-medium">
            <ShieldCheck className="h-4 w-4" /> Best Rate Guaranteed
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Occupancy Selection */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" /> Occupancy Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setOccupancy('single')}
                className={`rounded-lg p-3 text-left transition-all ${
                  occupancy === 'single'
                    ? 'border-2 border-primary bg-primary/10 text-foreground font-semibold shadow-md'
                    : 'border border-border bg-secondary/50 text-muted-foreground hover:border-primary/50'
                }`}
              >
                <div className="text-xs font-bold uppercase">Single</div>
                <div className="text-sm font-heading text-primary mt-1">₹2,000/night</div>
              </button>
              <button
                type="button"
                onClick={() => setOccupancy('double')}
                className={`rounded-lg p-3 text-left transition-all ${
                  occupancy === 'double'
                    ? 'border-2 border-primary bg-primary/10 text-foreground font-semibold shadow-md'
                    : 'border border-border bg-secondary/50 text-muted-foreground hover:border-primary/50'
                }`}
              >
                <div className="text-xs font-bold uppercase">Double</div>
                <div className="text-sm font-heading text-primary mt-1">₹2,500/night</div>
              </button>
            </div>
          </div>

          {/* Number of Nights & Date */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Calculator className="h-4 w-4 text-primary" /> Number of Nights
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setNights(Math.max(1, nights - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-lg font-bold transition-colors hover:border-primary"
                >
                  -
                </button>
                <span className="font-heading text-lg font-bold text-foreground min-w-[2rem] text-center">
                  {nights} {nights === 1 ? 'Night' : 'Nights'}
                </span>
                <button
                  type="button"
                  onClick={() => setNights(nights + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-lg font-bold transition-colors hover:border-primary"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" /> Preferred Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Total & Action */}
          <div className="flex flex-col justify-between rounded-xl border border-primary/20 bg-secondary/40 p-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Estimated Total</span>
              <div className="font-heading text-3xl font-bold text-primary mt-1">
                ₹{totalPrice.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-muted-foreground">
                ({nights} {nights === 1 ? 'night' : 'nights'} @ ₹{pricePerNight.toLocaleString('en-IN')}/night)
              </span>
            </div>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 px-4 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
            >
              <span>Confirm & Book on WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

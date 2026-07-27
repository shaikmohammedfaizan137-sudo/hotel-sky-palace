import Image from 'next/image'
import { AirVent, BedDouble, Check, Tv, Users, Wifi } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/whatsapp'

const features = [
  { icon: AirVent, label: 'Air Conditioned' },
  { icon: BedDouble, label: 'King-Size Bed' },
  { icon: Tv, label: 'Flat-Screen TV' },
  { icon: Wifi, label: 'Free Wi-Fi' },
]

const inclusions = [
  'Attached modern bathroom',
  'Daily housekeeping',
  'Complimentary drinking water',
  'Seating area with table',
  'Wardrobe and dressing mirror',
  '24-hour front desk assistance',
]

export function RoomSection() {
  const singleWhatsApp = getWhatsAppLink('Hello Hotel Sky Palace, I would like to book a Deluxe AC Room (Single Occupancy - ₹2,000/night) at your Shamshabad, Hyderabad property.')
  const doubleWhatsApp = getWhatsAppLink('Hello Hotel Sky Palace, I would like to book a Deluxe AC Room (Double Occupancy - ₹2,500/night) at your Shamshabad, Hyderabad property.')
  const generalWhatsApp = getWhatsAppLink('Hello Hotel Sky Palace, I would like to book a Deluxe AC Room at your Shamshabad, Hyderabad property.')

  return (
    <section id="room" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="mb-12 flex flex-col gap-3 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">
          Accommodation
        </p>
        <h2 className="text-balance font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl">
          Deluxe AC Room
        </h2>
        <p className="mx-auto max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Every room at Hotel Sky Palace is a spacious Deluxe AC Room finished
          with Italian marble flooring, wooden panel ceilings, and premium
          bedding &mdash; the same room, simply priced by occupancy.
        </p>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/room-3.png"
            alt="Deluxe AC Room with king-size bed, wooden ceiling, and marble flooring"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-col gap-8">
          {/* Pricing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 justify-between">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                  Single Occupancy
                </span>
                <span className="font-heading text-3xl font-bold text-primary">
                  {'\u20B92,000'}
                </span>
                <span className="text-xs text-muted-foreground">per night</span>
              </div>
              <a
                href={singleWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-md bg-primary py-2.5 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
              >
                Book Now
              </a>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-primary/40 bg-card p-6 justify-between">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                  Double Occupancy
                </span>
                <span className="font-heading text-3xl font-bold text-primary">
                  {'\u20B92,500'}
                </span>
                <span className="text-xs text-muted-foreground">per night</span>
              </div>
              <a
                href={doubleWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-md bg-primary py-2.5 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Feature icons */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-2 rounded-lg bg-secondary p-4 text-center"
              >
                <feature.icon
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <span className="text-xs text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Inclusions */}
          <ul className="grid gap-2 sm:grid-cols-2">
            {inclusions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={generalWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-md bg-primary px-8 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 shadow-md sm:w-fit"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  )
}

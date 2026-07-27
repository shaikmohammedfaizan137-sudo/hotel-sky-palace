import Image from 'next/image'
import { getWhatsAppLink } from '@/lib/whatsapp'

export function Hero() {
  const whatsappUrl = getWhatsAppLink('Hello Hotel Sky Palace, I would like to book a Deluxe AC Room at your Shamshabad, Hyderabad property.')

  return (
    <section id="top" className="relative flex min-h-svh items-center pt-16">
      <Image
        src="/images/room-1.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/75" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center md:px-6">
        <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
          <span className="font-semibold">Luxury Rooms</span>
          <span>&middot;</span>
          <span className="font-medium text-foreground">Shamshabad, Hyderabad</span>
        </div>
        <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          Hotel Sky Palace
        </h1>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          Spacious Deluxe AC Rooms with marble interiors, plush bedding, and
          warm hospitality. Comfort that feels like a palace, priced for every
          traveller.
        </p>
        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 shadow-lg flex items-center gap-2"
          >
            <span>Book Now</span>
          </a>
          <a
            href="#room"
            className="rounded-md border border-border px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View Rooms
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Rooms from{' '}
          <span className="font-semibold text-primary">
            {'\u20B92,000'}
          </span>{' '}
          per night
        </p>
      </div>
    </section>
  )
}

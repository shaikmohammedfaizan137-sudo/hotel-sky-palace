import { Mail, MapPin, Phone, Navigation } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/whatsapp'

export function ContactSection() {
  const fullAddress = "141 & 142, Plot No 140, Madhura Nagar, Shamshabad, Hyderabad, Telangana 501218"
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
  const whatsappUrl = getWhatsAppLink('Hello Hotel Sky Palace, I would like to book a room at your Shamshabad, Hyderabad property.')

  return (
    <section id="contact" className="bg-card/50 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Reservations & Location
            </p>
            <span className="text-sm font-semibold text-primary/90">
              Shamshabad, Hyderabad
            </span>
          </div>
          <h2 className="text-balance font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Book Your Stay
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Contact us directly on WhatsApp or call to reserve your Deluxe AC Room. Our front desk is open 24/7.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground shadow-xl transition-opacity hover:opacity-90"
          >
            <span>Book Now (+91 90143 33452)</span>
          </a>

          <ul className="flex flex-col gap-4 mt-2">
            <li>
              <a
                href="tel:+919014333452"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Phone Call / Contact
                  </span>
                  <span className="text-sm font-medium">+91 90143 33452</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:bookings@hotelskypalace.com"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Email
                  </span>
                  <span className="text-sm font-medium">
                    bookings@hotelskypalace.com
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-foreground transition-colors hover:text-primary group"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Address
                  </span>
                  <span className="text-sm font-medium leading-normal">
                    {fullAddress}
                  </span>
                  <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-primary group-hover:underline">
                    <Navigation className="h-3 w-3" /> Get Directions on Google Maps
                  </span>
                </span>
              </a>
            </li>
          </ul>

          <div className="mt-2 rounded-xl border border-primary/40 bg-card p-6">
            <p className="text-sm text-muted-foreground">Deluxe AC Room</p>
            <p className="mt-1 font-heading text-lg font-bold text-foreground">
              Single{' '}
              <span className="text-primary">{'\u20B92,000'}</span>
              {' \u00B7 '}
              Double <span className="text-primary">{'\u20B92,500'}</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              per night, taxes as applicable
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-foreground">
              Location Map
            </h3>
            <span className="text-xs text-primary font-medium">Shamshabad, Hyderabad</span>
          </div>
          <div className="h-[420px] w-full overflow-hidden rounded-xl border border-border shadow-lg bg-card">
            <iframe
              src="https://maps.google.com/maps?q=141%20%26%20142%2C%20Plot%20No%20140%2C%20Madhura%20Nagar%2C%20Shamshabad%2C%20Hyderabad%2C%20Telangana%20501218&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Sky Palace Map Location"
              className="h-full w-full"
            />
          </div>
          <a
            href={mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md bg-secondary py-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <MapPin className="h-4 w-4 text-primary" /> Open in Google Maps App
          </a>
        </div>
      </div>
    </section>
  )
}

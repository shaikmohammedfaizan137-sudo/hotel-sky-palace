import {
  AirVent,
  Car,
  Clock,
  Shield,
  Sparkles,
  Wifi,
} from 'lucide-react'

const amenities = [
  {
    icon: AirVent,
    title: 'Air-Conditioned Rooms',
    description:
      'Every room is fully air conditioned so you rest comfortably in any season.',
  },
  {
    icon: Wifi,
    title: 'Free High-Speed Wi-Fi',
    description:
      'Stay connected throughout the property with complimentary internet.',
  },
  {
    icon: Clock,
    title: '24-Hour Front Desk',
    description:
      'Our team is available round the clock for check-ins and assistance.',
  },
  {
    icon: Sparkles,
    title: 'Daily Housekeeping',
    description:
      'Fresh linen, spotless marble floors, and tidy rooms every single day.',
  },
  {
    icon: Car,
    title: 'Free Parking',
    description:
      'Secure on-site parking available for all our in-house guests.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description:
      'CCTV surveillance and secure access for complete peace of mind.',
  },
]

export function Amenities() {
  return (
    <section
      id="amenities"
      className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mb-12 flex flex-col gap-3 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">
          Amenities
        </p>
        <h2 className="text-balance font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl">
          Everything You Need
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {amenities.map((amenity) => (
          <div
            key={amenity.title}
            className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
          >
            <amenity.icon className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="font-heading text-base font-semibold text-foreground">
              {amenity.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {amenity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

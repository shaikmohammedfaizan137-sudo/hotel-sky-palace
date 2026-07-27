import Image from 'next/image'
import { getImageUrl } from '@/lib/utils'

const photos = [
  {
    src: getImageUrl('/images/room-1.png'),
    alt: 'Deluxe AC Room with double bed, cane chairs, and marble flooring',
    className: 'md:col-span-2',
  },
  {
    src: getImageUrl('/images/corridor.png'),
    alt: 'Marble corridor with wooden ceiling and green plants',
    className: 'md:row-span-2',
  },
  {
    src: getImageUrl('/images/room-2.png'),
    alt: 'Deluxe AC Room with decorated bed and seating area',
    className: '',
  },
  {
    src: getImageUrl('/images/room-3.png'),
    alt: 'Deluxe AC Room with king-size bed and dressing area',
    className: '',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-card/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Gallery
          </p>
          <h2 className="text-balance font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl">
            A Look Inside
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {photos.map((photo) => (
            <div
              key={photo.alt}
              className={`relative min-h-64 overflow-hidden rounded-xl ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

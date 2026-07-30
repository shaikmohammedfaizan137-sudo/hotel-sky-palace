'use client'

import { useState } from 'react'
import Image from 'next/image'
import { getImageUrl } from '@/lib/utils'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const photos = [
  {
    src: getImageUrl('/images/room-1.png'),
    alt: 'Deluxe AC Room with double bed, cane chairs, and marble flooring',
    title: 'Deluxe AC Room - Interior & Seating',
    className: 'md:col-span-2',
  },
  {
    src: getImageUrl('/images/corridor.png'),
    alt: 'Marble corridor with wooden ceiling and green plants',
    title: 'Hotel Corridor & Aesthetic Layout',
    className: 'md:row-span-2',
  },
  {
    src: getImageUrl('/images/room-2.png'),
    alt: 'Deluxe AC Room with decorated bed and seating area',
    title: 'Deluxe Suite Setup & Comfort',
    className: '',
  },
  {
    src: getImageUrl('/images/room-3.png'),
    alt: 'Deluxe AC Room with king-size bed and dressing area',
    title: 'King Bed & Dressing Vanity',
    className: '',
  },
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const prevImage = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length)
  }

  const nextImage = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % photos.length)
  }

  return (
    <section id="gallery" className="bg-card/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold">
            Gallery
          </p>
          <h2 className="text-balance font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl">
            A Look Inside Hotel Sky Palace
          </h2>
          <p className="text-xs text-muted-foreground">Click any photo to view full screen</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {photos.map((photo, index) => (
            <div
              key={photo.alt}
              onClick={() => openLightbox(index)}
              className={`group relative min-h-64 cursor-pointer overflow-hidden rounded-xl border border-border/60 ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">{photo.title}</span>
                <span className="flex items-center gap-1 text-[11px] text-primary mt-1">
                  <Maximize2 className="h-3 w-3" /> Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative max-h-[85vh] max-w-4xl w-full flex flex-col items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-white">
              {photos[selectedIndex].title} ({selectedIndex + 1} of {photos.length})
            </p>
          </div>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}

import { Amenities } from '@/components/amenities'
import { ContactSection } from '@/components/contact-section'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { RoomSection } from '@/components/room-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { MobileStickyBar } from '@/components/mobile-sticky-bar'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="pb-16 md:pb-0">
        <Hero />
        <RoomSection />
        <Gallery />
        <Amenities />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileStickyBar />
    </>
  )
}

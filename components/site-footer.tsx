import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center md:px-6">
        <Image
          src="/images/logo.png"
          alt="Hotel Sky Palace logo"
          width={64}
          height={64}
          className="h-16 w-auto max-w-[160px] object-contain"
        />
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-foreground">
          Hotel Sky Palace
        </p>
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
          Shamshabad, Hyderabad
        </p>
        <p className="max-w-md text-xs text-muted-foreground leading-relaxed">
          141 & 142, Plot No 140, Madhura Nagar, Shamshabad, Hyderabad, Telangana 501218
        </p>
        <p className="text-xs text-foreground/80 font-medium">
          Phone: <a href="tel:+919014333452" className="text-primary hover:underline">+91 90143 33452</a>
        </p>
        <p className="mt-2 text-[11px] text-muted-foreground">
          &copy; {new Date().getFullYear()} Hotel Sky Palace. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

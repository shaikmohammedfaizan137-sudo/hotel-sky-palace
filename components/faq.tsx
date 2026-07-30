'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How far is Hotel Sky Palace from Rajiv Gandhi International Airport (RGIA)?',
    answer: 'Hotel Sky Palace is located in Shamshabad, Hyderabad, approximately 10 to 15 minutes away from Rajiv Gandhi International Airport (RGIA), making it an ideal choice for airport transit and business travelers.',
  },
  {
    question: 'What are the room rates for single and double occupancy?',
    answer: 'Our spacious Deluxe AC Rooms are priced at ₹2,000 per night for Single Occupancy and ₹2,500 per night for Double Occupancy.',
  },
  {
    question: 'Is 24/7 check-in and reception available?',
    answer: 'Yes! We offer 24-hour front desk assistance and round-the-clock check-in to accommodate early or late flight schedules.',
  },
  {
    question: 'What amenities are included in the Deluxe AC Room?',
    answer: 'Every Deluxe AC Room features split air conditioning, Italian marble flooring, wooden ceiling accents, king-size bedding, flat-screen TV, high-speed Wi-Fi, attached modern bathroom, daily housekeeping, and complimentary drinking water.',
  },
  {
    question: 'How do I confirm my room reservation?',
    answer: 'You can instantly reserve your room by clicking any of our "Book Now" buttons which connect directly to our official WhatsApp helpline (+91 90143 33452) or by calling us directly.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <HelpCircle className="h-5 w-5" />
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Got Questions?
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border bg-card transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-heading text-base font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border/50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

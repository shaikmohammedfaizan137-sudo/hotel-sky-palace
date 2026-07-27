export const HOTEL_WHATSAPP_NUMBER = '919014333452'
export const HOTEL_PHONE_DISPLAY = '+91 90143 33452'

export function getWhatsAppLink(message?: string): string {
  const defaultText =
    'Hello Hotel Sky Palace, I would like to book a Deluxe AC Room at your Shamshabad, Hyderabad property.'
  const text = message ? encodeURIComponent(message) : encodeURIComponent(defaultText)
  return `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${text}`
}

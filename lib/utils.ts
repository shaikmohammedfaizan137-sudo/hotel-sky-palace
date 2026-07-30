import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(path: string): string {
  if (!path) return ''
  if (path.startsWith('http') || path.startsWith('https')) return path
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${cleanPath}`
}

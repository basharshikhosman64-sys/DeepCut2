import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number, locale: string = 'en') => {
  const currency = locale === 'fr' ? 'EUR' : 'USD';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price);
};

export const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}h ${mins > 0 ? `${mins}m` : ''}`;
  }
  return `${mins}m`;
};

'use client';

import { GenderProvider } from '@/context/GenderContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GenderProvider>{children}</GenderProvider>;
}

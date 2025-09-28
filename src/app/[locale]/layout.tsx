import { routing } from '@/i18n/routing';
import Footer from '@/sections/Footer';
import Navbar from '@/sections/Navbar';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { GenderProvider } from '../../context/GenderContext';
import '../../styles/global.css';

export const metadata: Metadata = {
  title: 'DeepCut',
  description: 'DeepCut - Modern Design Website Landing Page',
};

type Locale = 'en' | 'fr' | 'de' | 'ar' | 'russ';

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>; // ✅ make params async
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params; // ✅ await before destructuring

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className='relative font-sans bg-orange-100 antialiased'>
        <GenderProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </GenderProvider>
      </body>
    </html>
  );
}

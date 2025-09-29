import { routing } from '@/i18n/routing';
import Footer from '@/sections/Footer';
import Navbar from '@/sections/Navbar';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../../styles/global.css';
import ClientLayout from './../ClientLayout'; // ✅ import wrapper

export const metadata: Metadata = {
  title: 'DeepCut',
  description: 'DeepCut - Modern Design Website Landing Page',
};

type Locale = 'en' | 'fr' | 'de' | 'ar' | 'russ';

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>; // ✅ keep async
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className='relative font-sans antialiased'>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {/* ✅ Wrap client-only provider inside ClientLayout */}
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

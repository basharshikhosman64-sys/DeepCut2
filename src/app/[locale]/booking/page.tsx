/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useTranslations } from 'next-intl';

export default function BookingPage() {
  const t = useTranslations('BookingPage');

  return (
    <div className='py-24 sm:py-32 min-h-screen bg-dynamic'>
      <div className='mx-auto max-w-4xl px-6 lg:px-8'>
        {/* Page Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-text-blackPrimary'>
            {t('hero.title')}
          </h1>
          <p className='mt-4 text-lg text-text-blackSecondary'>
            {t('hero.description')}
          </p>
        </div>

        {/* Acuity Scheduling Embed */}
        <div className='shadow-lg rounded-2xl overflow-hidden'>
          <iframe
            src='https://app.acuityscheduling.com/schedule.php?owner=37067990&ref=embedded_csp'
            title='Schedule Appointment'
            width='100%'
            height='800'
            frameBorder='0'
            allow='payment'
          ></iframe>
          <script
            src='https://embed.acuityscheduling.com/js/embed.js'
            type='text/javascript'
          ></script>
        </div>
      </div>
    </div>
  );
}

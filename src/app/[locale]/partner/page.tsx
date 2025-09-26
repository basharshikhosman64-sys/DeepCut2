/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Button from '@/components/UI/botton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/UI/card';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function PartnersPage() {
  const tHero = useTranslations('PartnerPage.hero');
  const tBenefits = useTranslations('PartnerPage.benefits');
  const tTypes = useTranslations('PartnerPage.types');
  const tCta = useTranslations('PartnerPage.cta');

  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  const benefits = tBenefits.raw('items') as Array<any>;
  const types = tTypes.raw('items') as Array<any>;

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 py-24 sm:py-32'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              {tHero('title')}
            </h1>
            <p className='mt-6 text-lg leading-8 text-slate-300'>
              {tHero('description')}
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Button
                variant='primary'
                size='lg'
                className='bg-amber-600 hover:bg-amber-700'
              >
                {tHero('buttons.becomePartner')}
              </Button>
              <Link href={`/${currentLocale}/contact`}>
                <Button
                  variant='outline'
                  size='lg'
                  className='text-white border-white hover:bg-white hover:text-slate-900'
                >
                  {tHero('buttons.getInTouch')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-24 sm:py-32 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
              {tBenefits('title')}
            </h2>
            <p className='mt-4 text-lg leading-8 text-slate-600'>
              {tBenefits('description')}
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4'>
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-shadow'
              >
                <CardHeader>
                  <div className='mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl mb-4'>
                    {benefit.icon}
                  </div>
                  <CardTitle className='text-xl'>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-slate-600'>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className='py-24 sm:py-32 bg-slate-50'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
              {tTypes('title')}
            </h2>
            <p className='mt-4 text-lg leading-8 text-slate-600'>
              {tTypes('description')}
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {types.map((type, index) => (
              <Card
                key={index}
                className='flex flex-col justify-between hover:shadow-xl transition-all duration-300'
              >
                <div>
                  <CardHeader>
                    <CardTitle className='text-xl'>{type.title}</CardTitle>
                    <p className='text-slate-600'>{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2'>
                      {type.features.map(
                        (feature: string, featureIndex: number) => (
                          <li
                            key={featureIndex}
                            className='flex items-center text-sm text-slate-600'
                          >
                            <div className='w-2 h-2 bg-amber-600 rounded-full mr-3'></div>
                            {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </div>
                <div className='p-6 pt-0'>
                  <Button variant='outline' className='w-full'>
                    {type.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 sm:py-32 bg-amber-600'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              {tCta('title')}
            </h2>
            <p className='mt-6 text-lg leading-8 text-amber-100'>
              {tCta('description')}
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Button
                variant='secondary'
                size='lg'
                className='bg-white text-amber-600 hover:bg-slate-100'
              >
                {tCta('buttons.applyNow')}
              </Button>
              <Button
                variant='ghost'
                size='lg'
                className='text-white hover:bg-amber-700'
              >
                {tCta('buttons.downloadKit')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Button from '@/components/Button';
import NewsCard from '@/components/NewsCard';
import { formatPrice } from '@/lib/utils';
import { useMessages, useTranslations } from 'next-intl';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/UI/card';
import image1 from '/public/assets/images/pricing-1.jpg';
import image2 from '/public/assets/images/pricing-2.jpg';
import image3 from '/public/assets/images/pricing-3.jpg';

const highlightImages = [image1, image2, image3];

// Type definitions
interface Offer {
  title: string;
  description: string;
  button: string;
}

interface ServiceItem {
  name: string;
  price: number;
  description: string;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

interface Highlight {
  imageAlt: string;
  category: string;
  description: string;
  date: string;
}

interface PricingPageMessages {
  Hero: {
    title: string;
    description: string;
  };
  Highlights: Highlight[];
  Services: ServiceCategory[];
  SpecialOffers: {
    title: string;
    offers: Offer[];
  };
}

export default function PricingPage() {
  const tHero = useTranslations('PricingPage.Hero');
  const tOffers = useTranslations('PricingPage.SpecialOffers');

  // Type-safe access to messages
  const messagesTyped = useMessages() as unknown as {
    PricingPage: PricingPageMessages;
  };

  const highlights = messagesTyped.PricingPage.Highlights;
  const services = messagesTyped.PricingPage.Services;
  const offers = messagesTyped.PricingPage.SpecialOffers.offers;

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Hero */}
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl'>
            {tHero('title')}
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-600'>
            {tHero('description')}
          </p>
        </div>

        {/* Highlights */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {highlights.map((h: Highlight, index: number) => (
            <NewsCard
              key={index}
              imageSrc={highlightImages[index]}
              imageAlt={h.imageAlt}
              category={h.category}
              description={h.description}
              date={h.date}
            />
          ))}
        </div>

        {/* Services */}
        <div className='mt-20 space-y-12'>
          {services.map((category: ServiceCategory, i: number) => (
            <div key={i}>
              <h2 className='text-2xl font-bold text-slate-900 mb-6'>
                {category.category}
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {category.items.map((service: ServiceItem, j: number) => (
                  <Card key={j} className='hover:shadow-lg transition-shadow'>
                    <CardContent className='p-6'>
                      <div className='flex justify-between items-start mb-4'>
                        <h3 className='font-semibold text-lg'>
                          {service.name}
                        </h3>
                        <span className='text-2xl font-bold text-primary-500'>
                          {formatPrice(service.price)}
                        </span>
                      </div>
                      <p className='text-slate-600 mb-6'>
                        {service.description}
                      </p>
                      <Button variant='primary' fullWidth navigateTo='/booking'>
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className='mt-20'>
          <Card className='bg-primary-50 border-primary-200'>
            <CardHeader>
              <CardTitle className='text-center text-2xl text-primary-700'>
                {tOffers('title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid md:grid-cols-3 gap-6 text-center'>
                {offers.map((offer: Offer, i: number) => (
                  <div key={i} className='p-4'>
                    <h3 className='font-semibold text-primary-700 mb-2'>
                      {offer.title}
                    </h3>
                    <p className='text-primary-600 mb-4'>{offer.description}</p>
                    <Button variant='secondary' size='sm'>
                      {offer.button}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

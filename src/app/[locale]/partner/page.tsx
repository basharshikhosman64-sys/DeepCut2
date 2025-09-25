'use client';

import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import Button from '../../../components//UI/botton';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/UI/card';

const partnerBenefits = [
  {
    icon: '💰',
    title: 'Revenue Sharing',
    description:
      'Earn competitive commissions on every referral and booking through your platform.',
  },
  {
    icon: '🎯',
    title: 'Marketing Support',
    description:
      'Access our marketing materials, brand assets, and promotional campaigns.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description:
      'Track your performance with detailed analytics and reporting tools.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    description:
      'Get priority support from our partnership team whenever you need help.',
  },
];

const partnerTypes = [
  {
    title: 'Corporate Partnerships',
    description: 'Employee wellness programs and corporate grooming packages',
    features: [
      'Bulk booking discounts',
      'On-site services',
      'Corporate billing',
      'Flexible scheduling',
    ],
    cta: 'Partner with Us',
  },
  {
    title: 'Influencer Program',
    description: 'Content creators and social media influencers',
    features: [
      'Commission per referral',
      'Exclusive content',
      'Product sponsorship',
      'Event invitations',
    ],
    cta: 'Join Program',
  },
  {
    title: 'Franchise Opportunities',
    description: 'Expand our brand to new locations',
    features: [
      'Proven business model',
      'Training & support',
      'Marketing assistance',
      'Ongoing mentorship',
    ],
    cta: 'Learn More',
  },
];

export default function PartnersPage() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 py-24 sm:py-32'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Partner With BarberCo
            </h1>
            <p className='mt-6 text-lg leading-8 text-slate-300'>
              Join our network of partners and grow your business with the
              leading barbershop brand. Exclusive opportunities for the right
              partners.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Button
                variant='primary'
                size='lg'
                className='bg-amber-600 hover:bg-amber-700'
              >
                Become a Partner
                <svg
                  className='ml-2 h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Button>
              <Link href={`/${currentLocale}/contact`}>
                <Button
                  variant='outline'
                  size='lg'
                  className='text-white border-white hover:bg-white hover:text-slate-900'
                >
                  Get In Touch
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
              Why Partner With Us?
            </h2>
            <p className='mt-4 text-lg leading-8 text-slate-600'>
              Discover the benefits of joining our growing network of partners
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4'>
            {partnerBenefits.map((benefit, index) => (
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
              Partnership Opportunities
            </h2>
            <p className='mt-4 text-lg leading-8 text-slate-600'>
              Find the perfect partnership model for your business
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {partnerTypes.map((type, index) => (
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
                      {type.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className='flex items-center text-sm text-slate-600'
                        >
                          <div className='w-2 h-2 bg-amber-600 rounded-full mr-3'></div>
                          {feature}
                        </li>
                      ))}
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
              Ready to Get Started?
            </h2>
            <p className='mt-6 text-lg leading-8 text-amber-100'>
              Join our partner network today and start growing your business
              with BarberCo
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Button
                variant='secondary'
                size='lg'
                className='bg-white text-amber-600 hover:bg-slate-100'
              >
                Apply Now
              </Button>
              <Button
                variant='ghost'
                size='lg'
                className='text-white hover:bg-amber-700'
              >
                Download Partnership Kit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

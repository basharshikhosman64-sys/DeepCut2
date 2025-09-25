import Button from '@/components/Button'; // Using your custom Button
import NewsCard from '@/components/NewsCard'; // Using your NewsCard
import { formatPrice } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/UI/card';
import image1 from '/public/assets/images/pricing-1.jpg';
import image2 from '/public/assets/images/pricing-2.jpg';
import image3 from '/public/assets/images/pricing-3.jpg';

const services = [
  {
    category: 'Haircuts',
    items: [
      {
        name: 'Classic Cut',
        price: 35,
        description: 'Traditional scissor cut with styling',
      },
      {
        name: 'Modern Fade',
        price: 45,
        description: 'Precision fade with modern styling',
      },
      {
        name: 'Signature Cut',
        price: 55,
        description: 'Premium cut with full consultation',
      },
      {
        name: 'Kids Cut (12 & under)',
        price: 25,
        description: 'Special care for young gentlemen',
      },
    ],
  },
  {
    category: 'Beard Services',
    items: [
      {
        name: 'Beard Trim',
        price: 25,
        description: 'Professional shaping with hot towel',
      },
      {
        name: 'Mustache Trim',
        price: 15,
        description: 'Precision mustache maintenance',
      },
      {
        name: 'Full Beard Service',
        price: 40,
        description: 'Complete beard grooming experience',
      },
    ],
  },
  {
    category: 'Shave Services',
    items: [
      {
        name: 'Hot Towel Shave',
        price: 45,
        description: 'Traditional straight razor experience',
      },
      {
        name: 'Head Shave',
        price: 35,
        description: 'Professional scalp shave service',
      },
      {
        name: 'Royal Treatment',
        price: 65,
        description: 'Ultimate shave with premium aftercare',
      },
    ],
  },
  {
    category: 'Packages',
    items: [
      {
        name: 'The Complete Gentleman',
        price: 75,
        description: 'Cut + Beard + Hot Towel (Save $15)',
      },
      {
        name: 'Father & Son Special',
        price: 65,
        description: 'Two cuts together (Save $10)',
      },
      {
        name: 'Monthly Membership',
        price: 120,
        description: '4 visits per month (Save $20)',
      },
    ],
  },
];

const pricingHighlights = [
  {
    imageSrc: image1,
    imageAlt: 'Professional haircut service',
    category: 'Premium Services',
    description:
      'Experience our signature services with master barbers who bring years of expertise to every cut.',
    date: 'Starting at $35',
  },
  {
    imageSrc: image2,
    imageAlt: 'Traditional hot towel shave',
    category: 'Classic Treatments',
    description:
      'Indulge in traditional barbering with our hot towel shaves and beard grooming services.',
    date: 'From $25',
  },
  {
    imageSrc: image3,
    imageAlt: 'Group booking packages',
    category: 'Special Packages',
    description:
      'Save more with our exclusive packages designed for families and regular clients.',
    date: 'Save up to $20',
  },
];

export default function PricingPage() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl'>
            Transparent Pricing
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-600'>
            Quality barbering services at fair prices. No hidden fees, just
            exceptional craftsmanship.
          </p>
        </div>

        {/* Service highlights using NewsCard */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {pricingHighlights.map((highlight, index) => (
            <NewsCard
              key={index}
              imageSrc={highlight.imageSrc}
              imageAlt={highlight.imageAlt}
              category={highlight.category}
              description={highlight.description}
              date={highlight.date}
            />
          ))}
        </div>

        {/* Pricing sections */}
        <div className='mt-20 space-y-12'>
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className='text-2xl font-bold text-slate-900 mb-6'>
                {category.category}
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {category.items.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className='hover:shadow-lg transition-shadow'
                  >
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

        {/* Special offers */}
        <div className='mt-20'>
          <Card className='bg-primary-50 border-primary-200'>
            <CardHeader>
              <CardTitle className='text-center text-2xl text-primary-700'>
                Special Offers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid md:grid-cols-3 gap-6 text-center'>
                <div className='p-4'>
                  <h3 className='font-semibold text-primary-700 mb-2'>
                    Student Discount
                  </h3>
                  <p className='text-primary-600 mb-4'>
                    20% off all services with valid student ID
                  </p>
                  <Button variant='secondary' size='sm'>
                    Learn More
                  </Button>
                </div>
                <div className='p-4'>
                  <h3 className='font-semibold text-primary-700 mb-2'>
                    Senior Discount
                  </h3>
                  <p className='text-primary-600 mb-4'>
                    15% off for customers 65+ (Mon-Wed)
                  </p>
                  <Button variant='secondary' size='sm'>
                    Learn More
                  </Button>
                </div>
                <div className='p-4'>
                  <h3 className='font-semibold text-primary-700 mb-2'>
                    First Visit
                  </h3>
                  <p className='text-primary-600 mb-4'>
                    $10 off your first service with us
                  </p>
                  <Button variant='secondary' size='sm'>
                    Claim Offer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

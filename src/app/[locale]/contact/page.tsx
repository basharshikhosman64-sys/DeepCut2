'use client';

import Button from '@/components/Button'; // Using your custom Button
import NewsCard from '@/components/NewsCard'; // Using your NewsCard
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/UI/card';
import image1 from '/public/assets/images/contact-1.jpg';
import image2 from '/public/assets/images/contact-2.jpg';
import image3 from '/public/assets/images/contact-3.jpg';

const contactHighlights = [
  {
    imageSrc: image1,
    imageAlt: 'Visit our barbershop location',
    category: 'Visit Us',
    description:
      'Located in the heart of downtown, our shop offers a premium barbering experience in a classic setting.',
    date: 'Open 7 Days',
  },
  {
    imageSrc: image2,
    imageAlt: 'Call for appointments',
    category: 'Book by Phone',
    description:
      'Prefer to book over the phone? Call us directly and our team will help you schedule your appointment.',
    date: '(555) 123-4567',
  },
  {
    imageSrc: image3,
    imageAlt: 'Group bookings and events',
    category: 'Group Events',
    description:
      'Planning a wedding, bachelor party, or corporate event? We offer special group packages and services.',
    date: 'Special Rates',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-text-blackPrimary sm:text-5xl'>
            Get In Touch
          </h1>
          <p className='mt-6 text-lg leading-8 text-text-blackSecondary'>
            Have questions or want to book an appointment? We&apos;re here to
            help you look your best.
          </p>
        </div>

        {/* Contact highlights using NewsCard */}
        <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
          {contactHighlights.map((highlight, index) => (
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

        {/* Contact Form + Info */}
        <div className='mt-16 grid gap-12 lg:grid-cols-2'>
          {/* Contact Form */}
          <Card className='shadow-xl rounded-2xl border border-secondary-200'>
            <CardHeader>
              <CardTitle className='text-2xl'>Send us a Message</CardTitle>
              <p className='text-text-blackSecondary'>
                We&apos;ll respond within 24 hours
              </p>
            </CardHeader>
            <CardContent className='p-8'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid gap-4 sm:grid-cols-2'>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-text-blackPrimary'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      required
                      className='w-full rounded-xl border-2 border-secondary-200 p-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500'
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-text-blackPrimary'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      className='w-full rounded-xl border-2 border-secondary-200 p-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500'
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-sm font-medium mb-2 text-text-blackPrimary'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    className='w-full rounded-xl border-2 border-secondary-200 p-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium mb-2 text-text-blackPrimary'>
                    Subject
                  </label>
                  <select
                    name='subject'
                    required
                    className='w-full rounded-xl border-2 border-secondary-200 p-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500'
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value=''>Select a subject</option>
                    <option value='appointment'>Appointment Inquiry</option>
                    <option value='services'>Services Question</option>
                    <option value='pricing'>Pricing Information</option>
                    <option value='group'>Group Booking</option>
                    <option value='feedback'>Feedback</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium mb-2 text-text-blackPrimary'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    rows={4}
                    required
                    className='w-full rounded-xl border-2 border-secondary-200 p-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500'
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <Button variant='primary' type='submit' className='w-full'>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className='space-y-8'>
            <Card className='shadow-xl rounded-2xl border border-secondary-200'>
              <CardHeader>
                <CardTitle className='text-2xl'>Visit Our Shop</CardTitle>
              </CardHeader>
              <CardContent className='space-y-8 p-8'>
                {/* Address */}
                <div className='flex items-start space-x-4'>
                  <div className='mt-1 w-6 h-6 text-primary-500'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold text-text-blackPrimary'>
                      Address
                    </h3>
                    <p className='text-text-blackSecondary'>
                      123 Barber Street
                      <br />
                      Downtown District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className='flex items-start space-x-4'>
                  <div className='mt-1 w-6 h-6 text-primary-500'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold text-text-blackPrimary'>
                      Email
                    </h3>
                    <p className='text-text-blackSecondary'>
                      info@barberco.com
                    </p>
                    <p className='text-text-blackSecondary'>
                      bookings@barberco.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex items-start space-x-4'>
                  <div className='mt-1 w-6 h-6 text-primary-500'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold text-text-blackPrimary'>
                      Phone
                    </h3>
                    <p className='text-text-blackSecondary'>(555) 123-4567</p>
                    <p className='text-text-blackSecondary'>(555) 987-6543</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

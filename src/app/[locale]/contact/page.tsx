'use client';

import Button from '@/components/Button';
import NewsCard from '@/components/NewsCard';
import { useTranslations } from 'next-intl';
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

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const highlights = t.raw('Highlights'); // get array from JSON

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Hero */}
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold text-text-blackPrimary sm:text-5xl'>
            {t('Hero.title')}
          </h1>
          <p className='mt-6 text-lg leading-8 text-text-blackSecondary'>
            {t('Hero.description')}
          </p>
        </div>

        {/* Highlights */}
        <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
          {[image1, image2, image3].map((img, i) => (
            <NewsCard
              key={i}
              imageSrc={img}
              imageAlt={highlights[i].imageAlt}
              category={highlights[i].category}
              description={highlights[i].description}
              date={highlights[i].date}
            />
          ))}
        </div>

        {/* Contact Form + Info */}
        <div className='mt-16 grid gap-12 lg:grid-cols-2'>
          {/* Form */}
          <Card className='shadow-xl rounded-2xl border border-secondary-200'>
            <CardHeader>
              <CardTitle className='text-2xl'>{t('Form.title')}</CardTitle>
              <p className='text-text-blackSecondary'>{t('Form.subtitle')}</p>
            </CardHeader>
            <CardContent className='p-8'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Full Name + Phone */}
                <div className='grid gap-4 sm:grid-cols-2'>
                  <div>
                    <label className='block text-sm mb-2'>
                      {t('Form.fields.name')}
                    </label>
                    <input
                      type='text'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full rounded-xl border-2 border-secondary-200 p-4'
                    />
                  </div>
                  <div>
                    <label className='block text-sm mb-2'>
                      {t('Form.fields.phone')}
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className='w-full rounded-xl border-2 border-secondary-200 p-4'
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className='block text-sm mb-2'>
                    {t('Form.fields.email')}
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full rounded-xl border-2 border-secondary-200 p-4'
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className='block text-sm mb-2'>
                    {t('Form.fields.subject')}
                  </label>
                  <select
                    name='subject'
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full rounded-xl border-2 border-secondary-200 p-4'
                  >
                    <option value=''>{t('Form.selectOptions.default')}</option>
                    {Object.entries(t.raw('Form.selectOptions')).map(
                      ([key, value]) =>
                        key === 'default' ? null : (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        )
                    )}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className='block text-sm mb-2'>
                    {t('Form.fields.message')}
                  </label>
                  <textarea
                    name='message'
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full rounded-xl border-2 border-secondary-200 p-4'
                  />
                </div>

                <Button variant='primary' type='submit' className='w-full'>
                  {t('Form.button')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className='space-y-8'>
            <Card className='shadow-xl rounded-2xl border border-secondary-200'>
              <CardHeader>
                <CardTitle className='text-2xl'>
                  {t('Info.visitTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-8 p-8'>
                {/* Address */}
                <div>
                  <h3 className='font-semibold'>{t('Info.address.title')}</h3>
                  {t
                    .raw('Info.address.lines')
                    .map((line: string, i: number) => (
                      <p key={i}>{line}</p>
                    ))}
                </div>
                {/* Email */}
                <div>
                  <h3 className='font-semibold'>{t('Info.email.title')}</h3>
                  {t.raw('Info.email.lines').map((line: string, i: number) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                {/* Phone */}
                <div>
                  <h3 className='font-semibold'>{t('Info.phone.title')}</h3>
                  {t.raw('Info.phone.lines').map((line: string, i: number) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

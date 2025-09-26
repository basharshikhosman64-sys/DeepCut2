/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Button from '@/components/Button';
import { formatPrice } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/UI/card';

export default function BookingPage() {
  const t = useTranslations('BookingPage');
  const steps = t.raw('steps');
  const services = t.raw('services');
  const barbers = t.raw('barbers');
  const timeSlots = t.raw('timeSlots');

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('alerts.confirmation'));
    setStep(1);
    setSelectedService('');
    setSelectedBarber('');
    setSelectedDate('');
    setSelectedTime('');
    setCustomerInfo({ name: '', email: '', phone: '' });
  };

  const selectedServiceData = services.find(
    (s: unknown) => s.id === selectedService
  );
  const selectedBarberData = barbers.find(
    (b: unknown) => b.id === selectedBarber
  );

  return (
    <div className='py-24 sm:py-32 min-h-screen bg-background-white'>
      <div className='mx-auto max-w-4xl px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-text-blackPrimary'>
            {t('hero.title')}
          </h1>
          <p className='mt-4 text-lg text-text-blackSecondary'>
            {t('hero.description')}
          </p>
        </div>

        <Card className='shadow-lg'>
          <CardHeader>
            <div className='flex justify-between items-center'>
              <CardTitle className='text-xl'>Step {step} of 4</CardTitle>
              <div className='flex space-x-2'>
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i <= step ? 'bg-primary-500' : 'bg-secondary-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className='p-8'>
            {step === 1 && (
              <div>
                <h3 className='text-2xl font-semibold mb-8 text-text-blackPrimary'>
                  {steps.service.title}
                </h3>
                <div className='grid gap-4'>
                  {services.map((service: any) => (
                    <div
                      key={service.id}
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                        selectedService === service.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-secondary-200 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className='flex justify-between items-center'>
                        <div>
                          <h4 className='font-semibold text-lg text-text-blackPrimary'>
                            {service.name}
                          </h4>
                          <p className='text-sm text-text-blackSecondary'>
                            {service.duration} minutes
                          </p>
                        </div>
                        <span className='font-bold text-primary-500 text-xl'>
                          {formatPrice(service.price)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='mt-8'>
                  <Button
                    variant='primary'
                    fullWidth
                    disabled={!selectedService}
                    onClick={() => setStep(2)}
                  >
                    {steps.service.nextButton}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2, Step 3, Step 4 will follow same pattern, pulling all text from JSON */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

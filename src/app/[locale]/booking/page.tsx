'use client';

import Button from '@/components/Button'; // Using your custom Button
import { formatPrice } from '@/lib/utils';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/UI/card';

const services = [
  { id: '1', name: 'Classic Haircut', price: 35, duration: 30 },
  { id: '2', name: 'Modern Fade', price: 45, duration: 40 },
  { id: '3', name: 'Beard Trim', price: 25, duration: 20 },
  { id: '4', name: 'Hot Shave', price: 45, duration: 45 },
  { id: '5', name: 'The Complete Package', price: 75, duration: 60 },
];

const barbers = [
  {
    id: '1',
    name: 'Marcus Johnson',
    specialty: 'Classic Cuts & Traditional Styling',
  },
  {
    id: '2',
    name: 'David Rodriguez',
    specialty: 'Modern Styles & Precision Fades',
  },
  {
    id: '3',
    name: 'James Wilson',
    specialty: 'Straight Razor Shaves & Beard Care',
  },
];

const timeSlots = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
];

export default function BookingPage() {
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
    alert("Booking confirmed! We'll send you a confirmation email shortly.");
    // Reset form
    setStep(1);
    setSelectedService('');
    setSelectedBarber('');
    setSelectedDate('');
    setSelectedTime('');
    setCustomerInfo({ name: '', email: '', phone: '' });
  };

  const selectedServiceData = services.find(s => s.id === selectedService);
  const selectedBarberData = barbers.find(b => b.id === selectedBarber);

  return (
    <div className='py-24 sm:py-32 min-h-screen bg-background-white'>
      <div className='mx-auto max-w-4xl px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-text-blackPrimary'>
            Book Your Appointment
          </h1>
          <p className='mt-4 text-lg text-text-blackSecondary'>
            Choose your service, barber, and preferred time in just a few steps
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
                  Select a Service
                </h3>
                <div className='grid gap-4'>
                  {services.map(service => (
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
                    Next: Choose Your Barber
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className='text-2xl font-semibold mb-8 text-text-blackPrimary'>
                  Select Your Barber
                </h3>
                <div className='grid gap-4'>
                  {barbers.map(barber => (
                    <div
                      key={barber.id}
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                        selectedBarber === barber.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-secondary-200 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedBarber(barber.id)}
                    >
                      <h4 className='font-semibold text-lg text-text-blackPrimary'>
                        {barber.name}
                      </h4>
                      <p className='text-sm text-text-blackSecondary'>
                        {barber.specialty}
                      </p>
                    </div>
                  ))}
                </div>
                <div className='flex gap-4 mt-8'>
                  <Button
                    variant='secondary'
                    fullWidth
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    variant='primary'
                    fullWidth
                    disabled={!selectedBarber}
                    onClick={() => setStep(3)}
                  >
                    Next: Choose Date & Time
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className='text-2xl font-semibold mb-8 text-text-blackPrimary'>
                  Select Date & Time
                </h3>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div>
                    <label className='block text-sm font-medium mb-3 text-text-blackPrimary'>
                      Date
                    </label>
                    <input
                      type='date'
                      className='w-full p-4 border-2 border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
                      value={selectedDate}
                      onChange={e => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-3 text-text-blackPrimary'>
                      Time
                    </label>
                    <div className='grid grid-cols-2 gap-3 max-h-64 overflow-y-auto'>
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          type='button'
                          className={`p-3 text-sm border-2 rounded-lg transition-all hover:shadow-sm ${
                            selectedTime === time
                              ? 'border-primary-500 bg-primary-50 text-primary-600'
                              : 'border-secondary-200 text-text-blackSecondary hover:border-primary-300'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='flex gap-4 mt-8'>
                  <Button
                    variant='secondary'
                    fullWidth
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    variant='primary'
                    fullWidth
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep(4)}
                  >
                    Next: Confirm Details
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <form onSubmit={handleSubmit}>
                <h3 className='text-2xl font-semibold mb-8 text-text-blackPrimary'>
                  Contact Information
                </h3>
                <div className='space-y-6 mb-8'>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-text-blackPrimary'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      required
                      className='w-full p-4 border-2 border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
                      value={customerInfo.name}
                      onChange={e =>
                        setCustomerInfo({
                          ...customerInfo,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-text-blackPrimary'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      required
                      className='w-full p-4 border-2 border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
                      value={customerInfo.email}
                      onChange={e =>
                        setCustomerInfo({
                          ...customerInfo,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-text-blackPrimary'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      required
                      className='w-full p-4 border-2 border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500'
                      value={customerInfo.phone}
                      onChange={e =>
                        setCustomerInfo({
                          ...customerInfo,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Booking Summary */}
                <div className='bg-primary-50 p-6 rounded-xl mb-8 border border-primary-200'>
                  <h4 className='font-semibold mb-4 text-primary-700'>
                    Booking Summary
                  </h4>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-text-blackSecondary'>Service:</span>
                      <span className='font-medium text-text-blackPrimary'>
                        {selectedServiceData?.name}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-text-blackSecondary'>Barber:</span>
                      <span className='font-medium text-text-blackPrimary'>
                        {selectedBarberData?.name}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-text-blackSecondary'>Date:</span>
                      <span className='font-medium text-text-blackPrimary'>
                        {selectedDate}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-text-blackSecondary'>Time:</span>
                      <span className='font-medium text-text-blackPrimary'>
                        {selectedTime}
                      </span>
                    </div>
                    <div className='flex justify-between pt-2 border-t border-primary-200'>
                      <span className='font-semibold text-text-blackPrimary'>
                        Total:
                      </span>
                      <span className='font-bold text-primary-600 text-lg'>
                        {formatPrice(selectedServiceData?.price || 0)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <Button
                    variant='secondary'
                    fullWidth
                    onClick={() => setStep(3)}
                  >
                    Back
                  </Button>
                  <Button variant='primary' fullWidth type='submit'>
                    Confirm Booking
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

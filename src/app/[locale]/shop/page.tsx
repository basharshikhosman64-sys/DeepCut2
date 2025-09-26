/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Button from '@/components/UI/botton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/UI/card';
import { cn, formatPrice } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ShopPage() {
  const t = useTranslations('ShopPage');

  const categories = t.raw('categories'); // returns array
  const products = t.raw('products'); // returns array

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<string[]>([]);

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p: any) => p.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Hero */}
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl'>
            {t('hero.title')}
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-600'>
            {t('hero.description')}
          </p>
        </div>

        {/* Categories */}
        <div className='flex justify-center flex-wrap gap-2 mt-12'>
          {categories.map((category: string) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                selectedCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProducts.map((product: any) => (
            <Card
              key={product.id}
              className='hover:shadow-lg transition-shadow'
            >
              <div className='relative'>
                <div className='aspect-square bg-slate-300 rounded-t-lg'></div>
                {product.originalPrice && (
                  <span className='absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                )}
                {!product.inStock && (
                  <div className='absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center'>
                    <span className='text-white font-semibold'>
                      {t('buttons.outOfStock')}
                    </span>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className='flex justify-between items-start'>
                  <CardTitle className='text-lg'>{product.name}</CardTitle>
                  <div className='text-right'>
                    <span className='text-xl font-bold text-amber-600'>
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className='block text-sm text-slate-500 line-through'>
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
                <p className='text-slate-600 text-sm'>{product.description}</p>
                <div className='flex items-center gap-2'>
                  <div className='flex text-yellow-400'>
                    {'★'.repeat(Math.floor(product.rating))}
                  </div>
                  <span className='text-sm text-slate-500'>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  variant={product.inStock ? 'primary' : 'outline'}
                  disabled={!product.inStock}
                  className='w-full'
                  onClick={() => product.inStock && addToCart(product.id)}
                >
                  {product.inStock
                    ? t('buttons.addToCart')
                    : t('buttons.outOfStock')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart */}
        {cart.length > 0 && (
          <div className='mt-12 max-w-md mx-auto'>
            <Card className='bg-amber-50 border-amber-200'>
              <CardHeader>
                <CardTitle className='text-center text-amber-800'>
                  {t('cart.title')} ({cart.length} items)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex justify-between items-center'>
                  <span className='font-semibold'>
                    {t('cart.total')}: {formatPrice(cart.length * 25)}
                  </span>
                  <Button
                    variant='primary'
                    className='bg-amber-600 hover:bg-amber-700'
                  >
                    {t('buttons.checkout')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Featured */}
        <div className='mt-20'>
          <Card className='bg-slate-900 text-white'>
            <CardContent className='text-center p-12'>
              <h2 className='text-2xl font-bold mb-4'>{t('featured.title')}</h2>
              <p className='text-slate-300 mb-6 max-w-2xl mx-auto'>
                {t('featured.description')}
              </p>
              <div className='grid md:grid-cols-3 gap-6 text-sm'>
                {t.raw('featured.benefits').map((benefit: any, idx: number) => (
                  <div key={idx}>
                    <div className='text-2xl mb-2'>{benefit.icon}</div>
                    <h3 className='font-semibold mb-1'>{benefit.title}</h3>
                    <p className='text-slate-400'>{benefit.desc}</p>
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

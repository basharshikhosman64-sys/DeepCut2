'use client';

import { cn, formatPrice } from '@/lib/utils';
import { useState } from 'react';
import Button from '../../../components//UI/botton';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/UI/card';

const productCategories = [
  'All',
  'Hair Care',
  'Beard Care',
  'Styling',
  'Tools',
  'Gift Cards',
];

const products = [
  {
    id: '1',
    name: 'Premium Hair Pomade',
    price: 28,
    originalPrice: 35,
    category: 'Hair Care',
    description: 'Professional-grade pomade for classic styling',
    image: '/product-1.jpg',
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: '2',
    name: 'Beard Oil - Sandalwood',
    price: 22,
    category: 'Beard Care',
    description: 'Nourishing beard oil with sandalwood scent',
    image: '/product-2.jpg',
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: '3',
    name: 'Professional Hair Scissors',
    price: 120,
    category: 'Tools',
    description: 'High-quality steel scissors for precision cutting',
    image: '/product-3.jpg',
    rating: 4.7,
    reviews: 45,
    inStock: false,
  },
  {
    id: '4',
    name: 'Matte Clay Styling Paste',
    price: 24,
    category: 'Styling',
    description: 'Strong hold, matte finish styling paste',
    image: '/product-4.jpg',
    rating: 4.6,
    reviews: 156,
    inStock: true,
  },
  {
    id: '5',
    name: '$50 Gift Card',
    price: 50,
    category: 'Gift Cards',
    description: 'Perfect gift for any barbershop enthusiast',
    image: '/gift-card.jpg',
    rating: 5.0,
    reviews: 78,
    inStock: true,
  },
  {
    id: '6',
    name: 'Beard Balm - Cedar',
    price: 18,
    category: 'Beard Care',
    description: 'Styling and conditioning balm with cedar scent',
    image: '/product-6.jpg',
    rating: 4.5,
    reviews: 92,
    inStock: true,
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<string[]>([]);

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl'>
            Barbershop Store
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-600'>
            Premium grooming products and tools used by our professional barbers
          </p>
        </div>

        {/* Category filters */}
        <div className='flex justify-center flex-wrap gap-2 mt-12'>
          {productCategories.map(category => (
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

        {/* Products grid */}
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProducts.map(product => (
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
                      Out of Stock
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
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart summary (if items in cart) */}
        {cart.length > 0 && (
          <div className='mt-12 max-w-md mx-auto'>
            <Card className='bg-amber-50 border-amber-200'>
              <CardHeader>
                <CardTitle className='text-center text-amber-800'>
                  Cart ({cart.length} items)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex justify-between items-center'>
                  <span className='font-semibold'>
                    Total: {formatPrice(cart.length * 25)}{' '}
                    {/* Simplified calculation */}
                  </span>
                  <Button
                    variant='primary'
                    className='bg-amber-600 hover:bg-amber-700'
                  >
                    Checkout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Featured section */}
        <div className='mt-20'>
          <Card className='bg-slate-900 text-white'>
            <CardContent className='text-center p-12'>
              <h2 className='text-2xl font-bold mb-4'>Professional Quality</h2>
              <p className='text-slate-300 mb-6 max-w-2xl mx-auto'>
                All our products are carefully selected and tested by our master
                barbers. Get the same professional-grade tools and products we
                use in our shop.
              </p>
              <div className='grid md:grid-cols-3 gap-6 text-sm'>
                <div>
                  <div className='text-2xl mb-2'>🚚</div>
                  <h3 className='font-semibold mb-1'>Free Shipping</h3>
                  <p className='text-slate-400'>On orders over $50</p>
                </div>
                <div>
                  <div className='text-2xl mb-2'>↩️</div>
                  <h3 className='font-semibold mb-1'>Easy Returns</h3>
                  <p className='text-slate-400'>30-day return policy</p>
                </div>
                <div>
                  <div className='text-2xl mb-2'>⭐</div>
                  <h3 className='font-semibold mb-1'>Quality Guaranteed</h3>
                  <p className='text-slate-400'>Professional grade products</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

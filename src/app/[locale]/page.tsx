'use client';

import Button from '@/components/Button';
import { useGender } from '@/context/GenderContext';
import Feature from '@/sections/Feature';
import Help from '@/sections/Help';
import Hero from '@/sections/Hero';
import Mission from '@/sections/Mission';
import News from '@/sections/News';
import Partnership from '@/sections/Partnership';
import Priority from '@/sections/Priority';
import Vehicle from '@/sections/Vehicle';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AccessibilityIcon } from '../../../public/assets/icons/AccessibilityIcon';
import { ArrowRightLongIcon } from '../../../public/assets/icons/ArrowRightLongIcon';
import { MapPinIcon } from '../../../public/assets/icons/MapPinIcon';
import { PhoneWhiteIcon } from '../../../public/assets/icons/PhoneWhiteIcon';

export default function Home() {
  const { setGender } = useGender(); // context
  const [showOverlay, setShowOverlay] = useState(true); // always true on load

  const tHero = useTranslations('HomePage.Hero');
  const tFeature = useTranslations('HomePage.Feature');
  const tHelp = useTranslations('HomePage.Help');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'de';

  const handleChoice = (gender: 'male' | 'female' | 'other') => {
    setGender(gender); // only in memory
    setShowOverlay(false); // close overlay
  };

  return (
    <>
      {/* Overlay */}
      {showOverlay && (
        <div className='fixed inset-0 z-50 flex'>
          <button
            onClick={() => handleChoice('male')}
            className='flex-1 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center hover:opacity-90 transition'
          >
            Male
          </button>
          <button
            onClick={() => handleChoice('female')}
            className='flex-1 bg-pink-500 text-white text-2xl font-bold flex items-center justify-center hover:opacity-90 transition'
          >
            Female
          </button>
          <button
            onClick={() => handleChoice('other')}
            className='flex-1 bg-gray-500 text-white text-2xl font-bold flex items-center justify-center hover:opacity-90 transition'
          >
            Prefer not to say
          </button>
        </div>
      )}

      {/* Main content */}
      <div
        className={
          showOverlay ? 'blur-md pointer-events-none select-none ' : ''
        }
      >
        <Hero
          title={tHero('title')}
          description={tHero('description')}
          backgroundClass='bg-hero-pattern'
        >
          <>
            <div className='flex flex-col md:flex-row gap-3 mt-11'>
              <Button
                variant='secondary'
                icon={<MapPinIcon />}
                useDynamicColors={true}
              >
                {tHero('buttons.viewGarage')}
              </Button>
              <Link href={`/${currentLocale}/download`}>
                <Button
                  variant='primary'
                  icon={<ArrowRightLongIcon />}
                  iconPosition='right'
                  useDynamicColors={true}
                >
                  {tHero('buttons.downloadApp')}
                </Button>
              </Link>
            </div>
            <Button
              variant='secondary'
              icon={<AccessibilityIcon />}
              className='px-[10px]'
            />
          </>
        </Hero>
        <Mission />
        <Priority />
        <Vehicle />
        <Feature
          tag={tFeature('tag')}
          title={tFeature('title')}
          description={tFeature('description')}
          button={tFeature('button')}
        />
        <News />
        <Partnership />
        <Help
          title={tHelp('title')}
          description={tHelp('description')}
          backgroundClass='bg-help-pattern'
        >
          <Button
            variant='primary'
            icon={<PhoneWhiteIcon />}
            iconPosition='right'
          >
            {tHelp('button')}
          </Button>
        </Help>
      </div>
    </>
  );
}

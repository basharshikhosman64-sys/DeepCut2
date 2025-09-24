'use client';

import Button from '@/components/Button';
import Feature from '@/sections/Feature';
import Help from '@/sections/Help';
import Hero from '@/sections/Hero';
import Mission from '@/sections/Mission';
import News from '@/sections/News';
import Partnership from '@/sections/Partnership';
import Priority from '@/sections/Priority';
import Vehicle from '@/sections/Vehicle';
import Videos from '@/sections/Videos';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AccessibilityIcon } from '../../../public/assets/icons/AccessibilityIcon';
import { ArrowRightLongIcon } from '../../../public/assets/icons/ArrowRightLongIcon';
import { MapPinIcon } from '../../../public/assets/icons/MapPinIcon';
import { PhoneWhiteIcon } from '../../../public/assets/icons/PhoneWhiteIcon';

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true); // overlay active at start
  const tHero = useTranslations('HomePage.Hero');
  const tFeature = useTranslations('HomePage.Feature');
  const tHelp = useTranslations('HomePage.Help');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'id';

  // Optional: only show once (persist in localStorage)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const savedChoice = localStorage.getItem('genderChoice');
    // if (savedChoice) setShowOverlay(false);
  }, []);

  const handleChoice = (choice: string) => {
    localStorage.setItem('genderChoice', choice);
    setShowOverlay(false);
    console.log('User selected:', choice);
  };

  return (
    <>
      {/* Overlay */}
      {showOverlay && (
        <div className='fixed inset-0 z-50 flex'>
          <button
            onClick={() => handleChoice('Male')}
            className='flex-1 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center hover:opacity-90 transition'
          >
            Male
          </button>
          <button
            onClick={() => handleChoice('Female')}
            className='flex-1 bg-pink-500 text-white text-2xl font-bold flex items-center justify-center hover:opacity-90 transition'
          >
            Female
          </button>
          <button
            onClick={() => handleChoice('Prefer not to say')}
            className='flex-1 bg-gray-500 text-white text-2xl font-bold flex items-center justify-center hover:opacity-90 transition'
          >
            Prefer not to say
          </button>
        </div>
      )}

      {/* Main content (blurred while overlay is active) */}
      <div
        className={showOverlay ? 'blur-md pointer-events-none select-none' : ''}
      >
        <Hero
          title={tHero('title')}
          description={tHero('description')}
          backgroundClass='bg-hero-pattern'
        >
          <>
            <div className='flex flex-col md:flex-row gap-3 mt-11'>
              <Button variant='secondary' icon={<MapPinIcon />}>
                {tHero('buttons.viewGarage')}
              </Button>
              <Link href={`/${currentLocale}/download`}>
                <Button
                  variant='primary'
                  icon={<ArrowRightLongIcon />}
                  iconPosition='right'
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
        <Videos />
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

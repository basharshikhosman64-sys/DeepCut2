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
import { useEffect, useState } from 'react';
import { AccessibilityIcon } from '../../../public/assets/icons/AccessibilityIcon';
import { ArrowRightLongIcon } from '../../../public/assets/icons/ArrowRightLongIcon';
import { MapPinIcon } from '../../../public/assets/icons/MapPinIcon';
import { PhoneWhiteIcon } from '../../../public/assets/icons/PhoneWhiteIcon';
import { GenderSelectionOverlay } from '../../components/GenderSelectionOverlay';

export default function Home() {
  const { gender, setGender, hasChosenGender } = useGender();
  const [showOverlay, setShowOverlay] = useState(false);

  const tHero = useTranslations('HomePage.Hero');
  const tFeature = useTranslations('HomePage.Feature');
  const tHelp = useTranslations('HomePage.Help');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  // Check if user has chosen gender - FIXED: Moved to useEffect
  useEffect(() => {
    if (!hasChosenGender) {
      setShowOverlay(true);
    }
  }, [hasChosenGender]);

  const handleChoice = (selectedGender: 'male' | 'female' | 'other') => {
    setGender(selectedGender);
    setShowOverlay(false);
  };

  // Helper to get gender-specific text with fallback
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getGenderText = (baseKey: string, translationHook: any) => {
    if (gender === 'other') {
      return translationHook(baseKey);
    }

    const genderKey = `${baseKey}${
      gender.charAt(0).toUpperCase() + gender.slice(1)
    }`;

    try {
      const value = translationHook.raw(genderKey);
      return value || translationHook(baseKey);
    } catch {
      return translationHook(baseKey);
    }
  };

  return (
    <>
      {/* Gender Selection Overlay */}
      {showOverlay && <GenderSelectionOverlay onSelect={handleChoice} />}

      {/* Main Content */}
      <div
        className={`transition-all duration-500 ${
          showOverlay
            ? 'blur-md pointer-events-none select-none scale-95 opacity-50'
            : 'blur-0 scale-100 opacity-100'
        }`}
      >
        <Hero
          title={getGenderText('title', tHero)}
          description={getGenderText('description', tHero)}
          backgroundClass={
            gender === 'male'
              ? 'bg-hero-male'
              : gender === 'female'
              ? 'bg-hero-female'
              : 'bg-hero-pattern'
          }
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
          tag={getGenderText('tag', tFeature)}
          title={getGenderText('title', tFeature)}
          description={getGenderText('description', tFeature)}
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

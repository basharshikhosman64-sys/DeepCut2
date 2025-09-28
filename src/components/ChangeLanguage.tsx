'use client';

import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

interface Country {
  code: string;
  flag: string;
  value: string;
}

const countries: Country[] = [
  { code: 'EN', value: 'en', flag: '/flags/en.svg' },
  { code: 'FR', value: 'fr', flag: '/flags/fr.svg' },
  { code: 'DE', value: 'de', flag: '/flags/de.svg' },
  { code: 'RU', value: 'russ', flag: '/flags/russ.svg' },
  { code: 'AR', value: 'ar', flag: '/flags/ar.svg' },
];

export default function ChangeLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const [selected, setSelected] = React.useState<string>(
    countries.find(c => c.value === localActive)?.value || countries[0].value
  );

  const handleChange = (value: string) => {
    setSelected(value);
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${value}`);
    router.replace(newPath);
  };

  const activeCountry = countries.find(c => c.value === selected)!;

  return (
    <Select.Root value={selected} onValueChange={handleChange}>
      <Select.Trigger
        className='relative inline-flex items-center gap-2 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-md px-5 py-2 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-indigo-500'
        aria-label='Language'
      >
        <Image
          src={activeCountry.flag}
          alt={activeCountry.code}
          width={20}
          height={16}
          className='w-5 h-4 rounded-sm object-cover'
        />
        <Select.Value>
          <span className='text-white text-sm font-medium'>
            {activeCountry.code}
          </span>
        </Select.Value>
        <Select.Icon>
          <ChevronDown className='h-4 w-4 text-slate-400' />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          sideOffset={6}
          position='popper' // ensures it overlays, no layout shift
          className='absolute z-50 min-w-[120px] rounded-lg shadow-xl border border-slate-800 bg-slate-900 text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
        >
          <Select.Viewport className='p-1'>
            {countries.map(country => (
              <Select.Item
                key={country.code}
                value={country.value}
                className='relative flex items-center gap-2 px-3 py-2 rounded-md text-sm cursor-pointer select-none hover:bg-slate-800 focus:bg-slate-800 focus:outline-none'
              >
                <Image
                  src={country.flag}
                  alt={country.code}
                  width={18}
                  height={14}
                  className='w-4 h-3 rounded-sm'
                />
                <Select.ItemText>{country.code}</Select.ItemText>
                <Select.ItemIndicator className='absolute right-2'>
                  <Check className='h-4 w-4 text-indigo-400' />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

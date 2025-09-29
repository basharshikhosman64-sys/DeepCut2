// src/hooks/useTranslation.ts
'use client';

import { useEffect, useState } from 'react';

export const useTranslation = (locale: string = 'en') => {
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    fetch(`/locales/${locale}.json`)
      .then(res => res.json())
      .then(data => setTranslations(data))
      .catch(err => console.error('Translation load error:', err));
  }, [locale]);

  const t = (key: string) => {
    return key.split('.').reduce((obj, k) => obj?.[k], translations) || key;
  };

  return { t, translations };
};

'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Gender = 'male' | 'female' | 'other';

interface GenderContextType {
  gender: Gender;
  setGender: (gender: Gender) => void;
}

const GenderContext = createContext<GenderContextType | undefined>(undefined);

export const GenderProvider = ({ children }: { children: React.ReactNode }) => {
  const [gender, setGender] = useState<Gender>('other');

  useEffect(() => {
    const saved = localStorage.getItem('genderChoice') as Gender | null;
    if (saved) setGender(saved);
  }, []);

  const handleSetGender = (g: Gender) => {
    setGender(g);
    localStorage.setItem('genderChoice', g);
  };

  return (
    <GenderContext.Provider value={{ gender, setGender: handleSetGender }}>
      <div className={`gender-${gender} min-h-screen`}>{children}</div>
    </GenderContext.Provider>
  );
};

export const useGender = () => {
  const ctx = useContext(GenderContext);
  if (!ctx) throw new Error('useGender must be used inside GenderProvider');
  return ctx;
};

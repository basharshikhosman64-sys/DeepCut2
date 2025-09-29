'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Gender = 'male' | 'female' | 'other';

interface GenderContextType {
  gender: Gender;
  setGender: (gender: Gender) => void;
  hasChosenGender: boolean;
}

const GenderContext = createContext<GenderContextType | undefined>(undefined);

export const GenderProvider = ({ children }: { children: React.ReactNode }) => {
  const [gender, setGender] = useState<Gender>('other');
  const [hasChosenGender, setHasChosenGender] = useState(false);

  // Check for saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('genderChoice') as Gender | null;
    if (saved) {
      setGender(saved);
      setHasChosenGender(true);
    }
  }, []);

  const handleSetGender = (g: Gender) => {
    setGender(g);
    setHasChosenGender(true);
    localStorage.setItem('genderChoice', g);
  };

  return (
    <GenderContext.Provider
      value={{
        gender,
        setGender: handleSetGender,
        hasChosenGender,
      }}
    >
      <div
        className={`gender-${gender} min-h-screen transition-colors duration-500`}
      >
        {children}
      </div>
    </GenderContext.Provider>
  );
};

export const useGender = () => {
  const ctx = useContext(GenderContext);
  if (!ctx) throw new Error('useGender must be used inside GenderProvider');
  return ctx;
};

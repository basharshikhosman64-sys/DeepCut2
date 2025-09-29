'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface Props {
  onSelect: (gender: 'male' | 'female' | 'other') => void;
}

export const GenderSelectionOverlay = ({ onSelect }: Props) => {
  const t = useTranslations('GenderSelection');

  const options = [
    {
      gender: 'male' as const,
      bgGradient: 'from-blue-600/95 via-blue-700/95 to-blue-900/95',
      hoverGradient:
        'hover:from-blue-500/98 hover:via-blue-600/98 hover:to-blue-800/98',
      image: '/assets/images/male-choice.webp',
      accentColor: 'bg-blue-400',
      borderColor: 'border-blue-300/30',
      specification: 'Men',
    },
    {
      gender: 'female' as const,
      bgGradient: 'from-pink-600/95 via-pink-700/95 to-pink-900/95',
      hoverGradient:
        'hover:from-pink-500/98 hover:via-pink-600/98 hover:to-pink-800/98',
      image: '/assets/images/female-choice.webp',
      accentColor: 'bg-pink-400',
      borderColor: 'border-pink-300/30',
      specification: 'Women',
    },
    {
      gender: 'other' as const,
      bgGradient: 'from-gray-600/95 via-gray-700/95 to-gray-900/95',
      hoverGradient:
        'hover:from-gray-500/98 hover:via-gray-600/98 hover:to-gray-800/98',
      image: '/assets/images/other-choice.webp',
      accentColor: 'bg-gray-400',
      borderColor: 'border-gray-300/30',
      specification: 'Prefer not to say',
    },
  ];

  return (
    <div className='fixed inset-0 z-[9999] flex flex-col md:flex-row animate-in fade-in duration-500'>
      {/* Header - Optional */}
      <div className='flex flex-col top-0 left-0 right-0 p-2 md:p-3 md:absolute md:flex lg:absolute lg:flex text-center bg-black/60 backdrop-blur-md z-10 border-b border-white/10'>
        <h2 className='text-white text-lg md:text-4xl lg:text-5xl font-bold tracking-tight'>
          {'Gender Selection'}
        </h2>
        <p className='text-white/80 text-sm md:text-sm mt-2 font-light'>
          {'Please Select Below...'}
        </p>
      </div>

      {options.map((option, idx) => (
        <button
          key={option.gender}
          onClick={() => onSelect(option.gender)}
          className={`relative flex-1 overflow-hidden group transition-all duration-500 ease-out
            ${option.hoverGradient}
            hover:flex-[1.15] hover:shadow-2xl
            ${idx === 0 ? 'md:border-r border-white/10' : ''}
            ${idx === 1 ? 'md:border-r border-white/10' : ''}
          `}
          style={{
            animationDelay: `${idx * 100}ms`,
          }}
        >
          {/* Background Image */}
          <div className='absolute inset-0 transition-transform duration-700 group-hover:scale-110'>
            <Image
              src={option.image}
              alt={t(`${option.gender}.title`)}
              fill
              className='object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500'
              priority
              quality={90}
            />
          </div>

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient}
              transition-all duration-500`}
          />

          {/* Decorative pattern overlay */}
          <div
            className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                               radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Content Container */}
          <div className='relative h-full flex flex-col items-center justify-center p-8 md:p-12 text-white'>
            {/* Icon/Badge */}
            <div
              className={`w-60 h-60 md:w-60 md:h-35 lg:w-60 lg:h-45 rounded-full ${option.accentColor}
              flex items-center justify-center mb-6 md:mb-8
              transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
              shadow-2xl border-4 ${option.borderColor}`}
            >
              <span className='text-4xl md:text-5xl'>{option.gender}</span>
            </div>
            {/* Subtitle */}
            <p
              className='text-base md:text-xl lg:text-2xl text-white/90 text-center max-w-md
              font-light leading-relaxed
              transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
              transition-all duration-500 delay-100'
            >
              {option.specification}
            </p>
          </div>

          {/* Bottom Accent Line */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 md:h-2 ${option.accentColor}
            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500
            origin-left shadow-lg`}
          />

          {/* Hover Glow Effect */}
          <div
            className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            bg-gradient-to-t from-white/5 via-transparent to-transparent pointer-events-none'
          />
        </button>
      ))}
    </div>
  );
};

'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const choices = [
  {
    label: 'Male',
    route: '/male',
    bg: 'bg-primary-500',
    hover: 'hover:bg-primary-600',
  },
  {
    label: 'Female',
    route: '/female',
    bg: 'bg-pink-500',
    hover: 'hover:bg-pink-600',
  },
  {
    label: 'Prefer not to say',
    route: '/neutral',
    bg: 'bg-gray-500',
    hover: 'hover:bg-gray-600',
  },
];

export default function GenderOverlay() {
  const router = useRouter();

  const handleChoice = (choice: string, route: string) => {
    localStorage.setItem('genderChoice', choice);
    router.push(route);
  };

  return (
    <div className='fixed inset-0 z-50 grid grid-cols-1 md:grid-cols-3'>
      {choices.map(({ label, route, bg, hover }, i) => (
        <motion.button
          key={label}
          onClick={() => handleChoice(label, route)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
          className={`${bg} ${hover} text-white text-2xl md:text-3xl font-bold flex items-center justify-center transition-colors duration-300`}
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
}

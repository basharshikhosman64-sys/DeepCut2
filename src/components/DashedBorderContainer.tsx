import { ReactNode } from 'react';
import { RiScissors2Fill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

interface DashedBorderContainerProps {
  children: ReactNode;
  showTop?: boolean;
  showBottom?: boolean;
  showLeft?: boolean;
  showRight?: boolean;
  className?: string;
}

export default function DashedBorderContainer({
  children,
  showTop = true,
  showBottom = true,
  showLeft = true,
  showRight = true,
  className,
}: DashedBorderContainerProps) {
  return (
    <div
      className={twMerge(
        `relative ${
          showTop ? 'border-t border-others-santasGray border-dashed' : ''
        } ${
          showBottom ? 'border-b border-others-santasGray border-dashed' : ''
        }`
      )}
    >
      <div
        className={twMerge(
          'relative container max-w-xs md:max-w-[44rem] lg:max-w-6xl py-16',
          showLeft && 'border-l border-others-santasGray border-dashed',
          showRight && 'border-r border-others-santasGray border-dashed',
          className
        )}
      >
        {/* Bullet Icons */}
        {showTop && showLeft && (
          <div className='absolute ml-2 pt-2 z-10 -top-1 -left-1'>
            <RiScissors2Fill />
          </div>
        )}
        {showTop && showRight && (
          <div className='absolute mr-2 -top-1 -right-1 pt-2'>
            <RiScissors2Fill />
          </div>
        )}
        {showBottom && showLeft && (
          <div className='absolute ml-2 -bottom-1 -left-1 pb-2'>
            <RiScissors2Fill />
          </div>
        )}
        {showBottom && showRight && (
          <div className='absolute mr-2 -bottom-1 -right-1 pb-2'>
            <h5>
              <RiScissors2Fill />
            </h5>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

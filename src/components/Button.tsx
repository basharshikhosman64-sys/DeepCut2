'use client';
import { cva } from 'class-variance-authority';
import { useRouter } from 'next/navigation';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

// ✅ Minimal helper to merge class names
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-white shadow-sm hover:bg-primary-600 active:scale-[0.98] focus-visible:ring-primary-500',
        secondary:
          'bg-secondary-100 text-gray-900 hover:bg-secondary-200 active:scale-[0.98] focus-visible:ring-secondary-500',
        tertiary:
          'bg-tertiary-700 text-white hover:bg-tertiary-800 active:scale-[0.98] focus-visible:ring-tertiary-500',
        ghost:
          'bg-transparent text-gray-700 hover:bg-gray-100 active:scale-[0.98] focus-visible:ring-gray-300',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export default function Button(
  props: {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    navigateTo?: string;
    useDynamicColors?: boolean;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const {
    variant = 'primary',
    className,
    size,
    fullWidth,
    icon,
    children,
    iconPosition = 'left',
    navigateTo,
    onClick,
    useDynamicColors = false,
    ...otherProps
  } = props;

  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (navigateTo) {
      router.push(navigateTo);
    }
    if (onClick) {
      onClick(event);
    }
  };

  // Apply dynamic colors if requested
  let dynamicClasses = '';
  if (useDynamicColors) {
    if (variant === 'primary') {
      dynamicClasses =
        'bg-accent hover:bg-accent-hover focus-visible:ring-[var(--accent)]';
    } else if (variant === 'secondary') {
      dynamicClasses =
        'bg-accent/10 text-accent hover:bg-accent/20 focus-visible:ring-[var(--accent)]';
    } else if (variant === 'tertiary') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      dynamicClasses =
        'bg-accent text-white hover:bg-accent-hover focus-visible:ring-[var(--accent)]';
    }
  }

  return (
    <button
      className={cn(
        buttonVariants({ variant, size, fullWidth }),
        useDynamicColors &&
          variant === 'primary' &&
          'bg-accent hover:bg-accent-hover',
        useDynamicColors &&
          variant === 'secondary' &&
          'bg-accent/10 text-accent hover:bg-accent/20',
        className
      )}
      onClick={handleClick}
      {...otherProps}
    >
      {icon && iconPosition === 'left' && <span className='mr-1'>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className='ml-1'>{icon}</span>}
    </button>
  );
}

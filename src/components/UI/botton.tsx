import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-amber-600 text-white hover:bg-amber-700 focus-visible:ring-amber-600',
        secondary:
          'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900',
        outline:
          'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white',
        ghost: 'text-slate-900 hover:bg-slate-100',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        default: 'h-11 px-6',
        lg: 'h-12 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      icon,
      iconPosition = 'left',
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className='mr-2'>{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className='ml-2'>{icon}</span>
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;

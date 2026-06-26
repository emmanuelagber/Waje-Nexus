import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'green';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variants = {
  default: 'bg-white border border-neutral-100',
  bordered: 'bg-white border border-neutral-200',
  elevated: 'bg-white shadow-lg shadow-black/5 border border-neutral-100',
  green: 'bg-green-50 border border-green-100',
};

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({ children, className, variant = 'default', padding = 'md' }: CardProps) {
  return (
    <div className={cn('rounded-2xl', variants[variant], paddings[padding], className)}>
      {children}
    </div>
  );
}

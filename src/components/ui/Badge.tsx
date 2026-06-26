import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'green' | 'outline';
  icon?: ReactNode;
}

const variants = {
  default: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
  green: 'bg-green-50 text-green-700 border border-green-200',
  outline: 'bg-white text-neutral-600 border border-neutral-200 shadow-sm',
};

export function Badge({ children, className, variant = 'outline', icon }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase',
        variants[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

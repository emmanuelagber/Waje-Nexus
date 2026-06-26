import type { ReactNode } from 'react';
import { Badge } from './Badge';
import { cn } from '@/utils/cn';
import { Settings2 } from 'lucide-react';

interface SectionHeaderProps {
  badge?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  className?: string;
  badgeIcon?: ReactNode;
  headingClassName?: string;
}

export function SectionHeader({
  badge,
  heading,
  subheading,
  align = 'center',
  className,
  badgeIcon,
  headingClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {badge && (
        <div className={cn('mb-4', align === 'center' ? 'flex justify-center' : '')}>
          <Badge icon={badgeIcon ?? <Settings2 size={12} />}>{badge}</Badge>
        </div>
      )}
      <h2
        className={cn(
          'font-bold tracking-tight text-neutral-900',
          'text-3xl sm:text-4xl lg:text-5xl',
          headingClassName
        )}
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      {subheading && (
        <p className={cn(
          'mt-4 text-neutral-500 leading-relaxed',
          'text-base sm:text-lg',
          align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
        )}>
          {subheading}
        </p>
      )}
    </div>
  );
}

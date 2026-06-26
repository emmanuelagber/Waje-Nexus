import type { ReactNode } from 'react';
import { useState } from 'react';
import { cn } from '@/utils/cn';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (id: string) => void;
  children: (activeTab: string) => ReactNode;
  variant?: 'pill' | 'underline' | 'card';
}

export function Tabs({ tabs, defaultTab, onChange, children, variant = 'pill' }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id ?? '');

  const handleChange = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div>
      <div
        className={cn(
          'flex',
          variant === 'pill' && 'flex-wrap gap-2',
          variant === 'underline' && 'border-b border-neutral-200 gap-6',
          variant === 'card' && 'flex-wrap gap-2 p-1 bg-neutral-100 rounded-xl'
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleChange(tab.id)}
            className={cn(
              'transition-all duration-150 font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700',
              variant === 'pill' && cn(
                'px-4 py-2 rounded-full border',
                active === tab.id
                  ? 'bg-green-700 text-white border-green-700'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:text-neutral-900'
              ),
              variant === 'underline' && cn(
                'pb-3 border-b-2 -mb-px',
                active === tab.id
                  ? 'text-green-700 border-green-700'
                  : 'text-neutral-500 border-transparent hover:text-neutral-700'
              ),
              variant === 'card' && cn(
                'px-4 py-2 rounded-lg',
                active === tab.id
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              )
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {children(active)}
      </div>
    </div>
  );
}

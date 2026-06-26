import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className={cn('divide-y divide-neutral-100', className)}>
      {items.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="flex items-center justify-between w-full py-5 text-left focus-visible:outline-none"
            aria-expanded={open === item.id}
          >
            <span className="font-semibold text-neutral-900 text-base">{item.question}</span>
            <ChevronDown
              size={20}
              className={cn(
                'text-neutral-400 shrink-0 ml-4 transition-transform duration-200',
                open === item.id && 'rotate-180'
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-neutral-600 leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

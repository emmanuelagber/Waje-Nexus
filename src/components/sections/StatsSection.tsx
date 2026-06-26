import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import type { StatItem } from '@/types';

const STATS: StatItem[] = [
  {
    value: '43%',
    label: 'Reduction in Average Handle Time',
    description: 'One unified view of every customer interaction means agents stop switching tabs and start resolving faster.',
  },
  {
    value: '3.2×',
    label: 'Agent Productivity Increase',
    description: 'Same team. Same hours. Three times the output because the platform does the heavy lifting.',
  },
  {
    value: '60%',
    label: 'Tier-1 Tickets Auto-Resolved by AI',
    description: 'Six out of every ten tickets resolved automatically, at any hour, across every channel. No extra headcount required.',
  },
  {
    value: '98.9%',
    label: 'Platform Uptime SLA',
    description: 'Built for the demands of enterprise scale — reliable infrastructure your entire customer operation can depend on, around the clock.',
  },
];

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">These could be your numbers.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-neutral-100 bg-white"
            >
              <p className="text-5xl font-extrabold text-neutral-900 mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-neutral-800 mb-2">{stat.label}</p>
              <p className="text-sm text-neutral-500 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

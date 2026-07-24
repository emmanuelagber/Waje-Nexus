import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import aivector from '@/assets/Vector-ai.png';
import whyAiImg from '@/assets/image 5 (2).png';

const REASONS = [
  {
    title: 'Faster First Response',
    desc: 'Our AI Agent routes and contextualizes interactions instantly, cutting the time between arrival and first agent contact.',
  },
  {
    title: 'Higher First Contact Resolution',
    desc: 'Your agents are armed with full context and live recommendations resolve more cases without escalation.',
  },
  {
    title: 'Reduced Manual Workload',
    desc: 'Automated workflows and chatbot deflection free agents to focus on complex, high-value interactions.',
  },
  {
    title: 'Platform Native',
    desc: 'WajeNexus AI is built into the platform at every level. It is not an add-on. It is not a tier upgrade. It is simply how WajeNexus works.',
  },
];

export function BestAgentSection() {
  const [activeReason, setActiveReason] = useState(0);

  return (
    <section className="py-16 bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4 shadow-sm">
            <img src={aivector} alt="" /> WHY WAJENEXUS AI
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Intelligence that makes every agent your best agent.
          </h2>
          <p className="mt-3 text-neutral-500 max-w-xl mx-auto">
            The gap between your highest-performing agent and your average one isn't talent — it's information and timing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {REASONS.map((r, i) => (
              <button
                key={r.title}
                onClick={() => setActiveReason(i)}
                className="w-full text-left py-6 border-b border-neutral-200 last:border-0"
              >
                <h3
                  className={`text-lg font-bold mb-1.5 transition-colors ${
                    activeReason === i ? 'text-neutral-900' : 'text-neutral-400'
                  }`}
                >
                  {r.title}
                </h3>
                <p
                  className={`leading-relaxed transition-colors ${
                    activeReason === i ? 'text-neutral-600' : 'text-neutral-400'
                  }`}
                >
                  {r.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="rounded-2xl bg-white border border-neutral-100 aspect-square flex items-center justify-center shadow-sm p-8">
            <img src={whyAiImg} alt="WajeNexus AI intelligence" className="w-full h-auto max-h-full object-contain" />
          </div>
        </div>
      </Container>
    </section>
  );
}

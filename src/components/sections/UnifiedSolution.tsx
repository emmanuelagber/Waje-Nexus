import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import hub from '@/assets/centerintegration.png';

const LEFT_ITEMS = [
  { title: 'Omnichannel Contact Center', desc: 'Different communication channels, one interface' },
  { title: 'Sales Pipeline Management', desc: 'Turn more leads into customers' },
  { title: 'Workforce Management', desc: 'Build high-performing teams' },
  { title: 'Customer Satisfaction (CSAT)', desc: 'Measure every customer experience' },
  { title: 'Reporting & Analytics', desc: 'Turn data into action' },
];

const RIGHT_ITEMS = [
  { title: 'Marketing Automation', desc: 'Engage customers at the right time' },
  { title: 'Knowledge Base', desc: 'Make self-service effortless' },
  { title: 'SLA Management', desc: 'Make answers a service commitment' },
  { title: 'Case Management', desc: 'Resolve issues with confidence' },
];

function SolutionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 border border-neutral-200 bg-white px-4 py-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <p className="text-xs text-neutral-500 leading-snug">{desc}</p>
      </div>
      <span className="ml-auto shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
        <Check size={12} strokeWidth={3} className="text-green-700" />
      </span>
    </div>
  );
}

export function UnifiedSolution() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">One Unified Solution</h2>
            <p className="text-neutral-500 leading-relaxed">
              Your customers don't experience your business in silos — your technology shouldn't either. WajeNexus
              unifies customer data, conversations, AI, and workflows into a single platform, enabling every team to
              deliver faster, smarter, and more connected customer experiences.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 self-start md:self-auto px-6 py-3 text-sm font-semibold text-white bg-neutral-900 rounded-sm hover:bg-neutral-800 transition-colors"
          >
            Book a Demo
          </Link>
        </div>

        {/* Hub diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {LEFT_ITEMS.map((item) => (
              <SolutionCard key={item.title} {...item} />
            ))}
          </div>

          {/* Center hub */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-44 h-44 rounded-full bg-green-100/50 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-green-200/50 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-green-300/40 flex items-center justify-center">
                  <img src={hub} alt="WajeNexus unified platform" className="w-14 h-14 object-contain drop-shadow" />
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 order-3">
            {RIGHT_ITEMS.map((item) => (
              <SolutionCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

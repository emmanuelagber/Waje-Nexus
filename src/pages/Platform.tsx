import { motion } from 'framer-motion';
import { CircleDot } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import type { PlatformFeature } from '@/types';

const FEATURES: PlatformFeature[] = [
  {
    tag: 'OMNICHANNEL CONTACT CENTRE + CSAT',
    heading: 'Serve customers wherever they are. Handle everything from one screen.',
    description:
      'Calls, emails, WhatsApp messages, social DMs, and live chats all land in a single agent workspace. Powered by AI, WajeNexus intelligently routes interactions to agents and surfaces the full customer history before your agent says a word. Agents no longer need to ask "Can you remind me what we spoke about?" they already know.',
    bullets: [
      'Intelligent omnichannel routing across all channels',
      'Persistent conversation history synced across channels',
      'Built-in CSAT scoring after every interaction',
      'Inbound and outbound call management with agent leaderboard',
    ],
    imageRight: true,
  },
  {
    tag: 'CASE & TICKET MANAGEMENT',
    heading: 'Capture every issue. Resolve it faster. Leave nothing unaccounted for.',
    description:
      'Agentic AI captures customer issues the moment they arrive — regardless of channel — and creates structured tickets with full context attached. From there, every case follows a clear path: assigned, tracked, escalated when needed, and closed with a complete audit trail. No ticket falls through the cracks. No issue goes undocumented. And every SLA commitment is visible in real time.',
    bullets: [
      'Automatic ticket creation from any channel interaction',
      'SLA tracking with real-time compliance dashboards',
      'End-to-end audit trail for every case',
      'Escalation workflows with multi-agent collaboration',
    ],
    imageRight: false,
  },
  {
    tag: 'SALES PIPELINE MANAGEMENT',
    heading: 'Stop guessing where your deals are. Start closing them.',
    description:
      'We give your sales teams a clear, visual view of every opportunity from first contact to signed contract. Track deal stages, forecast revenue with confidence, and let AI highlight which prospects deserve your attention today. Real-time insights remove the guesswork. Automation removes the busywork. What\'s left is pure selling.',
    bullets: [
      'Visual pipeline with drag-and-drop deal management',
      'Weighted opportunity value tracking in Naira',
      'Territory and category-based lead segmentation',
      'Integrated with contact history for full customer context',
    ],
    imageRight: true,
  },
  {
    tag: 'CAMPAIGNS & MARKETING AUTOMATION',
    heading: 'Launch campaigns that actually convert.',
    description:
      'Our campaign engine connects your marketing and CRM data, so you\'re not blasting but you\'re targeting. AI-powered insights score your leads, predict deal outcomes, and tell your team exactly where to focus. Run bulk email campaigns, track open rates and conversions, and watch your pipeline fill with warm, nurtured prospects.',
    bullets: [
      'Bulk email campaign creation and scheduling',
      'Real-time campaign performance tracking',
      'Trigger-based campaign automation (e.g., birthday, renewal, onboarding)',
      'Seamless handoff from marketing leads to sales pipeline',
    ],
    imageRight: false,
  },
  {
    tag: 'WORKFORCE MANAGEMENT',
    heading: 'Always staffed. Never overstretched.',
    description:
      'Ensure your contact center team is always in the right place at the right time. WajeNexus forecasts peak periods using AI-driven demand modelling, then helps you build schedules, manage shift swaps, approve leave, and monitor attendance all from one intuitive calendar interface. For supervisors managing growing teams, it\'s the difference between reactive firefighting and confident planning.',
    bullets: [
      'AI-driven demand forecasting and shift planning',
      'Attendance overview with active shift tracking',
      'Leave and sick day request management with approval workflows',
      'Shift swap requests and peer-to-peer schedule coordination',
      'Configurable work rules — max hours, rest periods, fatigue policies',
    ],
    imageRight: true,
  },
  {
    tag: 'REPORTING, ANALYTICS & INSIGHTS',
    heading: 'See everything. Know what it means. Act on it.',
    description:
      'Turn every customer interaction into a source of intelligence. AI-driven analytics surface patterns, measure agent performance, track CSAT and FCR, and give supervisors and executives the real-time visibility they need to make decisions with confidence — not guesswork.',
    bullets: [
      'Real-time CSAT and First Contact Resolution (FCR) dashboards',
      'Average handle time, call volume, and escalation tracking',
      'Agent performance leaderboards with drill-down views',
      'Exportable reports for executive and compliance audiences',
    ],
    imageRight: false,
  },
];

function FeatureBlock({ feature, index }: { feature: PlatformFeature; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-start py-16 border-b border-neutral-100 last:border-0`}
    >
      {/* Text */}
      <div className="flex-1">
        <p className="text-xs font-bold tracking-widest text-green-700 uppercase mb-4">{feature.tag}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 leading-tight">{feature.heading}</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">{feature.description}</p>
        <ul className="space-y-3">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-neutral-700">
              <CircleDot size={16} className="text-green-700 mt-0.5 shrink-0" />
              <span className="font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual placeholder */}
      <div className="flex-1 w-full">
        <div className="rounded-2xl bg-neutral-50 border border-neutral-100 aspect-4/3 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="8" width="24" height="16" rx="2" stroke="#04A259" strokeWidth="2"/>
                <path d="M4 12h24" stroke="#04A259" strokeWidth="2"/>
                <rect x="8" y="16" width="6" height="4" rx="1" fill="#04A259" opacity="0.4"/>
                <rect x="18" y="16" width="6" height="4" rx="1" fill="#04A259" opacity="0.4"/>
              </svg>
            </div>
            <p className="text-sm text-neutral-400">{feature.tag}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EnterpriseSection() {
  const items = [
    {
      title: 'Security & Compliance',
      desc: 'Role-based access control, end-to-end encryption, and audit-ready reporting keep your data protected and your regulators satisfied.',
    },
    {
      title: 'Customization & Configuration',
      desc: 'Tailor dashboards, workflows, pipelines, and data fields to match your exact processes — without writing a single line of code.',
    },
    {
      title: 'Customer Self-Service Portal',
      desc: 'Give customers the ability to find answers, log requests, and track their tickets 24/7 supported by AI chatbots that handle the most common queries automatically.',
    },
    {
      title: 'AI-Powered Quality & Compliance Monitoring',
      desc: 'Monitor interaction quality automatically. Surface coaching opportunities. Ensure your team consistently meets the service standards your brand promises.',
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4 shadow-sm">
            <span>✦</span> ADVANCED FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Built for Enterprise</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            WajeNexus is built to meet the security, compliance, and operational complexity demands of large organizations
            with the flexibility and local adaptability that Nigeria and African markets require.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-100 rounded-2xl overflow-hidden">
          {items.map((item) => (
            <div key={item.title} className="bg-white p-8">
              <h3 className="font-bold text-neutral-900 mb-3">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Platform() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-4">
        <Container size="md">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6 shadow-sm">
              <span>✦</span> THE WAJENEXUS PLATFORM
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
              One Platform.
              <br />
              Every Channel.
              <br />
              <span className="text-green-700">Zero Compromise.</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
              An all-in-one CRM and Contact Centre platform built for African enterprises unifying every customer
              touchpoint into a single, intelligent workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="px-7 py-3.5 text-base font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                to="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium text-neutral-700 border border-neutral-200 bg-white rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <Play size={15} className="fill-current" />
                Watch 2-min Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature blocks */}
      <section className="py-8">
        <Container>
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase shadow-sm">
              <span>✦</span> PRODUCT FEATURES
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-neutral-900">
              Built for every team that touches the customer.
            </h2>
            <p className="mt-3 text-neutral-500 max-w-2xl mx-auto">
              One platform, engineered to give every role from contact center agents to C-suite decision-makers exactly
              what they need to perform.
            </p>
          </div>
          {FEATURES.map((feature, i) => (
            <FeatureBlock key={feature.tag} feature={feature} index={i} />
          ))}
        </Container>
      </section>

      <EnterpriseSection />
      <CTABanner
        heading="Ready to Transform your Customer Operations?"
        primaryCTA={{ label: 'Start Free Trial', href: '/contact' }}
        secondaryCTA={{ label: 'Watch 2-min Demo', href: '#' }}
      />
    </>
  );
}

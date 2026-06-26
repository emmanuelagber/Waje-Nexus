import { useState } from 'react';
import { Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

const PLANS = [
  {
    name: 'Starter',
    price: { monthly: '₦150,000', annual: '₦120,000' },
    description: 'For small teams getting started with a unified customer workspace.',
    features: [
      'Up to 10 agents',
      'Omnichannel inbox (WhatsApp, Email, SMS)',
      'Basic ticket management',
      'Standard reporting dashboard',
      'AI chatbot (up to 500 conversations/mo)',
      'Email support',
      'Standard onboarding',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: { monthly: '₦350,000', annual: '₦280,000' },
    description: 'For growing teams that need AI-powered support and deeper analytics.',
    features: [
      'Up to 50 agents',
      'All Starter features',
      'Inbound & outbound calling (VoIP)',
      'Advanced AI routing & triage',
      'Sales pipeline CRM',
      'Campaign automation (email + WhatsApp)',
      'Workforce scheduling',
      'CSAT & FCR dashboards',
      'Priority support + dedicated CSM',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', annual: 'Custom' },
    description: 'For large organizations with complex requirements and compliance needs.',
    features: [
      'Unlimited agents',
      'All Growth features',
      'Custom SLA & uptime guarantees',
      'Dedicated infrastructure options',
      'Advanced security & audit logging',
      'Custom API integrations',
      'AI-powered quality monitoring',
      'Executive reporting suite',
      '24/7 in-house support + SLA',
      'White-glove onboarding',
    ],
    cta: 'Talk to Sales',
    highlighted: false,
  },
];

const FAQ = [
  {
    id: '1',
    question: 'Is there a free trial?',
    answer:
      'Yes — all plans include a 14-day free trial with full access to the features in your chosen tier. No credit card required to start.',
  },
  {
    id: '2',
    question: 'Are there setup or onboarding fees?',
    answer:
      'No. Setup, installation, and onboarding training are included at no additional cost across all plans. We get you live.',
  },
  {
    id: '3',
    question: 'Can I change plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.',
  },
  {
    id: '4',
    question: 'How does per-agent pricing work?',
    answer:
      'You pay for active named agents on your account. Supervisors and admins are included at no extra cost. You can add or remove agent seats at any time.',
  },
  {
    id: '5',
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, card payments, and direct debit for Nigerian businesses. Enterprise customers can negotiate custom payment terms.',
  },
  {
    id: '6',
    question: 'Is pricing in Naira?',
    answer:
      'Yes. All pricing for Nigerian customers is in Naira (₦) to protect you from exchange rate volatility — one of the key reasons African businesses choose WajeNexus over global alternatives.',
  },
];

function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="py-16">
      <Container size="md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-neutral-500">Everything you need to know about WajeNexus pricing.</p>
        </div>
        <div className="divide-y divide-neutral-100 border border-neutral-100 rounded-2xl overflow-hidden">
          {FAQ.map((item) => (
            <div key={item.id} className="bg-white">
              <button
                onClick={() => setOpen(open === item.id ? null : item.id)}
                className="flex items-center justify-between w-full px-6 py-5 text-left"
              >
                <span className="font-semibold text-neutral-900">{item.question}</span>
                <span
                  className={cn(
                    'text-neutral-400 text-xl transition-transform duration-200',
                    open === item.id && 'rotate-45'
                  )}
                >
                  +
                </span>
              </button>
              {open === item.id && (
                <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-8">
        <Container size="md">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6 shadow-sm">
              <span>✦</span> PRICING
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-4">
              Simple pricing.<br />
              <span className="text-green-700">No hidden fees.</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-6 max-w-xl mx-auto">
              All plans include free setup, training, and onboarding. Pay in Naira and never worry about exchange rate
              volatility.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 p-1 bg-neutral-100 rounded-xl mb-2">
              <button
                onClick={() => setAnnual(false)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  !annual ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  annual ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500'
                )}
              >
                Annual
              </button>
            </div>
            {annual && (
              <p className="text-xs text-green-700 font-semibold mt-1">Save ~20% with annual billing</p>
            )}
          </div>
        </Container>
      </section>

      {/* Pricing cards */}
      <section className="py-4 pb-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  'rounded-2xl border p-7 flex flex-col',
                  plan.highlighted
                    ? 'bg-neutral-900 border-neutral-900 shadow-xl shadow-neutral-900/20'
                    : 'bg-white border-neutral-100'
                )}
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3
                      className={cn(
                        'font-bold text-lg',
                        plan.highlighted ? 'text-white' : 'text-neutral-900'
                      )}
                    >
                      {plan.name}
                    </h3>
                    {plan.highlighted && (
                      <span className="px-2.5 py-1 text-xs font-semibold bg-green-700 text-white rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      'text-sm mb-4',
                      plan.highlighted ? 'text-neutral-400' : 'text-neutral-500'
                    )}
                  >
                    {plan.description}
                  </p>
                  <p
                    className={cn(
                      'text-4xl font-extrabold',
                      plan.highlighted ? 'text-white' : 'text-neutral-900'
                    )}
                  >
                    {annual ? plan.price.annual : plan.price.monthly}
                    {plan.price.monthly !== 'Custom' && (
                      <span
                        className={cn(
                          'text-base font-normal ml-1',
                          plan.highlighted ? 'text-neutral-400' : 'text-neutral-400'
                        )}
                      >
                        /mo
                      </span>
                    )}
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={15}
                        className={cn(
                          'mt-0.5 shrink-0',
                          plan.highlighted ? 'text-green-400' : 'text-green-700'
                        )}
                      />
                      <span className={plan.highlighted ? 'text-neutral-300' : 'text-neutral-600'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={cn(
                    'block text-center py-3 text-sm font-semibold rounded-xl transition-colors',
                    plan.highlighted
                      ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  )}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection />
      <CTABanner
        heading="Still have questions about pricing?"
        subheading="Talk to our team. We'll walk you through the right plan for your business with no pressure and no surprises."
        primaryCTA={{ label: 'Talk to Sales', href: '/contact' }}
        secondaryCTA={{ label: 'Book a Demo', href: '/contact' }}
      />
    </>
  );
}

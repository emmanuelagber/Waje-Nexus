import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Container } from '@/components/layout/Container';

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function CTABanner({
  heading = 'Ready to Transform your Customer Operations?',
  subheading = 'One platform to replace every disconnected tool your team is working around, and the local support to make it stick.',
  primaryCTA = { label: 'Start Free Trial', href: '/contact' },
  secondaryCTA = { label: 'Watch 2-min Demo', href: '#' },
}: CTABannerProps) {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="relative overflow-hidden bg-[#FEF2EE] rounded-3xl px-8 py-10 sm:px-12 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">{heading}</h2>
            <p className="text-neutral-600 leading-relaxed">{subheading}</p>
          </div>

          {/* Actions + decorative */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to={primaryCTA.href}
              className="px-6 py-3 text-sm font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors"
            >
              {primaryCTA.label}
            </Link>
            <Link
              to={secondaryCTA.href}
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-neutral-700 border border-neutral-200 bg-white rounded-xl hover:bg-neutral-50 transition-colors"
            >
              <Play size={14} className="fill-current" />
              {secondaryCTA.label}
            </Link>
          </div>

          {/* Decorative blob */}
          <div className="absolute -right-12 -bottom-8 w-52 h-52 opacity-20 pointer-events-none select-none hidden lg:block">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#E8392A" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-15.9,88.5,-0.4C87,15.1,81.4,30.2,73.4,43.6C65.4,57,55,68.7,42.2,76.5C29.4,84.3,14.7,88.2,-0.6,89.1C-15.9,90,-31.8,87.8,-45.7,80.8C-59.6,73.8,-71.5,62,-78.6,47.8C-85.7,33.6,-88,17,-88.2,0.3C-88.4,-16.4,-86.5,-32.8,-79.3,-46.9C-72.1,-61,-59.6,-72.8,-45.3,-79.7C-31,-86.6,-15.5,-88.6,-0.1,-88.5C15.3,-88.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)"/>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}

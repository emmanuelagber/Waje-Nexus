import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { UnifiedSolution } from "@/components/sections/UnifiedSolution";
import { IntelligenceLayer } from "@/components/sections/IntelligenceLayer";
import { BestAgentSection } from "@/components/sections/BestAgentSection";
import heroDashboard from "@/assets/heroposter.png";
import aiPng from "@/assets/Group.png";
import vector from "@/assets/Vector.png";
import omnichannelImg from "@/assets/omnichannel.png";
import aiAgentImg from "@/assets/aigent.png";
import salesPipelineImg from "@/assets/salespipeline.png";
import analyticsImg from "@/assets/analytics.png";
import automationEngineImg from "@/assets/automationEngine.png";

/* Free Pexels stock clip (direct CDN file — the page URL won't play in <video>).
   NOTE: this is the 4K source; swap for the real product demo (or a lighter file) when ready. */
const HERO_VIDEO_URL =
  "https://videos.pexels.com/video-files/7304313/7304313-uhd_4096_1974_30fps.mp4";

/* ── Hero ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative pt-12 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6 shadow-sm">
            <img src={aiPng} alt="AI" className="text-green-700" />
            AI-POWERED CRM &amp; CONTACT CENTER
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
            The Operating System for Modern{" "}
            <span className="text-green-700"> Customer Relationships.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            An all-in-one omnichannel CRM and contact center platform that
            enables businesses to deliver fast, seamless, and consistent
            customer experiences across every channel.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <Link
              to="/contact"
              className="px-7 py-3.5 text-base font-semibold text-white bg-neutral-900 rounded-sm hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Book a Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium text-neutral-700 border border-neutral-200 bg-white rounded-sm hover:bg-neutral-50 transition-colors"
            >
              Talk to Our Team
            </Link>
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 text-[14px] text-[#3C3B3B]">
            <span className="text-yellow-400 text-[18px]">★★★★★</span>
            <span>Trusted by Enterprise Teams</span>
          </div>
        </motion.div>

        {/* Dashboard screenshot */}
        <div className="bg-[#F4FBF1] rounded-sm py-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 relative "
          >
            <div className="mx-auto max-w-5xl relative">
              {/* Glowing background */}
              <div className="absolute inset-0 -top-10 rounded-3xl bg-green-50 blur-3xl opacity-50 pointer-events-none" />
              <div className="relative rounded-2xl border-4 border-black shadow-2xl shadow-neutral-200/60 overflow-hidden bg-black">
                <video
                  src={HERO_VIDEO_URL}
                  poster={heroDashboard}
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Feature Grid (Home Overview) ──────────────────────────────── */
function FeatureOverview() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-[#F7F7F7] scroll-mt-24">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-[#000] uppercase mb-4 shadow-sm">
            <img src={vector} alt="vector png" /> PRODUCT FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Everything your revenue and support teams need.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:items-stretch">
          {/* ── Left column: Omnichannel + Analytics ── */}
          <div className="flex flex-col gap-4">
            {/* Omnichannel Inbox */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col rounded-2xl border border-neutral-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-2">
                  Omnichannel Inbox
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Voice, WhatsApp, Email, and Web Chat in one unified
                  queue. Your agents never miss a conversation.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-center px-4 pb-4">
                <img
                  src={omnichannelImg}
                  alt="Omnichannel channels"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Real-Time Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="flex-1 flex flex-col rounded-2xl border border-neutral-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-2">
                  Real-Time Analytics
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Live agent performance, SLA tracking, CSAT scores, and revenue
                  attribution — on one dashboard, in real time.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-center px-4 pb-4">
                <img
                  src={analyticsImg}
                  alt="Analytics chart"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Middle column: AI Agents + Automation Engine ── */}
          <div className="flex flex-col gap-4">
            {/* AI Agents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="flex-1 flex flex-col rounded-2xl border border-neutral-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-2">AI Agents</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Deploy intelligent bots that resolve 60% of tier-1 tickets
                  automatically, 24/7.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-center px-4 pb-4">
                <img
                  src={aiAgentImg}
                  alt="AI Agent workflow"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Automation Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="flex-1 flex flex-col rounded-2xl border border-neutral-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-2">
                  Automation Engine
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Build powerful cross-channel workflows with a drag-and-drop
                  builder. No code. No IT tickets. Just results.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-center px-4 pb-4">
                <img
                  src={automationEngineImg}
                  alt="Automation Engine workflow"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Right column: Sales Pipeline CRM (full height) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col rounded-2xl border border-neutral-100 bg-white shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <h3 className="font-bold text-neutral-900 mb-2">
                Sales Pipeline CRM
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Visual deal pipeline with AI-powered lead scoring and
                next-best-action recommendations from prospect to close.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center px-6 pb-6">
              <img
                src={salesPipelineImg}
                alt="Sales Pipeline funnel"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ── Home Page ──────────────────────────────────────────────────── */
export function Home() {
  return (
    <>
      <HeroSection />
      <UnifiedSolution />
      <FeatureOverview />
      <IntelligenceLayer />
      <BestAgentSection />
      <StatsSection />
      <div className="bg-[#F7F7F7]">
        <CTABanner />
      </div>
    </>
  );
}

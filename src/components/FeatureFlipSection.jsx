import React, { useMemo, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Zap, Globe, Lock, BarChart3, Shield, Link2 } from 'lucide-react';

const stepsFeatures = [
  {
    title: 'Ultra‑low latency',
    desc: 'Optimized routing and queueing keep execution blazing fast across brokers.',
    icon: Zap,
    accent: 'from-cyan-400/20 to-fuchsia-400/20',
  },
  {
    title: 'Granular risk',
    desc: 'Per‑account limits, max drawdown, and slippage bounds baked in.',
    icon: Lock,
    accent: 'from-fuchsia-400/20 to-cyan-400/20',
  },
  {
    title: 'Live analytics',
    desc: 'Real‑time PnL, exposure, and strategy performance dashboards.',
    icon: BarChart3,
    accent: 'from-cyan-400/20 to-fuchsia-400/20',
  },
  {
    title: 'Global connectivity',
    desc: 'FIX, WebSocket, and resilient routes for global markets.',
    icon: Globe,
    accent: 'from-fuchsia-400/20 to-cyan-400/20',
  },
];

const stepsPlatforms = [
  { title: 'MT5', desc: 'Native bridge with symbol normalization and risk sync.', icon: Link2 },
  { title: 'Sterling', desc: 'Low‑latency equities and options route support.', icon: Link2 },
  { title: 'Tradejini', desc: 'Fast OMS connectivity for Indian markets.', icon: Link2 },
  { title: 'Safeguards', desc: 'Account‑level guardrails, circuit breakers and limits.', icon: Shield },
];

const StepSentinel = ({ onView }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6, margin: '0px 0px -30% 0px' });
  useEffect(() => {
    if (inView) onView?.();
  }, [inView, onView]);
  return <div ref={ref} className="h-[70vh] w-full" />;
};

const FlipCard = ({ item, keyId }) => {
  const Icon = item.icon;
  return (
    <motion.div
      key={keyId}
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-white/90 backdrop-blur-2xl shadow-2xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute -inset-24 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <div className={`mb-4 inline-flex items-center gap-3 rounded-xl bg-gradient-to-br ${item.accent ?? 'from-cyan-400/20 to-fuchsia-400/20'} p-2 ring-1 ring-white/20`}>
        <Icon className="h-5 w-5 text-cyan-300" />
        <span className="text-xs font-semibold tracking-widest text-white/70">SPOTLIGHT</span>
      </div>
      <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-white/70">{item.desc}</p>
      <div className="mt-6 flex gap-2 text-xs text-white/60">
        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">Glass‑morphic</span>
        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">Backed by risk</span>
        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">Realtime</span>
      </div>
    </motion.div>
  );
};

const FeatureFlipSection = () => {
  const [phase, setPhase] = useState(0); // 0 = features, 1 = platforms
  const [index, setIndex] = useState(0);
  const stepsCombined = useMemo(() => [
    ...stepsFeatures.map((s) => ({ ...s, group: 0 })),
    ...stepsPlatforms.map((s) => ({ ...s, group: 1 })),
  ], []);

  // Build sentinels corresponding to each item to drive scroll-based updates
  const handleViewFactory = (i) => () => {
    const item = stepsCombined[i];
    setPhase(item.group);
    const inGroupIndex = item.group === 0 ? i : i - stepsFeatures.length;
    setIndex(inGroupIndex);
  };

  const currentItem = phase === 0 ? stepsFeatures[index] : stepsPlatforms[index];
  const sectionRef = useRef(null);

  return (
    <section id="features" ref={sectionRef} className="relative w-full bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
          >
            Features and Platforms — flip as you scroll
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-white/70"
          >
            A sticky, glass card that flips through core benefits and then highlights MT5, Sterling, and Tradejini.
          </motion.p>
        </div>

        <div className="relative">
          {/* Sticky viewport */}
          <div className="sticky top-24 z-10 flex w-full justify-center">
            <AnimatePresence mode="wait">
              <FlipCard keyId={`${phase}-${index}`} item={currentItem} />
            </AnimatePresence>
          </div>

          {/* Scroll driver: invisible sentinels to control which card is shown */}
          <div className="relative mx-auto mt-[50vh] max-w-2xl">
            {stepsCombined.map((_, i) => (
              <StepSentinel key={i} onView={handleViewFactory(i)} />
            ))}
            <div className="h-[40vh]" />
          </div>
        </div>

        {/* Mini legend tabs showing progress */}
        <div className="mt-16 flex w-full justify-center">
          <div className="inline-flex overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
            <div className={`px-4 py-2 text-sm font-medium ${phase === 0 ? 'rounded-xl bg-white/10 text-white' : 'text-white/70'}`}>Features</div>
            <div className={`px-4 py-2 text-sm font-medium ${phase === 1 ? 'rounded-xl bg-white/10 text-white' : 'text-white/70'}`}>Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureFlipSection;

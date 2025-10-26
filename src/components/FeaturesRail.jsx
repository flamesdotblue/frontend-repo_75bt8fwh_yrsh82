import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DevicePad from './DevicePad';
import { Zap, Shield, BarChart3, Globe } from 'lucide-react';

const steps = [
  {
    key: 'feat-1',
    title: 'Lightning execution',
    desc: 'Sub-50ms routing, smart order netting, and graceful failover for stable performance.',
    Icon: Zap,
    side: 'left', // text on left, device on right
  },
  {
    key: 'feat-2',
    title: 'MT5 deep integration',
    desc: 'Native positions, PnL, and risk sync. It feels first-party and instant.',
    Icon: BarChart3,
    side: 'right', // text on right, device on left
  },
  {
    key: 'feat-3',
    title: 'Sterling pro desktop',
    desc: 'Low-latency FIX + server-side throttling to survive volatile bursts.',
    Icon: Shield,
    side: 'left',
  },
  {
    key: 'feat-4',
    title: 'Tradejini connectivity',
    desc: 'Broker-grade APIs with account sync and real-time fills.',
    Icon: Globe,
    side: 'right',
  },
];

const FeatureStep = ({ index, step, progress }) => {
  const total = steps.length;
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0, 1, 0]);
  const y = useTransform(progress, [start, (start + end) / 2, end], [24, 0, -24]);

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 flex items-center ${step.side === 'left' ? 'justify-start' : 'justify-end'}`}
      style={{ opacity, y }}
    >
      <div className="pointer-events-auto w-full max-w-xl p-4 md:p-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 p-2">
              <step.Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold md:text-xl">{step.title}</h3>
          </div>
          <p className="mt-2 text-white/70 md:text-base">{step.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesRail = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  // Map progress to alternating X positions and flip
  const stops = useMemo(() => steps.map((_, i) => (steps.length === 1 ? 0 : i / (steps.length - 1))), []);
  const xPositions = steps.map((s) => (s.side === 'left' ? 260 : -260)); // device opposite to text
  const tilts = steps.map((s) => (s.side === 'left' ? 10 : -10));

  const x = useTransform(scrollYProgress, stops, xPositions);
  const rotateY = useTransform(scrollYProgress, stops, tilts);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section id="features" ref={ref} className="relative w-full bg-slate-950 py-24">
      {/* Soft ambient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-24 right-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Tall scroller so the device can travel across steps */}
        <div className="mx-auto grid min-h-[420vh] grid-rows-[1fr]">
          <div className="sticky top-24 isolate">
            <div className="relative mx-auto flex max-w-7xl items-center justify-center">
              {/* Step texts that fade in/out */}
              {steps.map((s, i) => (
                <FeatureStep key={s.key} index={i} step={s} progress={scrollYProgress} />
              ))}

              {/* Single device that moves and flips */}
              <motion.div style={{ x, rotateY }} className="relative">
                <DevicePad parallaxY={parallaxY} />
              </motion.div>
            </div>
          </div>

          {/* spacer */}
          <div className="row-start-1" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesRail;

import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, BarChart3, Globe } from 'lucide-react';

const stepsData = [
  {
    key: 'exec',
    title: 'Blazing execution',
    desc: 'Sub‑50ms routing with smart order handling and failover. Designed for pro latency.',
    icon: Zap,
    side: 'right',
    tint: 'from-cyan-400/20 to-fuchsia-500/20',
  },
  {
    key: 'mt5',
    title: 'MT5 deep integration',
    desc: 'Native bridge for positions, PnL, and risk. Feels like first‑party.',
    icon: BarChart3,
    side: 'left',
    tint: 'from-emerald-400/20 to-cyan-400/20',
  },
  {
    key: 'sterling',
    title: 'Sterling pro desktops',
    desc: 'Low‑latency FIX with server‑side throttling and burst control.',
    icon: Shield,
    side: 'right',
    tint: 'from-amber-400/20 to-rose-500/20',
  },
  {
    key: 'tradejini',
    title: 'Tradejini connectivity',
    desc: 'Broker‑grade APIs with account sync and real‑time fills.',
    icon: Globe,
    side: 'left',
    tint: 'from-sky-400/20 to-indigo-500/20',
  },
];

const DeviceMock = ({ progress }) => {
  // Subtle parallax inside the device while section scrolls
  const innerY = useTransform(progress, [0, 1], [10, -10]);
  const glow = useTransform(progress, [0, 1], [0.25, 0.6]);

  return (
    <div className="relative w-[320px] md:w-[420px] lg:w-[520px]">
      <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
        <div className="aspect-[4/3] overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
          <motion.div style={{ y: innerY }} className="h-full w-full">
            {/* Faux status bar */}
            <div className="flex items-center justify-between px-4 py-2 text-xs text-white/70">
              <span>9:41</span>
              <div className="flex items-center gap-2">
                <span>LTE</span>
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>
            {/* Animated chart */}
            <div className="px-4">
              <div className="mb-3 h-8 w-40 rounded-md bg-white/10" />
              <div className="grid grid-cols-12 items-end gap-1">
                {[6, 3, 10, 5, 11, 8, 12, 4, 9, 7, 10, 6].map((h, i) => (
                  <div
                    key={i}
                    className="rounded-t bg-gradient-to-t from-white/10 to-white/50"
                    style={{ height: `${h * 6}px` }}
                  />
                ))}
              </div>
            </div>
            {/* Bottom cards */}
            <div className="mt-4 grid grid-cols-3 gap-3 px-4 pb-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="h-3 w-12 rounded bg-white/20" />
                  <div className="mt-2 h-3 w-16 rounded bg-white/10" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] blur-3xl"
          style={{ opacity: glow }}
        >
          <div className="h-full w-full rounded-[40px] bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20" />
        </motion.div>
      </div>
    </div>
  );
};

const StepText = ({ stepIndex, progress, total, title, desc, Icon, side, tint }) => {
  // Each step occupies a segment of progress
  const start = stepIndex / total;
  const end = (stepIndex + 1) / total;
  const appear = useTransform(progress, [start, (start + end) / 2, end], [0, 1, 0]);
  const y = useTransform(progress, [start, (start + end) / 2, end], [20, 0, -20]);

  return (
    <motion.div
      style={{ opacity: appear, y }}
      className={`pointer-events-none absolute inset-0 flex items-center ${
        side === 'left' ? 'justify-start' : 'justify-end'
      }`}
    >
      <div className="pointer-events-auto w-full max-w-xl p-4 md:p-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className={`rounded-xl border border-white/10 bg-gradient-to-br ${tint} p-2`}> 
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
          </div>
          <p className="mt-2 text-white/70 md:text-base">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const MovingTabShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const total = stepsData.length;
  const stops = useMemo(() => stepsData.map((_, i) => (total === 1 ? 0 : i / (total - 1))), [total]);
  const positions = stepsData.map((s) => (s.side === 'left' ? -260 : 260));
  const rotations = stepsData.map((s) => (s.side === 'left' ? -8 : 8));

  const x = useTransform(scrollYProgress, stops, positions);
  const rotateY = useTransform(scrollYProgress, stops, rotations);

  return (
    <section id="features" ref={ref} className="relative w-full bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-24 right-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* The scroller area is tall; device stays sticky and moves horizontally while content fades */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto grid min-h-[400vh] grid-rows-[1fr]">
          <div className="sticky top-24 isolate -z-0">
            <div className="relative mx-auto flex max-w-7xl items-center justify-center">
              {/* Dynamic texts per step */}
              {stepsData.map((s, i) => (
                <StepText
                  key={s.key}
                  stepIndex={i}
                  total={total}
                  progress={scrollYProgress}
                  title={s.title}
                  desc={s.desc}
                  Icon={s.icon}
                  side={s.side}
                  tint={s.tint}
                />
              ))}

              {/* Single moving device (the one tab) */}
              <motion.div style={{ x, rotateY }} className="relative">
                <DeviceMock progress={scrollYProgress} />
              </motion.div>
            </div>
          </div>

          {/* Spacer to create multiple view heights for scrolling */}
          <div className="row-start-1" />
        </div>
      </div>
    </section>
  );
};

export default MovingTabShowcase;

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lock, BarChart3, Globe } from 'lucide-react';

const items = [
  {
    type: 'feature',
    title: 'Ultra‑low latency execution',
    desc: 'Micro‑batched streams and broker‑native routes keep fills snappy and consistent.',
    icon: Zap,
    accent: 'from-cyan-400/20 to-fuchsia-400/20',
    screen: (
      <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center">
        <div className="text-center">
          <div className="mx-auto h-14 w-14 rounded-2xl bg-cyan-400/20 ring-1 ring-white/20 grid place-items-center">
            <Zap className="h-7 w-7 text-cyan-300" />
          </div>
          <div className="mt-3 text-sm text-white/70">TBT 0.9 ms • Spread aware</div>
        </div>
      </div>
    ),
  },
  {
    type: 'feature',
    title: 'Granular risk controls',
    desc: 'Per‑account limits, circuit breakers, and slippage bounds baked into every route.',
    icon: Lock,
    accent: 'from-fuchsia-400/20 to-cyan-400/20',
    screen: (
      <div className="h-full w-full bg-gradient-to-br from-slate-900 to-slate-800 p-5">
        <div className="grid grid-cols-3 gap-3">
          {[10, 40, 70, 30, 55, 80, 20, 65, 95].map((h, i) => (
            <div key={i} className="flex items-end gap-1">
              <div className="h-20 w-full rounded-md bg-white/5">
                <div style={{ height: `${h}%` }} className="w-full rounded-md bg-fuchsia-400/60"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-white/60">Max Drawdown 5% • Per‑trade loss 1% • Leverage 2x</div>
      </div>
    ),
  },
  {
    type: 'feature',
    title: 'Live analytics',
    desc: 'Real‑time PnL, exposure, and win‑rate dashboards across accounts and brokers.',
    icon: BarChart3,
    accent: 'from-cyan-400/20 to-fuchsia-400/20',
    screen: (
      <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 p-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="text-xs text-white/60">PNL (Today)</div>
            <div className="mt-1 text-lg font-semibold text-white">+$3,482</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="text-xs text-white/60">Win rate</div>
            <div className="mt-1 text-lg font-semibold text-white">63%</div>
          </div>
          <div className="col-span-2 h-24 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0,transparent_95%,rgba(255,255,255,.08)_95%)] bg-[length:16px_100%]">
              <div className="h-full w-full bg-gradient-to-r from-cyan-400/40 to-fuchsia-400/40 mix-blend-screen"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // Platforms
  {
    type: 'platform',
    title: 'MT5',
    desc: 'Native bridge with symbol normalization and risk sync.',
    icon: Globe,
    accent: 'from-cyan-400/20 to-fuchsia-400/20',
    screen: (
      <div className="h-full w-full bg-gradient-to-br from-[#1c2434] to-[#0b1220] grid place-items-center">
        <div className="text-center">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <span className="text-xl font-bold tracking-wide">MT5</span>
          </div>
          <div className="mt-3 text-xs text-white/70">Depth, hedging, EA friendly</div>
        </div>
      </div>
    ),
  },
  {
    type: 'platform',
    title: 'Sterling',
    desc: 'Low‑latency equities and options routing.',
    icon: Globe,
    accent: 'from-fuchsia-400/20 to-cyan-400/20',
    screen: (
      <div className="h-full w-full bg-gradient-to-br from-[#161a22] to-[#0f1320] grid place-items-center">
        <div className="text-center">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <span className="text-xl font-bold tracking-wide">Sterling</span>
          </div>
          <div className="mt-3 text-xs text-white/70">DMA • Options • Smart routes</div>
        </div>
      </div>
    ),
  },
  {
    type: 'platform',
    title: 'Tradejini',
    desc: 'Fast OMS connectivity for Indian markets.',
    icon: Globe,
    accent: 'from-cyan-400/20 to-fuchsia-400/20',
    screen: (
      <div className="h-full w-full bg-gradient-to-br from-[#15192a] to-[#0b1020] grid place-items-center">
        <div className="text-center">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <span className="text-xl font-bold tracking-wide">Tradejini</span>
          </div>
          <div className="mt-3 text-xs text-white/70">NSE • F&O • Ultra low‑latency</div>
        </div>
      </div>
    ),
  },
];

const DeviceMock = ({ children, flip = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateY: flip ? -12 : 12 }}
      whileInView={{ opacity: 1, y: 0, rotateY: flip ? -180 : 0 }}
      viewport={{ amount: 0.5, once: false }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative w-full max-w-xl [transform-style:preserve-3d]"
    >
      <div className="relative aspect-[3/2] w-full rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
        {/* Bezel */}
        <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/10 bg-black">
          {/* Camera dot */}
          <div className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/30" />
          {/* Screen */}
          <div className="absolute inset-0">{children}</div>
        </div>
      </div>
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-12 -z-10">
        <div className="absolute left-1/3 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
        <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-2xl" />
      </div>
    </motion.div>
  );
};

const Row = ({ item, index }) => {
  const Icon = item.icon;
  const reversed = index % 2 === 1; // alternate left/right
  return (
    <div className={`grid items-center gap-10 md:gap-16 ${reversed ? 'md:grid-cols-[1fr_1fr]' : 'md:grid-cols-[1fr_1fr]'}`}>
      {/* Left column */}
      <div className={`${reversed ? 'md:order-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br p-2 ring-1 ring-white/20 text-white/80"
          style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}
        >
          <Icon className="h-5 w-5 text-cyan-300" />
          <span className="text-xs font-semibold tracking-widest">{item.type === 'feature' ? 'FEATURE' : 'PLATFORM'}</span>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-2xl font-semibold text-white md:text-3xl"
        >
          {item.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-3 text-white/70"
        >
          {item.desc}
        </motion.p>
      </div>

      {/* Right column: device mockup */}
      <div className={`${reversed ? 'md:order-1' : ''} `}>
        <DeviceMock flip={reversed}>{item.screen}</DeviceMock>
      </div>
    </div>
  );
};

const AlternatingShowcase = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-24">
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
            Features and Platforms — side‑by‑side
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-white/70"
          >
            Alternating layout: text on one side, iPad‑style preview on the other. As you scroll, the device flips and swaps sides.
          </motion.p>
        </div>

        <div className="space-y-20">
          {items.map((item, i) => (
            <Row key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternatingShowcase;

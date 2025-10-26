import React from 'react';
import { Zap, Globe, Lock, BarChart3 } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur-xl transition hover:border-white/20">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-fuchsia-400/10" />
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 ring-1 ring-white/20">
        <Icon className="h-5 w-5 text-cyan-300" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-white/70">{desc}</p>
  </div>
);

const FeaturesGrid = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950/80 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Built for speed, safety and scale
          </h2>
          <p className="mt-3 text-white/70">Everything you need to run a modern copy trading business with elegance.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Zap}
            title="Ultra‑low latency"
            desc="Optimized routing and queueing keep execution blazing fast across brokers."
          />
          <FeatureCard
            icon={Globe}
            title="Multi‑broker"
            desc="Native integrations for MT5, Sterling, Tradejini, plus FIX and APIs."
          />
          <FeatureCard
            icon={Lock}
            title="Granular risk"
            desc="Per‑account limits, max drawdown, and slippage bounds baked in."
          />
          <FeatureCard
            icon={BarChart3}
            title="Live analytics"
            desc="Real‑time PnL, exposure, and strategy performance dashboards."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

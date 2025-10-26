import React from 'react';
import { Shield, Timer, BarChart3 } from 'lucide-react';

const Step = ({ index, title, description, icon: Icon }) => (
  <div className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur-xl transition hover:border-white/20">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 ring-1 ring-white/20">
        <Icon className="h-5 w-5 text-cyan-300" />
      </div>
      <div className="text-xs font-semibold tracking-widest text-white/60">STEP {index}</div>
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm text-white/70">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            How copy trading works
          </h2>
          <p className="mt-3 text-white/70">
            One action from a strategist is streamed to every subscriber with risk controls and instant execution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Step
            index={1}
            title="Strategist places a trade"
            description="Orders are ingested from MT5, Sterling, Tradejini or FIX. We normalize instruments and routes."
            icon={BarChart3}
          />
          <Step
            index={2}
            title="We mirror across subscribers"
            description="Positions are scaled per allocation rules and risk limits, then routed with ultra‑low latency."
            icon={Timer}
          />
          <Step
            index={3}
            title="Risk & reconciliation"
            description="Real‑time guardrails, slippage bounds, and PnL tracking keep every account in sync."
            icon={Shield}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

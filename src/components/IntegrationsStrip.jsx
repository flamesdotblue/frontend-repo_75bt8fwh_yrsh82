import React from 'react';
import { Link2 } from 'lucide-react';

const Badge = ({ label }) => (
  <div className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition hover:border-white/20">
    <div className="h-2 w-2 rounded-full bg-emerald-400/80 group-hover:bg-emerald-300" />
    <span className="font-medium tracking-wide">{label}</span>
  </div>
);

const IntegrationsStrip = () => {
  return (
    <section className="relative w-full bg-slate-950/60 py-14 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
          <Link2 className="h-3.5 w-3.5 text-cyan-300" />
          <span>Live broker integrations</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge label="MT5" />
          <Badge label="Sterling" />
          <Badge label="Tradejini" />
          <Badge label="FIX / WebSocket" />
          <Badge label="Risk Controls" />
        </div>
        <p className="mt-4 text-center text-sm text-white/60">
          Execute once. Stream everywhere. We handle routing, latency and reconciliation.
        </p>
      </div>
    </section>
  );
};

export default IntegrationsStrip;

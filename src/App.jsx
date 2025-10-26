import React from 'react';
import Hero from './components/Hero';
import IntegrationsStrip from './components/IntegrationsStrip';
import HowItWorks from './components/HowItWorks';
import AlternatingShowcase from './components/AlternatingShowcase';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <IntegrationsStrip />
      <HowItWorks />
      <AlternatingShowcase />
      <section className="w-full bg-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-xl font-semibold text-white">Ready to launch your strategy?</h3>
          <p className="mt-2 text-white/70">
            Onboard as a strategist or subscriber in minutes. Experience design that feels like magic.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#" className="rounded-xl bg-white/90 px-5 py-3 font-medium text-slate-900 shadow-md shadow-white/10 transition hover:bg-white">Start copying</a>
            <a href="#" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur-md transition hover:border-white/25">Become a strategist</a>
          </div>
          <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}

export default App;

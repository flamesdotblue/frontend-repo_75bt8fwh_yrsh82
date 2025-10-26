import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients to enhance glass aesthetic without blocking interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-[50vh] w-[50vw] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vw] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-lg">
          <Rocket className="h-4 w-4 text-cyan-400" />
          <span className="text-xs/4 font-medium tracking-wide text-white/80">Next‑gen Copy Trading Platform</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-6xl lg:text-7xl">
          Apple‑level design for effortless copy trading
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-white/70 md:text-lg">
          Mirror trades from elite strategists across MT5, Sterling, and Tradejini—
          with glass‑morphic elegance, buttery scroll, and real‑time execution.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#how"
            className="group inline-flex items-center gap-2 rounded-xl bg-white/90 px-5 py-3 font-medium text-slate-900 shadow-md shadow-white/10 transition hover:bg-white"
          >
            Get started
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur-md transition hover:border-white/25"
          >
            <Play className="h-4 w-4" />
            See features
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-white/60 md:flex">
          <div className="h-6 w-3 rounded-full border border-white/20 p-0.5">
            <div className="h-1.5 w-1 rounded-full bg-white/60 animate-bounce" />
          </div>
          <span className="text-xs">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

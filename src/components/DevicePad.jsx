import React from 'react';
import { motion } from 'framer-motion';

// A glassy iPad-style device with a simple trading chart mock
const DevicePad = ({ className = '', style, tilt = 0, parallaxY, glow = 0.35 }) => {
  return (
    <motion.div
      className={`relative w-[320px] md:w-[440px] lg:w-[560px] ${className}`}
      style={style}
    >
      <motion.div
        style={{ rotateY: tilt }}
        className="relative rounded-[36px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-800">
          <motion.div style={{ y: parallaxY }} className="h-full w-full">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3 text-xs text-white/70">
              <span>9:41</span>
              <div className="flex items-center gap-2">
                <span>5G</span>
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* Main chart area */}
            <div className="px-5">
              <div className="mb-3 h-8 w-48 rounded-md bg-white/10" />
              <div className="relative h-48 overflow-hidden rounded-xl border border-white/10 bg-slate-900/40">
                <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(99,102,241,0.6)" />
                      <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                    </linearGradient>
                  </defs>
                  <polyline
                    fill="url(#grad)"
                    stroke="rgba(99,102,241,0.7)"
                    strokeWidth="2"
                    points="0,120 30,110 60,140 90,100 120,130 150,80 180,100 210,70 240,90 270,60 300,85 330,75 360,95 390,80 400,100 400,200 0,200"
                  />
                </svg>
                {/* X axis ticks */}
                <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(to_right,transparent,transparent_19px,rgba(255,255,255,0.15)_20px)]" />
                <div className="absolute inset-0 opacity-10 [background-image:repeating-linear-gradient(to_bottom,transparent,transparent_19px,rgba(255,255,255,0.25)_20px)]" />
              </div>
            </div>

            {/* Stats cards */}
            <div className="mt-4 grid grid-cols-3 gap-3 px-5 pb-5">
              {[1,2,3].map((n)=> (
                <div key={n} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="h-3 w-14 rounded bg-white/30" />
                  <div className="mt-2 h-3 w-20 rounded bg-white/10" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Glow */}
        <motion.div className="pointer-events-none absolute -inset-10 -z-10 rounded-[44px] blur-3xl" style={{ opacity: glow }}>
          <div className="h-full w-full rounded-[44px] bg-gradient-to-br from-cyan-400/25 via-fuchsia-500/20 to-indigo-500/20" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DevicePad;

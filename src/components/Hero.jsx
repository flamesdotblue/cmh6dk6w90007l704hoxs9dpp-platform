import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[520px] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center md:px-6">
        <h1 className="pointer-events-none max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          Multiply your team's impact with modern, minimalist tooling
        </h1>
        <p className="pointer-events-none mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg">
          A seamless workspace that scales with you. Design, automate, and deliver with confident, interactive feedback at every step.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Get started
            <ArrowRight size={16} />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

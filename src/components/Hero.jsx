import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient vignette that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-white/5 px-3 py-1 text-xs tracking-wider text-purple-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            AVAILABLE FOR FREELANCE • 2025
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Building immersive, high‑performance web experiences
          </h1>
          <p className="mt-4 text-sm/relaxed text-zinc-300 md:text-base">
            I’m a frontend engineer and designer crafting futuristic, accessible interfaces.
            I blend 3D, motion, and solid engineering to ship delightful products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-purple-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-400"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              Get in touch
            </a>
            <div className="ml-2 hidden items-center gap-2 sm:flex">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/5 p-2 text-white/90 transition hover:border-white/30 hover:bg-white/10">
                <Github className="h-4 w-4" />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/5 p-2 text-white/90 transition hover:border-white/30 hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="Email" href="#contact" className="rounded-full border border-white/20 bg-white/5 p-2 text-white/90 transition hover:border-white/30 hover:bg-white/10">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

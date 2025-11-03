import React from 'react';

const skills = ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'Node.js', 'Design Systems'];

const About = () => {
  return (
    <section id="about" className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(59,130,246,0.18),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">About me</h2>
            <p className="mt-4 text-sm text-zinc-300">
              I create high‑quality interfaces where performance, accessibility, and aesthetics meet.
              I enjoy designing delightful micro‑interactions and shipping robust, maintainable code.
            </p>
            <p className="mt-3 text-sm text-zinc-300">
              When I’m not working, you’ll find me exploring generative art, motion design, and
              building small tools that make everyday workflows smoother.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-zinc-300">Core skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-zinc-300">
              <p>
                Currently exploring WebGPU pipelines and better ways to blend 3D scenes with UI without compromising
                performance or accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

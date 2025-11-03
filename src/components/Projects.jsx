import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    description:
      'A performant storefront with 3D previews, realtime search, and edge‑cached pages.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
    link: '#',
    color: 'from-purple-500/20 to-blue-500/20',
  },
  {
    title: 'Signal Desk',
    description:
      'Collaborative dashboard with live charts, keyboard‑first UX, and offline sync.',
    tags: ['React', 'WebSockets', 'Dexie'],
    link: '#',
    color: 'from-fuchsia-500/20 to-cyan-500/20',
  },
  {
    title: 'Voyager Blog',
    description:
      'MDX publishing platform with AI summaries, image pipelines, and SSG.',
    tags: ['Astro', 'MDX', 'Cloudflare'],
    link: '#',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(88,28,135,0.25),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Selected projects</h2>
            <p className="mt-2 text-sm text-zinc-400">
              A mix of client work and personal experiments.
            </p>
          </div>
          <a href="#contact" className="hidden text-sm text-purple-300 hover:text-purple-200 md:inline">Work with me →</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} p-5 transition-transform hover:-translate-y-1`}
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-white/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
                <p className="text-sm text-zinc-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

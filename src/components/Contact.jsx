import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_90%_100%,rgba(168,85,247,0.18),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Let’s build something great</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Tell me about your project. I usually reply within 24 hours.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-xl space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              name="name"
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-purple-400/50"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email address"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-purple-400/50"
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-purple-400/50"
          />
          <textarea
            required
            name="message"
            rows="5"
            placeholder="Project details, goals, timeline, budget..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-purple-400/50"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-400"
          >
            <Mail className="h-4 w-4" />
            Send message
          </button>

          {status && (
            <p className="text-sm text-emerald-300">{status}</p>
          )}
        </form>

        <p className="mt-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Flames • All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;

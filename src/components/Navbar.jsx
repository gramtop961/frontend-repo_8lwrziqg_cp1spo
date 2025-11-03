import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 text-white">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-blue-500">
            <Rocket className="h-4 w-4" />
          </span>
          <span>Flames Portfolio</span>
        </a>
        <div className="hidden items-center gap-6 text-sm md:flex">
          <a href="#about" className="text-white/80 transition hover:text-white">About</a>
          <a href="#projects" className="text-white/80 transition hover:text-white">Projects</a>
          <a href="#contact" className="text-white/80 transition hover:text-white">Contact</a>
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 transition hover:bg-white/20 md:inline-flex"
        >
          Let’s talk
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

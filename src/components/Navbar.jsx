import React from 'react';
import { Rocket, Grid, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-900 text-white">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">Multiply</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-neutral-600 hover:text-neutral-900">Features</a>
          <a href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900">Solutions</a>
          <a href="#about" className="text-sm text-neutral-600 hover:text-neutral-900">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-50">
            <Grid size={16} />
            Dashboard
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">
            <User size={16} />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}

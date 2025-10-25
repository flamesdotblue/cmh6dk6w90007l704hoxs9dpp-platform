import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-600 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-900">Multiply</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#about" className="hover:text-neutral-900">About</a>
          <a href="#features" className="hover:text-neutral-900">Features</a>
          <a href="#" className="hover:text-neutral-900">Privacy</a>
          <a href="#" className="hover:text-neutral-900">Terms</a>
        </nav>
      </div>
    </footer>
  );
}

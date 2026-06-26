import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Atelier', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Journal', href: '/journal' },
  { name: 'Contact', href: '/contact', active: true },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-44">
      <header className=" border-b py-3 backdrop-saturate-[160%] bg-[#FAF6EE]/90">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a className="flex flex-col leading-none" href="/">
            <span className="font-serif text-2xl tracking-tight text-slate-900">Maison Lior</span>
            <span className="mt-1 text-xs uppercase tracking-[0.2em] text-[#B89154]">Wedding Atelier</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-[#B89154] ${
                  link.active ? 'text-[#B89154]' : 'text-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Enquire Button */}
          <a
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.25em] uppercase border border-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
            href="/contact"
          >
            Enquire
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-900" 
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-[60] bg-[#fdfcf8] transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-serif text-2xl">Maison Lior</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex flex-col items-center justify-center gap-8 mt-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="font-serif text-4xl text-slate-900 hover:text-amber-600 transition-colors"
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            className="mt-8 inline-flex items-center px-8 py-3 text-xs tracking-[0.25em] uppercase border border-slate-900"
            href="/contact"
          >
            Enquire
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
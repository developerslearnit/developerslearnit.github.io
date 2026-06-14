import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle transparent to blurred transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple scrollspy
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 glass-panel border-b border-white/5 shadow-lg shadow-black/20' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a 
          href="#"
          onClick={(e) => handleLinkClick(e, '#')}
          className="font-display font-extrabold text-2xl tracking-tight text-white hover:opacity-95 transition-opacity"
        >
          AMO<span className="text-primary-500">.</span>DEV
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-white relative py-1 ${
                    activeSection === item.href ? 'text-primary-500 font-semibold' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-600/10 hover:shadow-glow-indigo transition-all duration-300"
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-darkBg/95 backdrop-blur-lg border-t border-white/5 flex flex-col justify-between p-6 fade-in md:hidden">
          <ul className="space-y-6 flex flex-col py-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-xl font-medium tracking-wide block transition-colors ${
                    activeSection === item.href ? 'text-primary-500 font-bold' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mb-12">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex justify-center items-center gap-2 w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all shadow-lg shadow-primary-600/20"
            >
              Get In Touch
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

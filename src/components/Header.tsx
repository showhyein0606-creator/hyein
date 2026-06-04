import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBhxZfKCXKxQQV4sXuQ4gY5bpSlT43L3KD45J4uzD3l13lDD8xDuZDw2XHivX46ZxB215cnPrTaQsA3CAnsl48uOYJ2nIouve79TDwmoQWe31c0XOWpdwYAHjsjnZfn06sc3laHRrx7KA755cUI0sBG8eROW6poRIhx_S4z4xnjgL7Tyx83oV3nx4VDG-Xofk6UnsBAb3sGKZBH_i_jkHN4Phqp529LqqPd3C73yb71HM1n7R5lmojwcYWx8QOIfm4h6cYuQM8l42ZK";

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#0A0A0A]/85 backdrop-blur-md border-white/10 py-3 shadow-lg' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-12">
          {/* Logo Section */}
          <a href="https://hanconyeon.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group focus:outline-none">
            <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center p-1 border border-white/10 group-hover:border-white/20 transition-all">
              <img 
                src={logoUrl} 
                alt="Korea AI Contents Lab Logo" 
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-lg font-bold text-white tracking-tight group-hover:text-white/90 transition-colors">
                Korea AI Contents Lab
              </span>
              <span className="text-[10px] text-[#22C55E] tracking-wider font-medium uppercase font-mono leading-none mt-0.5">
                한국AI콘텐츠연구소
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#c4c7c9] hover:text-white transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#22C55E] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-white text-[#0A0A0A] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-all shadow-md active:scale-95 focus:outline-none"
            >
              Consultancy
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#22C55E] transition-colors p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] bg-[#0A0A0A]/95 z-40 backdrop-blur-lg border-t border-white/5 md:hidden flex flex-col justify-start p-8 gap-6"
          >
            <div className="flex flex-col gap-6 mt-4">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#c4c7c9] hover:text-white transition-colors border-b border-white/5 pb-3 block"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="bg-white text-[#0A0A0A] font-semibold text-center py-4 rounded-xl hover:bg-neutral-200 transition-all block text-lg shadow-lg"
              >
                Consultancy
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-16 md:py-20 border-t border-white/5 relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left: Branding & Copyright */}
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2">
            <span className="font-headline text-lg font-bold text-white tracking-tight">
              Korea AI Contents Lab
            </span>
          </div>
          <p className="text-xs text-neutral-500 font-body">
            © {new Date().getFullYear()} Korea AI Contents Lab. All rights reserved.
          </p>
        </div>

        {/* Right: Simple Legal Navigation */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a href="#" className="text-xs text-[#c4c7c9] hover:text-white transition-colors font-body">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-[#c4c7c9] hover:text-white transition-colors font-body">
            Terms of Service
          </a>
          <a href="#contact" className="text-xs text-[#c4c7c9] hover:text-white transition-colors font-body">
            Contact
          </a>
        </div>
        
      </div>
    </footer>
  );
}

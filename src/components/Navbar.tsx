import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import brandLogo from '../assets/dachuang-logo.png';

interface NavbarProps {
  currentPath: string;
  navigateTo: (path: string) => void;
}

export default function Navbar({ currentPath, navigateTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamic opacity when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (anchorId: string) => {
    setIsMobileMenuOpen(false);
    if (currentPath !== '/') {
      // Navigate to Home page first, then find the anchor
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const menuItems = [
    { label: '首頁', id: 'home', action: () => handleLinkClick('home') },
    { label: '能力模組', id: 'modules', action: () => handleLinkClick('modules') },
    { 
      label: '作品集', 
      id: 'portfolio', 
      action: () => navigateTo('/portfolio') 
    },
    { label: 'AI 戰隊', id: 'squad', action: () => handleLinkClick('squad') },
    { label: '合作流程', id: 'process', action: () => handleLinkClick('process') },
    { label: '聯絡我們', id: 'contact', action: () => handleLinkClick('contact') },
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-brand-bg-dark/85 backdrop-blur-md border-electric-blue/15 shadow-lg'
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* Laser Top Trim Decorator */}
      {isScrolled && (
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-80" />
      )}

      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-18 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div
          onClick={() => navigateTo('/')}
          className="flex items-center gap-2.5 cursor-target group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-black/40 border border-electric-blue/30 group-hover:border-electric-blue group-hover:scale-105 transition-all duration-300 overflow-hidden shadow-[0_0_14px_rgba(0,163,255,0.28)]">
  <img
    src={brandLogo}
    alt="達創智能科技 AI"
    className="w-full h-full object-contain"
    referrerPolicy="no-referrer"
  />
  <div className="absolute inset-0 bg-electric-blue/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
</div>
          <div className="flex flex-col justify-start leading-none">
            <span className="font-display font-medium tracking-wider text-[16px] text-text-main group-hover:text-electric-blue transition-colors">
             達創智能科技 AI
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = 
              (item.id === 'portfolio' && currentPath === '/portfolio') ||
              (item.id !== 'portfolio' && currentPath === '/' && false); // Anchor based active tracking not main state

            return (
              <button
                key={item.id}
                onClick={item.action}
                className={`font-sans font-normal text-[15px] cursor-target hover:text-electric-blue transition-all duration-300 relative py-1 ${
                  isActive ? 'text-electric-blue font-medium' : 'text-text-muted'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-electric-blue rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop Quick Trigger CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleLinkClick('contact')}
            className="cursor-target px-5 py-2.5 rounded-md font-sans font-medium text-xs tracking-wider uppercase bg-transparent border border-brand-silver/30 text-text-main hover:border-electric-blue hover:text-electric-blue hover:shadow-[0_0_15px_rgba(0,163,255,0.15)] transition-all duration-300 active:scale-95"
          >
            啟動諮詢
          </button>
        </div>

        {/* Mobile Toggle Burger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-target p-1 text-text-main hover:text-electric-blue transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 top-16 bg-brand-bg-dark/95 backdrop-blur-lg z-40 border-b border-white/[0.04] transition-all duration-300 lg:hidden flex flex-col justify-between"
        >
          <div className="py-8 px-6 flex flex-col gap-5">
            {menuItems.map((item) => {
              const isActive = (item.id === 'portfolio' && currentPath === '/portfolio');
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-display font-normal py-2 border-b border-white/[0.03] flex items-center justify-between cursor-target ${
                    isActive ? 'text-electric-blue' : 'text-text-main'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-electric-blue font-mono">
                    {item.id.toUpperCase()} //
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-6 border-t border-white/[0.05] bg-brand-bg/50">
            <button
              onClick={() => {
                handleLinkClick('contact');
                setIsMobileMenuOpen(false);
              }}
              className="cursor-target w-full py-4 text-center rounded bg-electric-blue/10 border border-electric-blue/40 text-electric-blue font-sans font-medium hover:bg-electric-blue/20 transition-all duration-300"
            >
              啟動探索系統 / START NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

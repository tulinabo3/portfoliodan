import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Suivi de la section active

  // 1. Détecter le scroll pour Sticky + Section Active
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);

      // Détecter quelle section est à l'écran
      const sections = ['home', 'about', 'services', 'portfolio', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (!newMode) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.colorScheme = 'dark';
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About me', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Article', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed w-full top-0 left-0 z-[99] transition-all duration-500 px-[7%] md:px-[14%] flex justify-between items-center ${
      isSticky 
        ? (isDarkMode ? 'py-3 bg-bg-dark/90 backdrop-blur-lg shadow-lg' : 'py-3 bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100')
        : 'py-6 bg-transparent'
    }`}>
      
      {/* LOGO */}
      <a href="#home" className="w-24 transition-all duration-300">
        <img 
          src={isDarkMode ? "/images/dandevW.png" : "/images/dandevlogo.png"} 
          alt="Logo" 
          className="w-full object-contain" 
        />
      </a>

      {/* LIENS DESKTOP AVEC INDICATEUR ACTIF */}
      <ul className="hidden lg:flex gap-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <li key={link.name} className="relative group">
              <a 
                href={link.href} 
                className={`relative px-1 py-2 transition-all text-sm font-medium tracking-widest ${
                  isActive 
                    ? (isDarkMode ? 'text-white' : 'text-black') 
                    : (isDarkMode ? 'text-other-gray hover:text-white/70' : 'text-gray-400 hover:text-black/70')
                }`}
              >
                {link.name}

                {/* INDICATEUR ACTIF (La petite barre qui glisse) */}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-main-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>

      {/* ACTIONS */}
      <div className="flex items-center gap-3 md:gap-5">
        <button 
          onClick={toggleTheme} 
          className={`text-xl cursor-pointer p-2 rounded-xl border transition-all ${
            isDarkMode 
              ? 'text-main-gold border-white/10 bg-white/5 hover:bg-main-gold hover:text-bg-dark' 
              : 'text-orange-500 border-black/10 bg-black/5 hover:bg-orange-500 hover:text-white'
          }`}
        >
          {isDarkMode ? <i className="fa fa-sun-o"></i> : <i className="fa fa-moon-o"></i>}
        </button>
        
        <a href="#contact" className="hidden sm:flex items-center gap-2 px-6 py-3 bg-gold-gradient text-bg-dark font-black rounded-xl hover:scale-105 transition-transform shadow-[0_10px_20px_rgba(212,175,55,0.2)]">
          <span>Chat</span>
          <i className="fa fa-comments-o"></i>
        </a>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden text-3xl p-1 transition-colors ${isDarkMode ? 'text-main-gold' : 'text-black'}`}
        >
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* MENU MOBILE (Mise à jour pour l'état actif aussi) */}
      <div className={`fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden z-[100] ${
        isDarkMode ? 'bg-bg-dark/98 backdrop-blur-2xl' : 'bg-white/98 backdrop-blur-2xl'
      } ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsMenuOpen(false)}
            className={`text-3xl font-medium transition-all ${
              activeSection === link.id 
                ? 'text-main-gold scale-110' 
                : (isDarkMode ? 'text-white/40' : 'text-black/40')
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
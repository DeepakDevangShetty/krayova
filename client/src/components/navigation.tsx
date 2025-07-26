import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logoImage from '@assets/InShot_20250723_183629002__1_-removebg-preview (1)_1753546306552.png';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/98 backdrop-blur-md shadow-sm' : 'bg-white/95 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            data-testid="logo-krayova"
          >
            <img 
              src={logoImage} 
              alt="KRAYOVA Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-gray-800">KRAYOVA</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <motion.button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
              whileHover={{ y: -2 }}
              data-testid="nav-home"
            >
              HOME
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
              whileHover={{ y: -2 }}
              data-testid="nav-portfolio"
            >
              PORTFOLIO
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

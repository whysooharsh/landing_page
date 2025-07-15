import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if(typeof window !== 'undefined') {
      if(window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false);
      } else { 
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.div
      className={`fixed w-full font-inter transition-all duration-300 z-50 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto text-neutral-400 flex items-center justify-center h-16 space-x-10 bg-transparent backdrop-blur-3xl">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="hover:text-white cursor-pointer transition-colors duration-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            {item.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;

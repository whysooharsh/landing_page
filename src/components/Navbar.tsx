import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if(typeof window !== 'undefined') {
      if(window.scrollY > lastScrollY) {
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

  return (
    <div
      className={`fixed w-full font-inter transition-transform duration-300 z-50 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto text-neutral-400 flex items-center justify-center h-16 space-x-10 bg-black/80 backdrop-blur">
        {['Introduction', 'Resources', 'Innovation', 'Participate', 'FAQs'].map((item) => (
          <div
            key={item}
            className="hover:text-white cursor-pointer transition-colors duration-200"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

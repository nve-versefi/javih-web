// components/Navbar.tsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Explicitly type sectionId as string
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the mobile menu
    }
  };

  return (
    <nav className="bg-casal-500 shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer py-2">
              <Image src="/images/logo.png" alt="Logo" width={68} height={68} />
         
            </div>
          </Link>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="outline-none mobile-menu-button">
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className={`md:flex items-center ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row`}>
            <div className="py-4 px-8 text-white font-semibold text-2xl cursor-pointer" onClick={() => scrollToSection('Biografia')}>Biografia</div>
            <div className="py-4 px-8 text-white font-semibold text-2xl cursor-pointer" onClick={() => scrollToSection('Video')}>Videoteca</div>
            <div className="py-4 px-8 text-white font-semibold text-2xl cursor-pointer" onClick={() => scrollToSection('Galeria')}>Galería</div>
            <div className="py-4 px-8 text-white font-semibold text-2xl cursor-pointer" onClick={() => scrollToSection('Conciertos')}>Conciertos</div>
            <div className="py-4 px-8 text-white font-semibold text-2xl cursor-pointer" onClick={() => scrollToSection('Contacto')}>Contacto</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

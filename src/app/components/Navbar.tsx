"use client"

import Link from 'next/link';
import { memo, useCallback, useState } from 'react';

// Componente de link otimizado com memo
const NavLink = memo(({ href, text }: { href: string; text: string }) => (
  <Link 
    href={href} 
    className="text-gray-700 hover:text-green-600 transition duration-300 font-medium tracking-wide text-xs"
  >
    {text}
  </Link>
));

NavLink.displayName = 'NavLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav className="bg-white border-b border-gray-100 w-full fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-9 w-28">
                <img
                  src="/icons/icone-rekai.png" 
                  alt="Rekai Engenharia"
                  className="object-contain h-full"
                />
              </div>
            </Link>
          </div>

          {/* Menu central */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" text="HOME" />
            <NavLink href="/quem-somos" text="QUEM SOMOS" />
            <NavLink href="/portfolio" text="PORTFÓLIO" />
            <NavLink href="/contato" text="CONTATO" />
          </div>
          
          {/* Contato à direita */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Telefone */}
            <div className="flex items-center mr-1">
              <div className="flex items-center text-amber-500 mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-gray-700 text-xs font-medium">+55 (11) 97642-8037</span>
            </div>
            
            {/* Botão Fale Conosco */}
            <Link 
              href="/contato" 
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-0.5 rounded-sm transition duration-300 font-medium text-xs tracking-wide"
            >
              FALE CONOSCO
            </Link>
          </div>
          
          {/* Botão menu mobile */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden py-2 pb-3">
            <Link href="/" className="block py-1 text-gray-700 hover:text-green-600 text-sm font-medium">HOME</Link>
            <Link href="/quem-somos" className="block py-1 text-gray-700 hover:text-green-600 text-sm font-medium">QUEM SOMOS</Link>
            <Link href="/portfolio" className="block py-1 text-gray-700 hover:text-green-600 text-sm font-medium">PORTFÓLIO</Link>
            <Link href="/contato" className="block py-1 text-gray-700 hover:text-green-600 text-sm font-medium">CONTATO</Link>
          </div>
        )}
      </div>
    </nav>
  );
} 
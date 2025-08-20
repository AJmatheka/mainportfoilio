import React, { useState } from 'react';
import { navLinks } from '../constants/navLinks';

const NavItems = ({ setIsOpen }) => {
  return (
    <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="text-neutral-400 hover:text-white transition-colors">
          <a href={href} onClick={() => setIsOpen?.(false)}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Arnold
          </a>

          {/* Hamburger Icon - visible on small screens */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button>

          {/* Desktop Nav - visible on sm and up */}
          <nav className="hidden sm:flex">
            <NavItems setIsOpen={setIsOpen} />
          </nav>
        </div>
      </div>

      {/* Mobile Nav - only shown when open */}
      <div className={`sm:hidden overflow-hidden transition-max-height duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-4">
          <NavItems setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

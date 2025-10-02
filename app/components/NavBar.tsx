"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBars,
  faHouse,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const nav = [
    { name: "Home", icon: faHouse, href: "/" },
    { name: "About", icon: faAddressCard, href: "about" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="backdrop-brightness-75 backdrop-blur-md w-full font-mono sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between h-20">
        {/* Logo */}
        <Link
          className="my-auto hover:scale-105 active:scale-110 transition ease-in-out"
          href="/"
        >
          <div className="flex flex-col">
            <span className="font-dune text-2xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Likecat
            </span>
            <span className="font-dune font-bold text-sm text-slate-400">
              Bojun Zhang
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex space-x-4 sm:text-xl my-auto max-md:hidden">
          {nav.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="p-2 rounded-md space-x-1 hover:text-blue-200 hover:bg-white/10 active:bg-white/20 transition ease-in-out"
            >
              <FontAwesomeIcon icon={link.icon} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="my-auto md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 space-x-1 hover:text-blue-200 active:hover:text-blue-400 transition ease-in-out"
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto flex flex-col p-2 space-y-1 bg-black/50 backdrop-blur-md">
          {nav.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md space-x-1 hover:text-blue-200 hover:bg-white/10 active:bg-white/20 transition ease-in-out"
            >
              <FontAwesomeIcon icon={link.icon} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
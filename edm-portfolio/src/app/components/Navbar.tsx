"use client"; // Add this line at the very top

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="flex items-center justify-between w-full text-white shadow-lg navbar-content">
        {/* Hamburger Menu Icon */}
        <button
          className="block lg:hidden text-neon"
          onClick={toggleMenu}
        >
          &#9776; {/* This is a simple hamburger icon */}
        </button>
        {/* Navbar Links */}
        <ul className={`flex-col lg:flex lg:flex-row ${isOpen ? 'flex' : 'hidden'} lg:space-x-8 lg:justify-between w-full`}>
          <li className="flex-1 text-center">
            <Link href="/" className="transition duration-300 hover:text-neon">Home</Link>
          </li>
          <li className="flex-1 text-center">
            <Link href="/about" className="transition duration-300 hover:text-neon">About Me</Link>
          </li>
          <li className="flex-1 text-center">
            <Link href="/tracks" className="transition duration-300 hover:text-neon">My Tracks</Link>
          </li>
          <li className="flex-1 text-center">
            <Link href="/contact" className="transition duration-300 hover:text-neon">Contact</Link>
          </li>
          <li className="flex-1 text-center">
            <Link href="/store" className="transition duration-300 hover:text-neon">Store</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}










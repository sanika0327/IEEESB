"use client";
import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";

const NavLink = ({ href, children, isScrolled }) => {
  return (
    <a
      href={href}
      className={`group relative px-4 transition-colors duration-300 ${
        isScrolled ? "text-black" : "text-white"
      }`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-1 w-0 h-[3px] transition-all duration-300 group-hover:w-full ${
          isScrolled ? "bg-black" : "bg-white"
        }`}
      />
    </a>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
        <a
          href="#"
          className={`text-2xl font-semibold transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          IEEE
        </a>
        <div className="flex items-center gap-8 font-semibold">
          <NavLink href="#overview" isScrolled={isScrolled}>
            OVERVIEW
          </NavLink>
          <NavLink href="#upcomingevents" isScrolled={isScrolled}>
            UPCOMING EVENTS
          </NavLink>
          <NavLink href="#pastevents" isScrolled={isScrolled}>
            PAST EVENTS
          </NavLink>
          <NavLink href="#achievements" isScrolled={isScrolled}>
            ACHIEVEMENTS
          </NavLink>
          <NavLink href="#gallery" isScrolled={isScrolled}>
            GALLERY
          </NavLink>
          <NavLink href="#committee" isScrolled={isScrolled}>
            COMMITTEE
          </NavLink>
        </div>
      </div>
    </div>
  );
}

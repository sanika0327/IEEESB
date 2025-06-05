<<<<<<< HEAD
"use client"

import { useState, useEffect } from "react"

const NavLink = ({ href, children, isScrolled, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link ${isScrolled ? "nav-link-scrolled" : "nav-link-transparent"}`}
    >
      {children}
      <span className={`nav-underline ${isScrolled ? "nav-underline-scrolled" : "nav-underline-transparent"}`} />
    </a>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
=======
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
>>>>>>> 0160395094f0145fa6ff2cf8da1fa7ecbd1117b2

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
<<<<<<< HEAD
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="navbar-container">
        <a href="#" className={`navbar-logo ${isScrolled ? "navbar-logo-scrolled" : "navbar-logo-transparent"}`}>
          IEEE
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-desktop">
=======
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
>>>>>>> 0160395094f0145fa6ff2cf8da1fa7ecbd1117b2
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
<<<<<<< HEAD

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`mobile-menu-button ${isScrolled ? "mobile-menu-button-scrolled" : "mobile-menu-button-transparent"}`}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`hamburger-line ${isScrolled ? "hamburger-line-scrolled" : "hamburger-line-transparent"} ${isMobileMenuOpen ? "hamburger-line-1-open" : ""}`}
          />
          <span
            className={`hamburger-line ${isScrolled ? "hamburger-line-scrolled" : "hamburger-line-transparent"} ${isMobileMenuOpen ? "hamburger-line-2-open" : ""}`}
          />
          <span
            className={`hamburger-line ${isScrolled ? "hamburger-line-scrolled" : "hamburger-line-transparent"} ${isMobileMenuOpen ? "hamburger-line-3-open" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"} ${isScrolled ? "mobile-menu-scrolled" : "mobile-menu-transparent"}`}
      >
        <div className="mobile-menu-content">
          <NavLink href="#overview" isScrolled={isScrolled} onClick={closeMobileMenu}>
            OVERVIEW
          </NavLink>
          <NavLink href="#upcomingevents" isScrolled={isScrolled} onClick={closeMobileMenu}>
            UPCOMING EVENTS
          </NavLink>
          <NavLink href="#pastevents" isScrolled={isScrolled} onClick={closeMobileMenu}>
            PAST EVENTS
          </NavLink>
          <NavLink href="#achievements" isScrolled={isScrolled} onClick={closeMobileMenu}>
            ACHIEVEMENTS
          </NavLink>
          <NavLink href="#gallery" isScrolled={isScrolled} onClick={closeMobileMenu}>
            GALLERY
          </NavLink>
          <NavLink href="#committee" isScrolled={isScrolled} onClick={closeMobileMenu}>
            COMMITTEE
          </NavLink>
        </div>
      </div>
    </div>
  )
=======
      </div>
    </div>
  );
>>>>>>> 0160395094f0145fa6ff2cf8da1fa7ecbd1117b2
}

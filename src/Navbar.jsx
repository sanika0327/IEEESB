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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      <div className="max-w-7xl mx-auto flex items-center py-4 px-8">
      <a href="#" className="relative h-14 w-44 overflow-visible flex items-center">
  <img
    src="/transieeelogo.png"
    alt="IEEE Logo"
    className="absolute top-1/2 left-0 h-56 w-auto object-contain -translate-y-1/2"
  />
</a>


        {/* Desktop Navigation */}
        <div className="navbar-desktop">
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
}
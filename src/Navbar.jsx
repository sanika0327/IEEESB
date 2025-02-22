"use client"

import { BsWhatsapp } from "react-icons/bs"

const NavLink = ({ href, children }) => {
  return (
    <a href={href} className="group relative px-4">
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-white text-black w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
        <a href="#" className="text-2xl font-semibold">
          KingSukh
        </a>
        <div className="flex items-center gap-8 font-semibold">
          <NavLink href="#about">ABOUT</NavLink>
          <NavLink href="#services">SERVICES</NavLink>
          <NavLink href="#rooms">ROOMS</NavLink>
          <NavLink href="#gallery">GALLERY</NavLink>
          <NavLink href="#contact">CONTACT</NavLink>
          <a href="https://api.whatsapp.com/send?phone=919007062180">
            <button className="bg-black text-white px-5 py-2 rounded-lg font-bold hover:bg-gray-700 flex items-center gap-2">
              <BsWhatsapp className="text-lg" />
              BOOK NOW
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}


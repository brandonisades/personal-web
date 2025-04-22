"use client"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    
    return(

<div>
        
<div className="flex h-[60px] px-6 sm:px-14 w-full bg-black text-white justify-between items-center">
            <div className="font-bold font-mono"> Brandon Isades Tjakradidjaja </div>
               {/* Hamburger Icon (mobile only) */}
            <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

            <div className={`sm:flex gap-4 text-sm font-bold ${isOpen? 'flex flex-col absolute top-[60px] right-0 bg-black w-full py-4 items-center z-50' : 'hidden sm:flex'  }`}>
            <Link href={"/"} onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">Hero</Link>
          <Link href={"/aboutme"} onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">About Me</Link>
          <Link href={"/skills"} onClick={() => setIsOpen(false)}className="hover:text-blue-500 transition" >Skills</Link>
          <Link href={"/Testimonials"} onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">Testimonials</Link>
          <Link href={"/contact"} onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">Contact</Link>
            </div>
        </div>
        </div>
    )
}
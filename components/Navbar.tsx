"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      backdrop-blur-md ${
        scrolled ? "shadow-md bg-black/30" : "bg-black/20"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/tlamachteloyan.png"
            alt="Tlamachteloyan"
            className="h-10 w-auto"
          />
        </Link>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
          <Link href="/" className="hover:text-green-400 transition">Inicio</Link>
          <Link href="/quienes-somos" className="hover:text-green-400 transition">Nosotros</Link>
          <Link href="/programas" className="hover:text-green-400 transition">Programas</Link>
          <Link href="/transparencia" className="hover:text-green-400 transition">Transparencia</Link>
          <Link href="/voluntariado" className="hover:text-green-400 transition">Voluntariado</Link>
          <Link href="/contacto" className="hover:text-green-400 transition">Contacto</Link>
        </nav>

        {/* BOTÓN DONAR */}
        <Link
          href="/donaciones"
          className="hidden md:block bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition"
        >
          Donar
        </Link>

        {/* BOTÓN MOBILE */}
        <button
          className="md:hidden text-xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 pb-6 flex flex-col gap-4 text-sm font-medium border-t">

          <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link href="/quienes-somos" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link href="/programas" onClick={() => setOpen(false)}>Programas</Link>
          <Link href="/transparencia" onClick={() => setOpen(false)}>Transparencia</Link>
          <Link href="/voluntariado" onClick={() => setOpen(false)}>Voluntariado</Link>
          <Link href="/contacto" onClick={() => setOpen(false)}>Contacto</Link>

          <Link
            href="/donaciones"
            className="text-green-400 font-semibold"
            onClick={() => setOpen(false)}
          >
            Donar
          </Link>

        </div>
      )}
    </header>
  );
}
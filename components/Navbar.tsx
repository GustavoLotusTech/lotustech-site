"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { href: "#services", label: "Serviços" },
    { href: "#about", label: "Sobre" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#faq", label: "Duvidas" },
    { href: "#contact", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Observa cada seção
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => {
      const el = document.querySelector(sec.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const whatsappNumber = "5511990149219";
  const whatsappMessage =
    "Olá, vi o site da LotusTech e gostaria de saber mais sobre os serviços.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 px-6 py-4 shadow-lg transition-all duration-500 
          ${scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-black/40 backdrop-blur-md"}
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gradient">
            <img
              src="/LotusTech_Logo.png"
              alt="Logo da empresa"
              className="h-12 w-auto"
            />
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition ${
                  activeSection === item.href
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400"
                }`}
              >
                {item.label}
                {/* underline animada */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                    activeSection === item.href ? "w-full" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}

            {/* CTA WhatsApp Desktop */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 px-4 py-2 rounded-lg font-semibold text-white flex items-center gap-2
                         bg-gradient-to-r from-green-500 to-green-600
                         hover:scale-105 hover:shadow-lg transition-all duration-300 animate-pulse"
            >
              <FaWhatsapp className="text-xl" />
              Fale Conosco
            </a>
          </div>

          {/* Botão menu mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links Mobile */}
        {open && (
          <div className="md:hidden bg-black/90 px-6 py-4 space-y-4">
            {sections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`relative block pb-1 transition ${
                  activeSection === item.href
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400"
                }`}
              >
                {item.label}
                {/* underline animada no mobile também */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                    activeSection === item.href ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Botão flutuante WhatsApp (Mobile only) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 md:hidden flex items-center justify-center 
                   w-14 h-14 rounded-full bg-green-500 text-white shadow-lg 
                   hover:scale-110 transition-transform duration-300 animate-bounce"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}

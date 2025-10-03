"use client";

import { FaWhatsapp, FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + mini bio */}
        <div>
          <img src="/LotusTech_Logo.png" alt="LotusTech Logo" className="h-12 mb-4" />
          <p className="text-sm">
            A LotusTech desenvolve soluções digitais sob medida para empresas que
            buscam inovação, eficiência e resultados reais.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-white font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-white">Serviços</a></li>
            <li><a href="#about" className="hover:text-white">Sobre</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfólio</a></li>
            <li><a href="#testimonials" className="hover:text-white">Depoimentos</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contato</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhone className="text-green-400" /> +55 (11) 99014-9219
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> contato@lotustecnologia.com.br
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500" /> WhatsApp disponível 24/7
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
          <div className="flex gap-4">
            <a href="https://instagram.com/lotustecnologiaoficial" target="_blank" className="hover:text-pink-400">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://wa.me/5511990149219" target="_blank" className="hover:text-green-400">
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} LotusTech. Todos os direitos reservados.
      </div>
    </footer>
  );
}

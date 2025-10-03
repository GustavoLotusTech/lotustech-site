"use client";

import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin, FaInstagram } from "react-icons/fa";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const whatsappNumber = "5511990149219";
  const whatsappMessage = "Olá, vi o site da LotusTech e gostaria de falar com a equipe.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="contact" className="bg-[#121212] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Entre em <span className="text-blue-400">Contato</span>
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          <Reveal direction="left">
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-blue-500/20 transition">
              <FaPhone className="text-green-400 text-3xl mb-3" />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-gray-300">+55 (11) 99014-9219</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-blue-500/20 transition">
              <FaEnvelope className="text-blue-400 text-3xl mb-3" />
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p className="text-gray-300">contato@lotustecnologia.com.br</p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-blue-500/20 transition">
              <FaLinkedin className="text-blue-500 text-3xl mb-3" />
              <h3 className="text-xl font-semibold mb-2">Redes Sociais</h3>
              <div className="flex gap-4 mt-2">
                <a href="https://www.linkedin.com/company/lotustecnologia" target="_blank" className="hover:text-blue-400">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href="https://instagram.com/lotustecnologiaoficial" target="_blank" className="hover:text-pink-400">
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-green-500 via-green-400 to-green-600
                       shadow-lg hover:shadow-green-500/40 hover:scale-105 active:scale-95
                       transition-all duration-300 text-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Fale Conosco no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

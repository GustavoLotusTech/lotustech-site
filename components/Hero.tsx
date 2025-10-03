"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const whatsappNumber = "5511990149219";
  const whatsappMessage =
    "Olá, vi o site da LotusTech e gostaria de solicitar uma proposta.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center min-h-screen bg-[#0a0a0a] text-white px-6"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Soluções Digitais com{" "}
        <span className="text-blue-400">
          <TypeAnimation
            sequence={["Inovação", 2000, "Agilidade", 2000, "Resultados", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Na LotusTech, desenvolvemos softwares sob medida para transformar ideias
        em soluções reais e escaláveis.
      </motion.p>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-3
                   bg-gradient-to-r from-green-500 via-green-400 to-green-600
                   shadow-lg hover:shadow-green-500/40
                   hover:scale-105 active:scale-95
                   transition-all duration-300 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <FaWhatsapp className="text-2xl" />
        Solicite uma Proposta
      </motion.a>
    </section>
  );
}

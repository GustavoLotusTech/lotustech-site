"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaWhatsapp } from "react-icons/fa";

export default function OfferModal() {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "5511990149219";
  const whatsappMessage =
    "Olá, vi a oferta no site da LotusTech e quero aproveitar!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 45000); // 45 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#121212] text-white max-w-md rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Oferta Especial 🚀
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center mt-2">
            Solicite sua proposta agora e receba um <span className="text-blue-400">diagnóstico gratuito</span> para o seu projeto.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center mt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-3
                       bg-gradient-to-r from-green-500 via-green-400 to-green-600
                       shadow-lg hover:shadow-green-500/40
                       hover:scale-105 active:scale-95
                       transition-all duration-300 text-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Fale no WhatsApp
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

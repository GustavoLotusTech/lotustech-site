"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  const whatsappNumber = "5511990149219";
  const whatsappMessage =
    "Olá, vi o FAQ no site da LotusTech e gostaria de esclarecer minhas dúvidas.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="faq" className="py-20 bg-background text-foreground px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Perguntas <span className="text-blue-400">Frequentes</span>
          </h2>
        </Reveal>

        <Accordion type="single" collapsible className="w-full text-left">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quanto custa um sistema sob medida?
            </AccordionTrigger>
            <AccordionContent>
              O valor varia conforme a complexidade e funcionalidades
              necessárias. Podemos analisar seu caso e montar uma proposta
              personalizada.
              <div className="mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white
                             bg-gradient-to-r from-green-500 to-green-600
                             hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm"
                >
                  <FaWhatsapp className="text-lg" />
                  Solicitar Orçamento
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Quanto tempo leva para desenvolver um projeto?
            </AccordionTrigger>
            <AccordionContent>
              Depende do escopo, mas geralmente entregamos soluções em poucas
              semanas, sempre com prazos realistas e alinhados.
              <div className="mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white
                             bg-gradient-to-r from-green-500 to-green-600
                             hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm"
                >
                  <FaWhatsapp className="text-lg" />
                  Falar com um Especialista
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Vocês oferecem suporte após a entrega?
            </AccordionTrigger>
            <AccordionContent>
              Sim! Oferecemos manutenção contínua e suporte técnico para garantir
              que tudo funcione perfeitamente.
              <div className="mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white
                             bg-gradient-to-r from-green-500 to-green-600
                             hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm"
                >
                  <FaWhatsapp className="text-lg" />
                  Quero Suporte
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

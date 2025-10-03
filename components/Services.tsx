"use client";

import { Code, Smartphone, Layers, Settings } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-blue-400" />,
      title: "Desenvolvimento Sob Medida",
      description: "Criamos softwares para atender às necessidades do seu negócio.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-400" />,
      title: "Aplicativos Mobile",
      description: "Aplicativos modernos e responsivos usando as melhores tecnologias para Android e iOS",
    },
    {
      icon: <Layers className="w-10 h-10 text-blue-400" />,
      title: "Integrações e APIs",
      description: "Conectamos sistemas e criamos APIs escaláveis para maior eficiência, disponiblidade e integridade",
    },
    {
      icon: <Settings className="w-10 h-10 text-blue-400" />,
      title: "Suporte e Manutenção",
      description: "Garantimos que seu sistema esteja sempre atualizado, seguro e otimizado.",
    },
  ];

  return (
    <section id="services" className="bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Nossos <span className="text-blue-400">Serviços</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.2} direction="up">
              <div className="bg-[#121212] p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

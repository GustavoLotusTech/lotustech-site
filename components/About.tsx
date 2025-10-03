"use client";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-[#121212] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre a <span className="text-blue-400">LotusTech</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Somos uma empresa especializada em desenvolvimento de software sob medida,
            com foco em criar soluções digitais inovadoras que impulsionam negócios.
            Nosso compromisso é unir tecnologia, design e estratégia para entregar
            produtos de alta qualidade.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Reveal direction="left">
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-semibold mb-2">Missão</h3>
              <p className="text-gray-400 text-sm">
                Transformar ideias em soluções tecnológicas que geram impacto real.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-semibold mb-2">Visão</h3>
              <p className="text-gray-400 text-sm">
                Ser referência no mercado de software sob medida, com foco em inovação e resultados.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.4}>
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-semibold mb-2">Valores</h3>
              <p className="text-gray-400 text-sm">
                Inovação, transparência, agilidade e foco total no sucesso dos clientes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

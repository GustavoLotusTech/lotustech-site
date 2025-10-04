"use client";

import Reveal from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Empresária",
    text: "A LotusTech trouxe inovação e praticidade para o meu negócio. Recomendo demais!",
    image: "/clientes/ana.png",
  },
  {
    name: "Carlos Oliveira",
    role: "CEO - StartupX",
    text: "Profissionais atenciosos e um sistema robusto. Superaram as expectativas.",
    image: "/clientes/carlos.png",
  },
  {
    name: "Mariana Santos",
    role: "Gestora de Projetos",
    text: "Entrega no prazo e suporte excepcional. Com certeza vamos continuar juntos.",
    image: "/clientes/mariana.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[#121212]">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-12">
            O que dizem nossos clientes
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx * 0.2} direction={idx % 2 === 0 ? "up" : "right"}>
              <Card className="p-6 rounded-2xl shadow-md">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{t.name}</h3>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    &quot;{t.text}&quot;
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

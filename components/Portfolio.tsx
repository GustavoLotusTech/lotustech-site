"use client";

import Reveal from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Sistema de Gestão Financeira",
    description: "Aplicação em .NET para controle de custos e relatórios em tempo real.",
    image: "/mockups/FinancialManagementSystem.png",
    techs: ["C#", ".NET", "SQL Server", "Next.js"],
  },
  {
    title: "Dashboard de Vendas",
    description: "Dashboard interativo em React e Power BI para análise de performance.",
    image: "/mockups/DashboardVendas.png",
    techs: ["React", "Power BI", "API REST", ".NET"],
  },
  {
    title: "Aplicativo Mobile",
    description: "App/loja virtual híbrida para pedidos online com backend escalável.",
    image: "/mockups/AplicativoMobile.png",
    techs: ["React Native", "Node.js", "MongoDB", ".NET"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-background">
      <div className="container mx-auto px-6 ">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-12">
            Nosso Portfólio
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 0.2} direction={idx % 2 === 0 ? "left" : "right"}>
              <Card className="bg-card border border-border shadow-lg text-card-foreground">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl mb-4"
                  />
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

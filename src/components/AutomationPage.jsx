"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import "../styles/project.scss";

export default function AutomationPage({ number, image }) {
  const { language } = useLanguage();

  const text = {
    en: {
      back: "Back to portfolio",
      kicker: "Project",
      title: `Automation ${number}`,
      description: "This page is ready to receive the automation details: solved problem, technologies used, process impact and final images. Later, this text can be edited to match the specific project.",
    },
    pt_br: {
      back: "Voltar ao portfólio",
      kicker: "Projeto",
      title: `Automação ${number}`,
      description: "Esta página está pronta para receber os detalhes da automação: problema resolvido, tecnologias utilizadas, impacto no processo e imagens finais. Depois, este texto pode ser editado para combinar com o projeto específico.",
    },
  };

  return (
    <main className="project-page">
      <section className="project-hero">
        <div className="project-copy">
          <Link href="/#my-projects" className="back-link">{text[language].back}</Link>
          <span className="project-kicker">{text[language].kicker} {String(number).padStart(2, "0")}</span>
          <h1>{text[language].title}</h1>
          <p>{text[language].description}</p>
        </div>
        <div className="project-image">
          <Image src={image} alt={`${text[language].title} imagem`} width={900} height={620} priority />
        </div>
      </section>
    </main>
  );
}

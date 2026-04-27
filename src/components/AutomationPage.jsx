"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import "../styles/project.scss";

export default function AutomationPage({
  number,
  image,
  content,
  repositoryUrl = "https://github.com/filipeomendes",
}) {
  const { language } = useLanguage();

  const defaultText = {
    en: {
      back: "Back to portfolio",
      repositoryButton: "View source code repository",
      title: `Automation ${number}`,
      description: "This page is ready to receive the automation details: solved problem, technologies used, process impact and final images. Later, this text can be edited to match the specific project.",
    },
    pt_br: {
      back: "Voltar ao portfólio",
      repositoryButton: "Ver repositório do código fonte",
      title: `Automação ${number}`,
      description: "Esta página está pronta para receber os detalhes da automação: problema resolvido, tecnologias utilizadas, impacto no processo e imagens finais. Depois, este texto pode ser editado para combinar com o projeto específico.",
    },
  };

  const currentText = {
    ...defaultText[language],
    ...(content?.[language] ?? {}),
  };

  const descriptionParagraphs = Array.isArray(currentText.description)
    ? currentText.description
    : [currentText.description];

  return (
    <main className="project-page">
      <section className="project-cover">
        <Image src={image} alt={`${currentText.title} imagem`} width={1800} height={720} priority />
        <div className="project-cover-content">
          <h1>{currentText.title}</h1>
        </div>
      </section>

      <section className="project-hero">
        <Link href="/#my-projects" className="back-link">{currentText.back}</Link>

        <div className="project-description">
          {descriptionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <a
          className="repository-button"
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {currentText.repositoryButton}
        </a>
      </section>
    </main>
  );
}

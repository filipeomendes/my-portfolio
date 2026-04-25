'use client';

import "../styles/home.scss";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const idiom = {
    en: {
      helloText: "Hello, my name is",
      aboutMeTitle: "Filipe Mendes",
      aboutMeSubsequentTitle: "Full-stack developer focused on automation.",
      aboutMeText: "I build practical automations and web experiences that turn repetitive workflows into clear, reliable systems. This portfolio brings together projects designed to save time, reduce manual work and make teams move with more confidence.",
      myProjectsTitle: "Automation portfolio",
      aboutMeButton: "Explore automations",
      moreAboutMeTitle: "How I work",
      moreAboutMeText: "I build automation solutions that simplify operations and save time. My approach is to first understand how your process actually works, where time is lost, where errors happen, and what can be improved and from there, I design clean, efficient systems that run reliably in the background and deliver real, measurable results. The goal is simple: less manual work, fewer mistakes, and more time to focus on what really matters.",
    },
    pt_br: {
      helloText: "Olá, meu nome é",
      aboutMeTitle: "Filipe Mendes",
      aboutMeSubsequentTitle: "Desenvolvedor full-stack focado em automações.",
      aboutMeText: "Eu crio automações práticas e experiências web que transformam tarefas repetitivas em sistemas claros e confiáveis. Este portfólio reúne projetos pensados para economizar tempo, reduzir trabalho manual e dar mais segurança aos processos.",
      myProjectsTitle: "Portfólio de automações",
      aboutMeButton: "Ver automações",
      moreAboutMeTitle: "Como eu trabalho",
      moreAboutMeText: "Eu desenvolvo soluções de automação que simplificam processos e economizam tempo. Meu foco é entender como o seu processo realmente funciona, onde há perda de tempo, onde acontecem erros e o que pode ser melhorado e a partir disso, crio sistemas simples, eficientes e confiáveis, que funcionam em segundo plano e geram resultados reais. O objetivo é simples: menos trabalho manual, menos erros e mais tempo para focar no que realmente importa.",
    },
  };

  const automations = [
    { title: "Automação 1", image: "/projeto1.jpg", href: "/projects/projeto1" },
    { title: "Automação 2", image: "/projeto2.jpg", href: "/projects/projeto2" },
    { title: "Automação 3", image: "/projeto3.jpg", href: "/projects/projeto3" },
    { title: "Automação 4", image: "/projeto4.jpg", href: "/projects/projeto4" },
    { title: "Automação 5", image: "/projeto5.jpg", href: "/projects/projeto5" },
    { title: "Automação 6", image: "/projeto6.jpg", href: "/projects/projeto6" },
  ];

  return (
    <main>
      <section className="about-me" id="about-me">
        <div className="about-me-text">
          <p>{idiom[language].helloText}</p>
          <h1>{idiom[language].aboutMeTitle}</h1>
          <h3>{idiom[language].aboutMeSubsequentTitle}</h3>
          <p>{idiom[language].aboutMeText}</p>
          <a className="botao-conferir" href="#my-projects">{idiom[language].aboutMeButton}</a>
        </div>
        <div className="my-photo-div">
          <Image src="/photo-filipe.png" alt="Filipe Mendes" width={500} height={500} priority />
        </div>
      </section>

      <section className="more-about-me" id="to-get-here">
        <div className="more-about-me-title">
          <h2>{idiom[language].moreAboutMeTitle}</h2>
        </div>
        <div className="more-about-me-text">
          <p>{idiom[language].moreAboutMeText}</p>
        </div>
      </section>

      <section className="my-projects" id="my-projects">
        <div className="my-projects-title">
          <h2>{idiom[language].myProjectsTitle}</h2>
        </div>
        <div className="my-projects-div">
          {automations.map((automation, index) => (
            <Link href={automation.href} className="my-projects-card" key={automation.title}>
              <span className="card-image">
                <Image src={automation.image} alt={`${automation.title} imagem`} width={640} height={420} />
              </span>
              <span className="card-content">
                <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{automation.title}</h3>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

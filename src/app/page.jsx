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
      techStackTitle: "Technologies I work with",
      contactTitle: "Get in touch",
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
      techStackTitle: "Tecnologias que utilizo",
      contactTitle: "Entre em contato",
    },
  };

  const automations = [
    {
      title: { en: "Attendance Integration System", pt_br: "Sistema de Integração de Relatórios de Ponto." },
      image: "/projeto1.jpg",
      href: "/projects/projeto1",
    },
    {
      title: { en: "Financial Statement Extraction Automation", pt_br: "Automação de Extração de Declarações Financeiras" },
      image: "/projeto2.jpg",
      href: "/projects/projeto2",
    },
    {
      title: { en: "XML to Excel Converter", pt_br: "Conversor de XML para Excel" },
      image: "/projeto3.jpg",
      href: "/projects/projeto3",
    },
    {
      title: { en: "Document Generator", pt_br: "Gerador de Documentos" },
      image: "/projeto4.jpg",
      href: "/projects/projeto4",
    },
    {
      title: { en: "PDF Splitting Automation", pt_br: "Automação de Separação de PDFs" },
      image: "/projeto5.jpg",
      href: "/projects/projeto5",
    },
    {
      title: { en: "Excel to ERP Integration", pt_br: "Integração de Excel com ERP" },
      image: "/projeto6.jpg",
      href: "/projects/projeto6",
    },
  ];

  const techLogos = [
    { name: "Python", image: "/python.png" },
    { name: "React.js", image: "/reactjs.png" },
    { name: "JavaScript", image: "/javascript.png" },
    { name: "HTML", image: "/html.png" },
    { name: "SQL", image: "/database.png" },
    { name: "C Sharp", image: "/csharp.png" },
    { name: "Java", image: "/java.png" },
    { name: "Docker", image: "/docker.png" },
    { name: "Kotlin", image: "/kotlin.png" },
    { name: "TypeScript", image: "/typescript.png" },
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
          <Image src="/photo-filipe.png" alt="Filipe Mendes" width={640} height={640} priority />
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
            <Link href={automation.href} className="my-projects-card" key={automation.href}>
              <span className="card-image">
                <Image src={automation.image} alt={`${automation.title[language]} imagem`} width={640} height={420} />
              </span>
              <span className="card-content">
                <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{automation.title[language]}</h3>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="tech-stack" id="tech-stack">
        <div className="tech-stack-title">
          <h2>{idiom[language].techStackTitle}</h2>
        </div>
        <div className="tech-stack-grid">
          {techLogos.map((logo) => (
            <div className="tech-logo-card" key={logo.name}>
              <Image src={logo.image} alt={`${logo.name} logo`} width={120} height={120} />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2>{idiom[language].contactTitle}</h2>
        <a href="mailto:filipedeoliveiramendes@gmail.com">filipedeoliveiramendes@gmail.com</a>
      </section>
    </main>
  );
}

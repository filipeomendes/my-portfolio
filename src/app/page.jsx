'use client';

import "../styles/home.scss";
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "../context/LanguageContext";

export default function Home() {

  const { language } = useLanguage();

  const idiom = {
    en: {
      helloText: "Hello, my name is",
      aboutMeTitle: "Filipe Mendes",
      aboutMeSubsequentTitle: "I'm a full-stack developer.",
      aboutMeText: "I'm an enthusiastic and curious individual with a passion for exploring new technologies and ideas. I have always been fascinated by the way things work, whether it's understanding the mechanics behind a new app or diving into the world of coding. With a background in software development, I enjoy building projects that challenge me to think critically and creatively.",
      myProjectsTitle: "My projects",
      projectName: "Project 1",
      projectDescription: "This project was build to automate a process in the payroll team...",
      aboutMeButton: "Check my projetcs"
    },
    pt_br: {
      helloText: "Olá, meu nome é",
      aboutMeTitle: "Filipe Mendes",
      aboutMeSubsequentTitle: "Desenvolvedor full-stack.",
      aboutMeText: "Sou uma pessoa entusiasta e curiosa, com paixão por explorar novas tecnologias e ideias. Sempre me fascinou entender como as coisas funcionam, seja compreendendo a mecânica de um novo app ou mergulhando no mundo da programação. Com formação em desenvolvimento de software, gosto de criar projetos que me desafiem a pensar de forma crítica e criativa.",
      myProjectsTitle: "Meus projetos",
      projectName: "Projeto 1",
      projectDescription: "Este projeto foi criado para automatizar um processo na equipe de folha de ...",
      aboutMeButton: "Confira meus projetos"
    }
  }

  return (
    <main>
      <section className="about-me">
        <div className="about-me-text">
          <p>{idiom[language].helloText}</p>
          <h1>{idiom[language].aboutMeTitle}</h1>
          <h3>{idiom[language].aboutMeSubsequentTitle}</h3>
          <p>{idiom[language].aboutMeText}</p>
          <div className="botao-conferir">
            <p>{idiom[language].aboutMeButton}</p>
          </div>
        </div>
        <div className="my-photo-div">
          <Image src="/photo-filipe.png" alt="Black Github logo" width={500} height={500}/>
        </div>
      </section>
      <section className="my-projects">
        <div className="my-projects-title">
          <h2>{idiom[language].myProjectsTitle}</h2>
        </div>
        <div className="my-projects-div">
          <Link href="/projects/projeto1">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto1.jpg" alt="projeto 1 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>{idiom[language].projectName}</h3>
                  <p>{idiom[language].projectDescription}</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/projeto1">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto2.jpg" alt="projeto 1 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>{idiom[language].projectName}</h3>
                  <p>{idiom[language].projectDescription}</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/projeto1">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto3.jpg" alt="projeto 1 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>{idiom[language].projectName}</h3>
                  <p>{idiom[language].projectDescription}</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/projeto1">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto4.jpg" alt="projeto 1 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>{idiom[language].projectName}</h3>
                  <p>{idiom[language].projectDescription}</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/projeto1">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto1.jpg" alt="projeto 1 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>{idiom[language].projectName}</h3>
                  <p>{idiom[language].projectDescription}</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/projeto1">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto2.jpg" alt="projeto 1 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>{idiom[language].projectName}</h3>
                  <p>{idiom[language].projectDescription}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="more-about-me">
        <div className="more-about-me-title">
          <h2>{idiom[language].myProjectsTitle}</h2>
        </div>
        <div className="more-about-me-text">
          <p>{idiom[language].aboutMeText}</p>
        </div>
      </section>
    </main>
  );
}
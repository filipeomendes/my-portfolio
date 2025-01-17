'use client';

import "../styles/home.scss";
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "../context/LanguageContext";

export default function Home() {

  const { language } = useLanguage();

  const idiom = {
    en: {
      aboutMeTitle: "About me",
      aboutMeText: "Hi, I'm John, an enthusiastic and curious individual with a passion for exploring new technologies and ideas. I have always been fascinated by the way things work, whether it's understanding the mechanics behind a new app or diving into the world of coding. With a background in software development, I enjoy building projects that challenge me to think critically and creatively. When I'm not coding, you can find me reading books on personal development or enjoying outdoor activities. I'm always looking for ways to grow both personally and professionally, and I thrive on collaborating with others to create innovative solutions. My goal is to continue learning and make meaningful contributions to the tech world.",
      myProjectsTitle: "My projects",
      projectName: "Project 1",
      projectDescription: "This project was build to automate a process in the payroll team..."
    },
    pt_br: {
      aboutMeTitle: "Sobre mim",
      aboutMeText: "Olá, eu sou o John, uma pessoa entusiasmada e curiosa, com paixão por explorar novas tecnologias e ideias. Sempre fui fascinado por entender como as coisas funcionam, seja compreendendo as mecânicas por trás de um novo aplicativo ou mergulhando no mundo da programação. Com formação em desenvolvimento de software, gosto de trabalhar em projetos que me desafiam a pensar de forma crítica e criativa. Quando não estou programando, você pode me encontrar lendo livros sobre desenvolvimento pessoal ou aproveitando atividades ao ar livre. Estou sempre em busca de maneiras de crescer, tanto pessoal quanto profissionalmente, e adoro colaborar com outras pessoas para criar soluções inovadoras. Meu objetivo é continuar aprendendo e contribuir de forma significativa para o mundo da tecnologia.",
      myProjectsTitle: "Meus projetos",
      projectName: "Projeto 1",
      projectDescription: "Este projeto foi criado para automatizar um processo na equipe de folha de pagamento..."
    }
  }

  return (
    <main>
      <section className="my-photo">
        <div className="my-photo-div">
          <Image src="/photo-filipe.png" alt="Black Github logo" width={150} height={150}/>
        </div>
      </section>
      <section className="about-me">
        <div className="about-me-title">
          <h1>{idiom[language].aboutMeTitle}</h1>
        </div>
        <div className="about-me-text">
          <p>{idiom[language].aboutMeText}</p>
        </div>
      </section>
      <section className="my-projects">
        <div className="my-projects-title">
          <h1>{idiom[language].myProjectsTitle}</h1>
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
          <Link href="/projects/projeto2">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto2.jpg" alt="projeto 2 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>NOME PROJETO</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adi...</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/projeto3">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto3.jpg" alt="projeto 3 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>NOME PROJETO</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adi...</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/projeto4">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto4.jpg" alt="projeto 4 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>NOME PROJETO</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adi...</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
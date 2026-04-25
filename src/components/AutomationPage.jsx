import Image from "next/image";
import Link from "next/link";
import "../styles/project.scss";

export default function AutomationPage({ number, image }) {
  const title = `Automação ${number}`;

  return (
    <main className="project-page">
      <section className="project-hero">
        <div className="project-copy">
          <Link href="/#my-projects" className="back-link">Voltar ao portfólio</Link>
          <span className="project-kicker">Projeto {String(number).padStart(2, "0")}</span>
          <h1>{title}</h1>
          <p>
            Esta página está pronta para receber os detalhes da automação: problema resolvido,
            tecnologias utilizadas, impacto no processo e imagens finais.
          </p>
        </div>
        <div className="project-image">
          <Image src={image} alt={`${title} imagem`} width={900} height={620} priority />
        </div>
      </section>
    </main>
  );
}

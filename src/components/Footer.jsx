import "../styles/footer.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="my-social-media">
      <div className="social-media">
        <nav className="social-media-nav" aria-label="Social media">
          <a href="https://github.com/filipeomendes" target="_blank" rel="noopener noreferrer">
            <Image src="/github-black.png" alt="Github" width={34} height={34} />
          </a>
          <a href="filipedeoliveiramendes@gmail.com">
            <Image src="/email-black.png" alt="Email" width={34} height={34} />
          </a>
          <a href="https://www.linkedin.com/in/filipedeoliveiramendes/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin-black.png" alt="LinkedIn" width={34} height={34} />
          </a>
        </nav>
      </div>
      <div className="copyright">
        <p>Developed by Filipe de Oliveira Mendes</p>
        <p>All rights reserved ©2026</p>
      </div>
    </footer>
  );
}

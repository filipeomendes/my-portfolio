import Image from "next/image"

export default function Footer(){
    return(
        <footer>
            <div className="social-media">
                <nav className="social-media-nav">
                    <a href="https://github.com/filipeomendes"><Image src="/github-black.png" alt="Black Github logo" width={40} height={40}/></a>
                    <a href="https://www.instagram.com/codigoestagiario/"><Image src="/instagram-black.png" alt="Black Instagram logo" width={40} height={40}/></a>
                    <a href="https://www.linkedin.com/in/filipedeoliveiramendes/"><Image src="/linkedin-black.png" alt="Black LinkedIn logo" width={40} height={40}/></a>
                </nav>
            </div>
            <div className="copyright">
                <p className="copyright-text">All rights reserved ©2025 - Filipe de Oliveira Mendes</p>
            </div>
        </footer>
    );
}
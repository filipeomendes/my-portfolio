"use client";

import "../styles/header.scss";
import Image from "next/image"
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export default function Header(){

    const {language, changeLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return(
        <header className={isMenuOpen ? "menu-open" : ""}>
            <div className="header-bar">
                <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Image
                        src={isMenuOpen ? "/close.png" : "/menu.png"}
                        alt={isMenuOpen ? "Close menu" : "Open menu"}
                        width={24}
                        height={24}
                    />
                </div>
            </div>
            <div className="menu-content">
                <div className="items">
                    <nav>
                    <a href="#about-me">{language === "en" ? "About Me" : "Sobre Mim"}</a>
                    <a href="#my-projects">{language === "en" ? "My Projects" : "Meus Projetos"}</a>
                    <a href="#to-get-here">{language === "en" ? "To Get Here" : "Chegar Até Aqui"}</a>
                    <a href="#my-social-media">{language === "en" ? "My Social Media" : "Minhas Redes Sociais"}</a>
                    </nav>
                </div>
                <div className="language">
                    <div className="language-text">
                        <p>{language === "en" ? "Language:" : "Idioma:"}</p>
                    </div>
                    <div className="language-icons">
                        <Image
                            src="/english.png"
                            alt="United Kingdom flag button to set the page in English"
                            width={30}
                            height={30}
                            onClick={() => changeLanguage("en")}/>
                        <Image
                            src="/br-portuguese.png"
                            alt="Brazilian flag button to set the page in Portuguese"
                            width={30}
                            height={30}
                            onClick={() => changeLanguage("pt_br")}/>
                    </div>
                </div>
            </div>
        </header>
    );
}
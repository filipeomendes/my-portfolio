"use client";

import "../styles/header.scss";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme ? savedTheme === "dark" : true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const isHome = pathname === "/";
  const getSectionHref = (sectionId) => `${isHome ? "" : "/"}#${sectionId}`;

  const links = [
    { href: getSectionHref("about-me"), label: language === "en" ? "About" : "Sobre" },
    { href: getSectionHref("to-get-here"), label: language === "en" ? "Process" : "Processo" },
    { href: getSectionHref("my-projects"), label: language === "en" ? "Automations" : "Automações" },
    { href: getSectionHref("contact"), label: language === "en" ? "Contact" : "Contato" },
    { href: getSectionHref("my-social-media"), label: language === "en" ? "Social" : "Redes" },
  ];

  const toggleTheme = () => setIsDarkMode((currentTheme) => !currentTheme);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${isMenuOpen ? "menu-open" : ""} ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="header-bar">
        <a className="brand" href={getSectionHref("about-me")} onClick={closeMenu}>FM</a>

        <button
          className="menu-icon"
          type="button"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <Image
            src={isMenuOpen ? "/close.png" : "/menu.png"}
            alt=""
            width={24}
            height={24}
          />
        </button>

        <div className="menu-content">
          <nav className="items" aria-label="Main navigation">
            {links.map((link) => (
              <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>
            ))}
          </nav>

          <div className="language-and-theme">
            <div className="language" aria-label={language === "en" ? "Language" : "Idioma"}>
              <button
                type="button"
                className={language === "en" ? "active" : ""}
                onClick={() => changeLanguage("en")}
                aria-label="Set language to English"
              >
                <Image src="/english.png" alt="" width={24} height={24} />
              </button>
              <button
                type="button"
                className={language === "pt_br" ? "active" : ""}
                onClick={() => changeLanguage("pt_br")}
                aria-label="Definir idioma para português"
              >
                <Image src="/br-portuguese.png" alt="" width={24} height={24} />
              </button>
            </div>

            <button className="theme-switcher" type="button" onClick={toggleTheme}>
              <span className="theme-icon">
                <Image
                  src={isDarkMode ? "/sun.png" : "/moon.png"}
                  alt=""
                  width={18}
                  height={18}
                />
              </span>
              <span className={`theme-switch ${isDarkMode ? "dark" : "light"}`}>
                <span className="slider"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

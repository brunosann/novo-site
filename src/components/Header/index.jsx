import { useContext, useEffect, useState } from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitch,
  FaTwitterSquare,
} from "react-icons/fa";

import logoImg from "../../assets/images/logo.svg";
import { GlobalContext } from "../../contexts/GlobalStorage";
import styles from "./styles.module.scss";

export const Header = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const { setMenuActive } = useContext(GlobalContext);

  const handleSectionLink = (e) => {
    e.preventDefault();
    const target = e.target.dataset.target;
    const menuToActivate = e.target.dataset.menuActive;
    const element = document.querySelector(target);
    if (menuToActivate) setMenuActive(menuToActivate);
    setIsMenuBarOpen(false);
    element.scrollIntoView();
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isMenuBarOpen && body) body.style.overflow = "hidden";
    else if (!isMenuBarOpen && body) body.style.overflow = "";
  }, [isMenuBarOpen]);

  return (
    <header>
      <nav className="container">
        <div className={styles.headerContainer}>
          <button className={styles.brand}>
            <img src={logoImg} alt="logo" />
          </button>
          <button
            className={`${styles.menuBar} ${
              isMenuBarOpen ? styles.active : ""
            }`}
            onClick={() => setIsMenuBarOpen(!isMenuBarOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
          <ul className={`${styles.ul} ${isMenuBarOpen ? styles.open : ""}`}>
            <li>
              <a
                href="#portfolio"
                data-target="#portfolio"
                className={`${styles.buttonLink} ${
                  isMenuBarOpen ? styles.open : ""
                }`}
                onClick={handleSectionLink}
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                data-target="#about"
                data-menu-active="aboutMe"
                className={`${styles.buttonLink} ${
                  isMenuBarOpen ? styles.open : ""
                }`}
                onClick={handleSectionLink}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                data-target="#about"
                data-menu-active="skills"
                className={`${styles.buttonLink} ${
                  isMenuBarOpen ? styles.open : ""
                }`}
                onClick={handleSectionLink}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#skills"
                data-target="#about"
                data-menu-active="services"
                className={`${styles.buttonLink} ${
                  isMenuBarOpen ? styles.open : ""
                }`}
                onClick={handleSectionLink}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#contact"
                data-target="#contact"
                className={`${styles.buttonLink} ${
                  isMenuBarOpen ? styles.open : ""
                }`}
                onClick={handleSectionLink}
              >
                Contato
              </a>
            </li>
            <li className={styles.socials}>
              <a
                href="https://www.linkedin.com/in/bruno-teixeira-920661142"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/Bruno_ts13"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="https://github.com/brunosann"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.twitch.tv/bruneradev"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTwitch />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

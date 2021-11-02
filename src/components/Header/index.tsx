import { useEffect, useState } from "react";
import { FaGithubSquare, FaLinkedin, FaTwitch, FaTwitterSquare } from "react-icons/fa";

import logoImg from "../../assets/images/logo.svg";
import styles from "./styles.module.scss";

export const Header = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body")
    if (isMenuBarOpen && body) body.style.overflow = 'hidden';
    else if (!isMenuBarOpen && body) body.style.overflow = ''
  }, [isMenuBarOpen])

  return (
    <header>
      <nav className="container">
        <div className={styles.headerContainer}>
          <button className={styles.brand}>
            <img src={logoImg} alt="logo" />
          </button>
          <button
            className={`${styles.menuBar} ${isMenuBarOpen ? styles.active : ""}`}
            onClick={() => setIsMenuBarOpen(!isMenuBarOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
          <ul className={`${styles.ul} ${isMenuBarOpen ? styles.open : ""}`}>
            <li>
              <button
                className={`${styles.buttonLink} ${isMenuBarOpen ? styles.open : ""}`}
              >
                Portfólio
              </button>
            </li>
            <li>
              <button
                className={`${styles.buttonLink} ${isMenuBarOpen ? styles.open : ""}`}
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                className={`${styles.buttonLink} ${isMenuBarOpen ? styles.open : ""}`}
              >
                Habilidades
              </button>
            </li>
            <li>
              <button
                className={`${styles.buttonLink} ${isMenuBarOpen ? styles.open : ""}`}
              >
                Contato
              </button>
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

import { useContext } from "react";
import styles from "./styles.module.scss";
import imgLogo from "../../assets/images/logo.svg";
import { GlobalContext } from "../../contexts/GlobalStorage";

export const Footer = () => {
  const { handleSectionLink } = useContext(GlobalContext);

  return (
    <footer>
      <article className={styles.menu}>
        <div className="container">
          <nav>
            <a href="#" className={styles.brand}>
              <img src={imgLogo} alt="logo" />
            </a>
            <ul className={styles.list}>
              <li>
                <a
                  href="#portfolio"
                  data-target="#portfolio"
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
                  onClick={handleSectionLink}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  data-target="#contact"
                  onClick={handleSectionLink}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </article>

      <article className={styles.copy}>
        <p>©2021. Bruno Teixeira Dev. All Rigths Reserved.</p>
      </article>
    </footer>
  );
};

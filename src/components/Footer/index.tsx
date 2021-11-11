import styles from "./styles.module.scss";
import imgLogo from '../../assets/images/logo.svg'

export const Footer = () => {
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
                <a href="#">Portfólio</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Habilidades</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </article>

      <article className={styles.copy}>
        <p>
          ©2021. Bruno Teixeira Dev. All Rigths Reserved.
        </p>
      </article>
    </footer>
  )
}

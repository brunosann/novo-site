import { MdDesktopMac } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import styles from "./styles.module.scss";

export const Services = ({ menuActive }) => {
  return (
    <article
      className={`${styles.services} ${
        menuActive == "services" && styles.active
      }`}
    >
      <div className={styles.card}>
        <MdDesktopMac />
        <h3>Desenvolvimento de sistemas</h3>
        <p>
          Criação de sites e sistemas podendo atuar no desenvolvimento frontend
          e backend de aplicacões web
        </p>
      </div>
      <div className={styles.card}>
        <BsCodeSlash />
        <h3>Código bem estruturado</h3>
        <p>
          Codificação seguindo bons padrões de desenvolvimento, com a finalidade
          de buscar melhor perfomance do sistema
        </p>
      </div>
      <div className={styles.card}>
        <ImMobile />
        <h3>Responsividade</h3>
        <p>
          Disposição dos elementos e o conteúdo se adaptam de acordo com o
          tamanho da tela do dispositivo do usuário,com objetivo de melhorar a
          experiência.
        </p>
      </div>
    </article>
  );
};

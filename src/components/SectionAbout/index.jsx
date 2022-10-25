import { useContext } from "react";
import styles from "./styles.module.scss";
import bannerAboutImg from "../../assets/images/image-about.png";
import { Skills } from "./Skills";
import { Services } from "./Services";
import { GlobalContext } from "../../contexts/GlobalStorage";

export const SectionAbout = () => {
  const { menuActive, setMenuActive } = useContext(GlobalContext);

  return (
    <section id="about" className={styles.sectionAbout}>
      <div className="container">
        <h2>Sobre Mim</h2>
        <article className={styles.contentAbout}>
          <nav>
            <ul>
              <li className={menuActive == "aboutMe" ? styles.active : ""}>
                <button onClick={() => setMenuActive("aboutMe")}>Sobre</button>
              </li>
              <li className={menuActive == "skills" ? styles.active : ""}>
                <button onClick={() => setMenuActive("skills")}>Skills</button>
              </li>
              <li className={menuActive == "services" ? styles.active : ""}>
                <button onClick={() => setMenuActive("services")}>
                  Serviços
                </button>
              </li>
            </ul>
          </nav>

          <article
            className={`${styles.aboutMe} ${
              menuActive == "aboutMe" && styles.active
            }`}
          >
            <div className={styles.boxImg}>
              <img src={bannerAboutImg} alt="imagem programando" />
            </div>
            <article className={styles.boxText}>
              <h4>Um pouco sobre mim.</h4>
              <p>
                Me chamo Bruno Teixeira, tenho 25 anos e sou apaixonado por esse
                mundo da tecnologia desde criança, comecei minha jornada com
                programação lá em 2018, com o curso da B7Web como hobbie, passei
                1 ano e meio estudando nessa plataforma tecnologias como HTML,
                CSS, PHP e JavaScript sempre colocando o'que vinha aprendendo em
                prática em projetos particulares e de hobbies.
                <br />
                <br />
                Após esse período adquiri um curso para focar só em FRONT-END
                que foi o curso do André da Origamid, estudando a fundo
                JavaScript e CSS e também onde aprendi ReactJS e técnicas de
                usabilidade e de Design.
                <br />
                <br />
                Sempre amei essa área e sigo me aprimorando a cada dia.
                <br />
                Atuou a 2 anos e meio como Desenvolvedor Full Stack e Front End.
              </p>
              <a target="_blank" href="/curriculo-bruno.pdf">
                Baixar CV
              </a>
            </article>
          </article>

          <Skills menuActive={menuActive} />
          <Services menuActive={menuActive} />
        </article>
      </div>
    </section>
  );
};

import { useState } from "react";
import styles from "./styles.module.scss";
import bannerAboutImg from "../../assets/images/image-about.png";
import { Skills } from "./Skills";

export const SectionAbout = () => {
  const [menuActive, setMenuActive] = useState("aboutMe");

  return (
    <section className={styles.sectionAbout}>
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
              <a target="_blank" href="/currículo-bruno.pdf">Baixar CV</a>
            </article>
          </article>

          <Skills menuActive={menuActive} />

          <article
            className={`${styles.services} ${
              menuActive == "services" && styles.active
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia
            quos est pariatur necessitatibus nostrum enim quaerat odit,
            perspiciatis maiores vitae temporibus at nam quasi optio assumenda
            eveniet sint neque. Sed iusto nulla cupiditate laboriosam sapiente
            enim pariatur itaque saepe placeat perspiciatis. In vero laudantium
            mollitia perspiciatis fuga aut sed, maiores labore voluptatem
            accusamus illum repellat esse odio temporibus eligendi eveniet
            reiciendis enim repellendus aspernatur facilis blanditiis. Maiores
            quo pariatur sequi, rem fugiat tenetur sint, tempora quos labore
            cupiditate ratione quasi odio cum atque sit. Veritatis dolore
            maiores odit assumenda quos quidem incidunt facere blanditiis sint
            ut perspiciatis voluptas porro, eaque id! Fuga excepturi distinctio
            sed alias quam impedit pariatur nam. Quos, quidem debitis. Sunt
            veniam quo tempore laborum voluptatem repellat accusamus dolorem
            nihil aliquam cum qui placeat inventore dolorum sapiente perferendis
            rerum illum ratione voluptas optio hic, voluptatum odio. Saepe
            tempore repudiandae magnam, quam rerum ad maxime placeat in
            accusantium impedit. Illum, quis dolorem! Harum placeat itaque
            possimus earum ea debitis dicta accusamus beatae voluptatibus vel
            nam, voluptatem incidunt voluptatum soluta sapiente laboriosam ipsa
            minus reiciendis repellendus corrupti ab, ipsum, perspiciatis quae.
            Vitae consequuntur, cupiditate inventore sunt, temporibus voluptatum
            debitis numquam ad sed quae fugit saepe suscipit cum illum?
          </article>
        </article>
      </div>
    </section>
  );
};

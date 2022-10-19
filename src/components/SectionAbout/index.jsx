import styles from "./styles.module.scss";
import bannerAboutImg from '../../assets/images/image-about.png'
import { useState } from "react";

export const SectionAbout = () => {
  const [menuActive, setMenuActive] = useState('aboutMe')

  return (
    <section className={styles.sectionAbout}>
      <div className="container">
        <h2>Sobre Mim</h2>
        <article className={styles.contentAbout}>

          <nav>
            <ul>
              <li className={menuActive == 'aboutMe' ? styles.active : ''}>
                <button onClick={() => setMenuActive('aboutMe')}>Sobre</button>
              </li>
              <li className={menuActive == 'skills' ? styles.active : ''}>
                <button onClick={() => setMenuActive('skills')}>Skills</button>
              </li>
              <li className={menuActive == 'services' ? styles.active : ''}>
                <button onClick={() => setMenuActive('services')}>Serviços</button>
              </li>
            </ul>
          </nav>

          <article className={`${styles.aboutMe} ${menuActive == 'aboutMe' && styles.active}`}>
            <div className={styles.boxImg}>
              <img src={bannerAboutImg} alt="imagem programando" />
            </div>
            <article className={styles.boxText}>
              <h4>É hora de criarmos seu próximo projeto. Juntos.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit, non quibusdam eius ducimus ex repudiandae id sequi totam voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eum cum. Dolorum similique aperiam non quidem quos ratione aliquam! Modi.
              </p>
              <button>Saiba mais</button>
            </article>
          </article>

          <article className={`${styles.skills} ${menuActive == 'skills' && styles.active}`}>
            <ul>
              <li>
                <p>HTML</p>
                <div className={styles.bar}>
                  <div style={{ width: '100%' }} className={styles.barProgress}></div>
                </div>
              </li>
              <li>
                <p>CSS</p>
                <div className={styles.bar}>
                  <div style={{ width: '100%' }} className={styles.barProgress}></div>
                </div>
              </li>
              <li>
                <p>JavaScript</p>
                <div className={styles.bar}>
                  <div style={{ width: '100%' }} className={styles.barProgress}></div>
                </div>
              </li>
              <li>
                <p>ReactJs</p>
                <div className={styles.bar}>
                  <div style={{ width: '65%' }} className={styles.barProgress}></div>
                </div>
              </li>
              <li>
                <p>PHP</p>
                <div className={styles.bar}>
                  <div style={{ width: '85%' }} className={styles.barProgress}></div>
                </div>
              </li>
              <li>
                <p>Laravel</p>
                <div className={styles.bar}>
                  <div style={{ width: '75%' }} className={styles.barProgress}></div>
                </div>
              </li>
              <li>
                <p>NodeJS</p>
                <div className={styles.bar}>
                  <div style={{ width: '30%' }} className={styles.barProgress}></div>
                </div>
              </li>
            </ul>
          </article>

          <article className={`${styles.services} ${menuActive == 'services' && styles.active}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia quos est pariatur necessitatibus nostrum enim quaerat odit, perspiciatis maiores vitae temporibus at nam quasi optio assumenda eveniet sint neque. Sed iusto nulla cupiditate laboriosam sapiente enim pariatur itaque saepe placeat perspiciatis. In vero laudantium mollitia perspiciatis fuga aut sed, maiores labore voluptatem accusamus illum repellat esse odio temporibus eligendi eveniet reiciendis enim repellendus aspernatur facilis blanditiis. Maiores quo pariatur sequi, rem fugiat tenetur sint, tempora quos labore cupiditate ratione quasi odio cum atque sit. Veritatis dolore maiores odit assumenda quos quidem incidunt facere blanditiis sint ut perspiciatis voluptas porro, eaque id! Fuga excepturi distinctio sed alias quam impedit pariatur nam. Quos, quidem debitis. Sunt veniam quo tempore laborum voluptatem repellat accusamus dolorem nihil aliquam cum qui placeat inventore dolorum sapiente perferendis rerum illum ratione voluptas optio hic, voluptatum odio. Saepe tempore repudiandae magnam, quam rerum ad maxime placeat in accusantium impedit. Illum, quis dolorem! Harum placeat itaque possimus earum ea debitis dicta accusamus beatae voluptatibus vel nam, voluptatem incidunt voluptatum soluta sapiente laboriosam ipsa minus reiciendis repellendus corrupti ab, ipsum, perspiciatis quae. Vitae consequuntur, cupiditate inventore sunt, temporibus voluptatum debitis numquam ad sed quae fugit saepe suscipit cum illum?
          </article>

        </article>
      </div>
    </section>
  )
}

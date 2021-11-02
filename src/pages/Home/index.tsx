import { Header } from "../../components/Header"

import styles from "./styles.module.scss";
import { SectionAbout } from "../../components/SectionAbout";

export const Home = () => {
  return (
    <main>
      <section className={styles.sectionHeader}>
        <Header />
        <article>
          <h1>Hi! I'm <span>Bruno</span> Teixeira</h1>
          <p>Full Stack - Freelancer Dev</p>
        </article>
      </section>

      <SectionAbout />
    </main>
  )
}

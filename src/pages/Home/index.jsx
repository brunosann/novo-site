import { Header } from "../../components/Header";

import styles from "./styles.module.scss";
import { SectionAbout } from "../../components/SectionAbout";
import { SectionPortfolio } from "../../components/SectionPortfolio";
import { SectionContact } from "../../components/SectionContact";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <main>
      <section className={styles.sectionHeader}>
        <Header />
        <article>
          <h1>
            Hi! I'm <span>Bruno</span> Teixeira
          </h1>
          <p>Dev Full Stack - Freelancer</p>
        </article>

        <div className={styles.scrollDowns}>
          <div className={styles.mousey}>
            <div className={styles.scroller}></div>
          </div>
        </div>
      </section>

      <SectionAbout />

      <SectionPortfolio />

      <SectionContact />

      <Footer />
    </main>
  );
};

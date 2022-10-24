import styles from "./styles.module.scss";

export const SectionPortfolio = () => {
  return (
    <section id="portfolio" className={styles.sectionPortifolio}>
      <div className="container">
        <section className={styles.content}>
          <article className={styles.text}>
            <div className={styles.title}>
              <h2>Portifolio</h2>
            </div>
            <article className={styles.portifolioItem}>
              <h4 className={styles.titleItem}>Leaves Clothing & Co</h4>
              <p className={styles.description}>
                Web Site - Front-End / Back-End
              </p>
              <button className={styles.btnViewItem}>Ver Trabalho</button>
            </article>
          </article>
          <article className={styles.portifolioItem}>
            <h4 className={styles.titleItem}>Leaves Clothing & Co</h4>
            <p className={styles.description}>
              Web Site - Front-End / Back-End
            </p>
            <button className={styles.btnViewItem}>Ver Trabalho</button>
          </article>
          <article className={styles.portifolioItem}>
            <h4 className={styles.titleItem}>Leaves Clothing & Co</h4>
            <p className={styles.description}>
              Web Site - Front-End / Back-End
            </p>
            <button className={styles.btnViewItem}>Ver Trabalho</button>
          </article>
          <article className={styles.portifolioItem}>
            <h4 className={styles.titleItem}>Leaves Clothing & Co</h4>
            <p className={styles.description}>
              Web Site - Front-End / Back-End
            </p>
            <button className={styles.btnViewItem}>Ver Trabalho</button>
          </article>
          <article className={styles.portifolioItem}>
            <h4 className={styles.titleItem}>Leaves Clothing & Co</h4>
            <p className={styles.description}>
              Web Site - Front-End / Back-End
            </p>
            <button className={styles.btnViewItem}>Ver Trabalho</button>
          </article>
          <article className={styles.portifolioItem}>
            <h4 className={styles.titleItem}>Leaves Clothing & Co</h4>
            <p className={styles.description}>
              Web Site - Front-End / Back-End
            </p>
            <button className={styles.btnViewItem}>Ver Trabalho</button>
          </article>

          <button className={styles.btnMoreItems}>Mais Trabalhos</button>
        </section>
      </div>
    </section>
  );
};

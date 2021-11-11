import { useState } from "react";

import styles from "./styles.module.scss";
import imgEnvelope from "../../assets/images/envelope.png";
import imgLinkedin from "../../assets/images/linkedin.png";
import imgSmartphone from "../../assets/images/smartphone.png";

export const SectionContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className={styles.sectionContact}>
      <div className="container">
        <h2 className={styles.title}>Vamos Conversar</h2>

        <div className={styles.content}>
          <form className={styles.border}>
            <h3>Contato</h3>
            <div className={styles.formBox}>
              <input
                type="text"
                required
                placeholder="Nome"
                className={name && styles.filled}
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              <span>Nome</span>
            </div>
            <div className={styles.formBox}>
              <input
                type="email"
                required
                placeholder="Email"
                className={email && styles.filled}
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <span>Email</span>
            </div>
            <div className={styles.formBox}>
              <input
                type="text"
                required
                placeholder="Assunto"
                className={subject && styles.filled}
                value={subject}
                onChange={({ target }) => setSubject(target.value)}
              />
              <span>Assunto</span>
            </div>
            <div className={styles.formBox}>
              <textarea
                className={styles.filled}
                rows="5"
                placeholder="Sua mensagem"
                className={message && styles.filled}
                value={message}
                onChange={({ target }) => setMessage(target.value)}
              ></textarea>
              <span>Mensagem</span>
            </div>
            <button className="btn-primary">Enviar</button>
          </form>
          <div className={styles.socials}>
            <article className={` ${styles.border}`}>
              <img src={imgEnvelope} alt="envelope" />
              <p>workdevteixeira@gmail.com</p>
            </article>
            <article className={` ${styles.border}`}>
              <img src={imgSmartphone} alt="celular" />
              <p>44 99999 9999</p>
            </article>
            <article className={` ${styles.border}`}>
              <img src={imgLinkedin} alt="linkedin" />
              <p>linkedin.com</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

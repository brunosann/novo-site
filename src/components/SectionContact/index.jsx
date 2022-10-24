import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "./styles.module.scss";
import imgEnvelope from "../../assets/images/envelope.png";

export const SectionContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className={styles.sectionContact}>
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
            <a
              target="_blank"
              href="mailto:contato@devteixeira.com.br?subject=Contato DevTeixeira"
              className={` ${styles.border}`}
            >
              <img src={imgEnvelope} alt="envelope" />
              <p>contato@devteixeira.com.br</p>
            </a>
            <a
              target="_blank"
              href="https://github.com/brunosann"
              className={` ${styles.border}`}
            >
              <FaGithub />
              <p>Github</p>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bruno-teixeira-920661142/"
              className={` ${styles.border}`}
            >
              <FaLinkedinIn />
              <p>linkedin</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "./styles.module.scss";
import imgEnvelope from "../../assets/images/envelope.png";
import useFetch from "../../hooks/useFetch";

export const SectionContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorSubmit, setErrorSubmit] = useState(false);

  const { request, error, data, loading } = useFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, subject, message };

    const isUnfilledData = Object.entries(data).some((item) => !item[1].trim());

    if (isUnfilledData) return setErrorSubmit(true);
    else setErrorSubmit(false);

    request("https://api.devteixeira.com.br/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }, [data]);

  return (
    <section id="contact" className={styles.sectionContact}>
      <div className="container">
        <h2 className={styles.title}>Vamos Conversar</h2>

        <div className={styles.content}>
          <form onSubmit={handleSubmit} className={styles.border}>
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
                required
                rows="5"
                placeholder="Sua mensagem"
                className={message && styles.filled}
                value={message}
                onChange={({ target }) => setMessage(target.value)}
              ></textarea>
              <span>Mensagem</span>
            </div>
            {errorSubmit && (
              <p className={styles.errorSubmit}>Preencha todos os campos</p>
            )}
            {data && !errorSubmit && <p>Mensagem enviada </p>}
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
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

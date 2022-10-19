import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact, DiMysql } from "react-icons/di";
import { FaLaravel, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiPhp } from "react-icons/si";
import styles from "./styles.module.scss";

export const Skills = ({ menuActive }) => {
  return (
    <article
      className={`${styles.skills} ${menuActive == "skills" && styles.active}`}
    >
      <ul>
        <li>
          <div className={styles.boxIcon}>
            <AiFillHtml5 />
            <p>HTML</p>
          </div>
        </li>
        <li>
          <div className={styles.boxIcon}>
            <DiCss3 />
            <p>CSS</p>
          </div>
        </li>
        <li>
          <div className={styles.boxIcon}>
            <DiJavascript1 />
            <p>JavaScript</p>
          </div>
        </li>
        <li>
          <div className={styles.boxIcon}>
            <DiReact />
            <p>ReactJs</p>
          </div>
        </li>
        <li>
          <div className={styles.boxIcon}>
            <SiPhp />
            <p>PHP</p>
          </div>
        </li>
        <li>
          <div className={styles.boxIcon}>
            <FaLaravel />
            <p>Laravel</p>
          </div>
        </li>
        <li>
          <div className={styles.boxIcon}>
            <FaNodeJs />
            <p>NodeJS</p>
          </div>
        </li>
        <li>
          <div className={styles.boxIcon}>
            <SiTailwindcss />
            <p>Tailwindcss</p>
          </div>
        </li>
        <li>
          <div className={styles.boxIcon}>
            <FaBootstrap />
            <p>Bootstrap</p>
          </div>
        </li>
        <li>
          <div className={styles.boxIcon}>
            <DiMysql />
            <p>Mysql</p>
          </div>
        </li>
      </ul>
    </article>
  );
};

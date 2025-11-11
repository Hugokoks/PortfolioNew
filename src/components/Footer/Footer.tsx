import styles from "./index.module.css";
import { SiGithub, SiFiverr } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-labelledby="footerTitle">
      <div className={styles.brand}>
        <span id="footerTitle" className={styles.title}>
          David Koritar
        </span>
        <span className={styles.tag}>
          Fullstack & Systems — React · Go · PostgreSQL
        </span>
      </div>
      <div className={styles.credits}>
        <span>© {new Date().getFullYear()} David Koritar</span>
      </div>
      <div className={styles.links}>
        <a
          href="mailto:koritardev@gmail.com"
          className={styles.iconBtn}
          aria-label="Email"
        >
          <HiOutlineMail />
          <span className={styles.sr}>Email</span>
        </a>

        <a
          href="https://github.com/Hugokoks"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconBtn}
          aria-label="GitHub"
        >
          <SiGithub />
          <span className={styles.sr}>GitHub</span>
        </a>

        <a
          href="https://www.fiverr.com/david_kori"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconBtn}
          aria-label="Fiverr"
        >
          <SiFiverr />
          <span className={styles.sr}>Fiverr</span>
        </a>
      </div>
    </footer>
  );
}

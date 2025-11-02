import styles from "./index.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={`${styles.li} ${styles.active}`}>Hero</li>
        <li className={styles.li}>About</li>
        <li className={styles.li}>Contact</li>
      </ul>
    </nav>
  );
}

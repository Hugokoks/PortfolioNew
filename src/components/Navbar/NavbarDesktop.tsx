// NavbarDesktop.tsx
import styles from "./index.module.css";
import useActiveSection, { getSections } from "../../hooks/useActiveSection";

export default function NavbarDesktop({ scrolled }: { scrolled: boolean }) {
  const { activeSection, scrollTo } = useActiveSection();
  const sections = getSections();

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      aria-label="Main"
    >
      <ul className={styles.navList}>
        {sections.map(({ id, label }) => (
          <li
            key={id}
            className={`${styles.li} ${
              activeSection === id ? styles.active : ""
            }`}
            onClick={() => scrollTo(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") scrollTo(id);
            }}
            aria-current={activeSection === id ? "true" : "false"}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

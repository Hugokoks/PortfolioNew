// NavbarMobile.tsx
import { useState } from "react";
import styles from "./index.module.css";
import useActiveSection, { getSections } from "../../hooks/useActiveSection";
import { X, Menu } from "lucide-react"; // lucide nebo jiná ikona - stačí nahradit

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const { activeSection, scrollTo } = useActiveSection();
  const sections = getSections();

  const onClickItem = (id: string) => {
    setOpen(false);
    // malý delay, aby se menu zavřelo plynule, ale scroll proběhne hned
    setTimeout(() => scrollTo(id), 50);
  };

  return (
    <>
      <div className={`${styles.mobileBar}`}>
        <button
          className={styles.hamburger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={styles.brand}>KoriDev</div>
      </div>

      <div
        className={`${styles.mobileOverlay} ${open ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <ul className={styles.mobileList}>
          {sections.map(({ id, label }) => (
            <li
              key={id}
              className={`${styles.mobileItem} ${
                activeSection === id ? styles.activeMobile : ""
              }`}
              onClick={() => onClickItem(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

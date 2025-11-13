import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>
        Bro this is one page app what are you doing? 🤔
      </p>

      <Link to="/" className={styles.back}>
        Take me back before something breaks
      </Link>
    </div>
  );
}

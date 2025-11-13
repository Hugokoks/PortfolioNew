import styles from "./index.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function FullScreenLoader({ loading }: { loading: boolean }) {
  if (loading)
    return (
      <div className={styles.overlay}>
        <div className={styles.loaderBox}>
          <ClipLoader color="#753aff" loading={loading} size={50} />
          <p className={styles.loadingText}>Loading...</p>
        </div>
      </div>
    );
}

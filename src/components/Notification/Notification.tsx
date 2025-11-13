import styles from "./index.module.css";
import { useNotification } from "../../context/NotificationProvider";
import { motion } from "framer-motion";

export default function Notification() {
  const { data, isVisible, id } = useNotification();

  if (!isVisible || !data) return null;
  return (
    <motion.div
      className={`
        ${styles.notification} 
        ${data?.status === "ok" ? styles.notifyOk : styles.notifyError}`}
      key={id}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {data?.message}
    </motion.div>
  );
}

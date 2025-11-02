import styles from "./index.module.css";

interface btnMainProps {
  children: React.ReactNode;
  style?: string;
  handleClick?: () => void;
}

export default function BtnMain({
  children,
  style = "",
  handleClick,
}: btnMainProps) {
  return (
    <button className={`${styles.btn} ${style}`} onClick={handleClick}>
      {children}
    </button>
  );
}

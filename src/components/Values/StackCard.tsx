import styles from "./index.module.css";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import type { ReactNode } from "react";

export interface StackItem {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
}

export default function StackCard({
  title,
  subtitle,
  description,
  icon,
}: StackItem) {
  const spotlightColor = "rgba(150, 42, 130, 0.8)";

  return (
    <SpotlightCard className={styles.stackCard} spotlightColor={spotlightColor}>
      <div className={styles.cardContentBox}>
        <div className={styles.cardIconWrapper}>{icon}</div>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardSubtitle}>{subtitle}</p>
        <p className={styles.cardDescript}>{description}</p>
      </div>
    </SpotlightCard>
  );
}

import styles from "./index.module.css";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import type { ReactNode } from "react";

interface StackCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: ReactNode;
}

export default function StackCard({
  title,
  subtitle,
  description,
  icon,
}: StackCardProps) {
  const spotlightColor = "rgba(150, 42, 130, 0.7)";

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

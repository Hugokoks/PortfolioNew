import styles from "./index.module.css";
import { ChevronDown } from "lucide-react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

interface SectionPointerProps {
  name: string;
  style?: string;
  distance?: number;
  delay?: number;
  threshold?: number;
}

export default function SectionPointer({
  name,
  style,
  distance = 120,
  delay = 0.2,
  threshold = 0.4,
}: SectionPointerProps) {
  return (
    <AnimatedContent
      distance={distance}
      direction="vertical"
      reverse={true}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={threshold}
      delay={delay}
    >
      <div
        className={`flex flex-col items-center ${styles.pointerWrapper} ${style}`}
      >
        <div className={styles.pointerTitle}>{name}</div>
        <ChevronDown className="mt-5" color="white" size={46} strokeWidth={1} />
      </div>
    </AnimatedContent>
  );
}

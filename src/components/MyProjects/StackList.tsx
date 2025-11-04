import AnimatedContent from "../AnimatedContent/AnimatedContent";
import styles from "./index.module.css";
import { type StackItem } from "./types";
import StackCard from "./StackCard";

interface StackListProps {
  stackData: StackItem[];
}

function StackList({ stackData }: StackListProps) {
  return (
    <div className="w-full p-10 mt-10 flex flex-col">
      <AnimatedContent
        distance={120}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.1}
      >
        <div className={styles.cardsContainer}>
          {stackData.map((item) => (
            <StackCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
}

export default StackList;

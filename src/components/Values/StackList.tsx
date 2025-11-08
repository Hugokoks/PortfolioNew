import styles from "./index.module.css";
import { type StackItem } from "./StackCard";
import StackCard from "./StackCard";
import FadeContent from "../FadeContent/FadeContent";

interface StackListProps {
  stackData: StackItem[];
}

function StackList({ stackData }: StackListProps) {
  return (
    <div className="w-full p-10 mt-10 flex flex-col">
      <div className={styles.cardsContainer}>
        {stackData.map((item) => (
          <FadeContent
            key={item.title}
            className={styles.fadeItem}
            blur={true}
            duration={600}
            easing="ease-out"
            initialOpacity={0}
            threshold={0.3}
          >
            <StackCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              icon={item.icon}
            />
          </FadeContent>
        ))}
      </div>
    </div>
  );
}

export default StackList;

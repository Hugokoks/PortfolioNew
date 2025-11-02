import { ChevronDown } from "lucide-react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

export default function SectionPointer() {
  return (
    <AnimatedContent
      distance={150}
      direction="vertical"
      reverse={true}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.2}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-medium mt-40">What I builded</h2>
        <ChevronDown className="mt-5" color="white" size={46} strokeWidth={1} />
      </div>
    </AnimatedContent>
  );
}

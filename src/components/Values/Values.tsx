import styles from "./index.module.css";
import SectionPointer from "../SectionPointer/SectionPointer";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGo,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import LogoLoop from "../LogoLoop/LogoLoop";
import StackList from "./StackList";
import { LayoutDashboard, Server, Database, Workflow } from "lucide-react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import useDeviceType from "../../hooks/useDeviceType";

const stackData = [
  {
    title: "High-Performance Go API",
    subtitle: "Lightning-fast APIs that scale with your business.",
    description: "Go | REST API Architecture | JWT Authentication",
    icon: <Server size={46} strokeWidth={1} />,
  },

  {
    title: "Dynamic React Frontend",
    subtitle: "The 'art piece' user experience.",
    description:
      "React (TypeScript) | Framer Motion | Responsive & SEO-Friendly",
    icon: <LayoutDashboard size={46} strokeWidth={1} />,
  },
  {
    title: "Robust Database Design",
    subtitle: "Because speed starts in the schema",
    description: "PostgreSQL | E-commerce Schema Design | Optimized Queries",
    icon: <Database size={46} strokeWidth={1} />,
  },
  {
    title: "Full Production Deployment",
    subtitle: "You get results, not just source code.",
    description: "CI/CD Pipeline | DNS & SSL Config | Containers",
    icon: <Workflow size={46} strokeWidth={1} />,
  },
];

const techLogos = [
  { node: <SiReact /> },
  { node: <SiGo /> },
  { node: <SiTypescript /> },
  { node: <SiTailwindcss /> },
  { node: <SiPostgresql /> },
  { node: <SiDocker /> },
];
export default function Values() {
  const { isDesktop } = useDeviceType();
  const pointerMarginTop = isDesktop ? "mt-60" : "mt-40";

  return (
    <section id="values" className="flex flex-col items-center">
      <SectionPointer name="What I do" style={pointerMarginTop} />
      <StackList stackData={stackData} />

      <div className="w-full mt-60">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover={false}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      <div className={`${styles.textWrapper}  self-start ml-60`}>
        <AnimatedContent
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
        >
          <p className={styles.italicText}>
            Let’s turn your vision into energy on screen.
          </p>
          <p>I care about how things feel, not just how they work.</p>
          <p>
            My goal is to create experiences that run fast, look great, and feel
            smooth.
          </p>
        </AnimatedContent>
      </div>
      <div className={`${styles.textWrapper}  self-end mr-60`}>
        <AnimatedContent
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
        >
          <p className={styles.italicText}>I build systems!</p>
          <p>Tools, products, or ideas it doesn’t matter.</p>
          <p>If it has potential, I’ll make it real.</p>
          <p>That’s what I do.</p>
        </AnimatedContent>
      </div>
    </section>
  );
}

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
    title: "Backend",
    subtitle: "Fast and reliable backend systems.",
    description: "Built to scale with your business and handle real-world usage.",
    icon: <Server size={46} strokeWidth={1} />,
  },

  {
    title: "Frontend",
    subtitle: "Modern websites that convert",
    description:
      "Clean, responsive and optimized for performance and user experience.",
    icon: <LayoutDashboard size={46} strokeWidth={1} />,
  },
  {
    title: "Database",
    subtitle: "Structured and scalable data",
    description: "Designed to keep your data organized, fast and future-proof.",
    icon: <Database size={46} strokeWidth={1} />,
  },
  {
    title: "Deployment",
    subtitle: "From idea to production",
    description: "Hosting, domains, SSL, deployment – everything ready to use.",
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
            I build systems that turn ideas into real, working products.
          </p>
          <p>From simple websites to full-scale platforms,</p>
          <p>
            I focus on fast, reliable and practical solutions.
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

import styles from "./index.module.css";
import SectionPointer from "../SectionPointer/SectionPointer";
import { SiReact, SiTypescript, SiTailwindcss, SiGo, SiPostgresql, SiDocker } from 'react-icons/si';

import StackList from "./StackList";
import Project from "./Project";
import { projectData } from "./projectData";
import LogoLoop from "../LogoLoop/LogoLoop";
const techLogos = [
  { node: <SiReact /> },
  { node: <SiGo /> },
  { node: <SiTypescript /> },
  { node: <SiTailwindcss /> },
  { node: <SiPostgresql /> },
  { node: <SiDocker /> },


];
export default function MyProjects() {
  const { exclusiveKratomClub } = projectData;
  return (
    <section id="projects" className={styles.myProjects}>
      <SectionPointer name="Projects" distance={160} style="mt-60" />

      <Project
        projectName={exclusiveKratomClub.projectName}
        videoSrc={exclusiveKratomClub.videoSrc}
        paragraps={exclusiveKratomClub.parahraps}
      />


      <SectionPointer name="What i do" style="mt-80" />
      <StackList stackData={exclusiveKratomClub.stackData} />

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

    </section>
  );
}

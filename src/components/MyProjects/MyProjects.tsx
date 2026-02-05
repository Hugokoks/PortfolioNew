import styles from "./index.module.css";
import SectionPointer from "../SectionPointer/SectionPointer";
import Project from "./Project";
import { projectData } from "./projectData";
import useDeviceType from "../../hooks/useDeviceType";

export default function MyProjects() {
  const { netsnitch,exclusiveKratomClub,vpnsoftware } = projectData;
  const { isDesktop } = useDeviceType();
  const projects = [ netsnitch,vpnsoftware,exclusiveKratomClub,];
  const pointerMarginTop = isDesktop ? "mt-80" : "mt-50";

  return (
    <section id="projects" className={styles.myProjects}>
      <SectionPointer name="Projects" distance={160} style={pointerMarginTop} />

      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <Project
            key={index}
            projectName={project.projectName}
            videoSrc={project.videoSrc}
            paragraps={project.parahraps}
            projectUrl={project.projectUrl}
            alignLeft={project.alignLeft}
          />
        ))}
      </div>
    </section>
  );
}

import styles from "./index.module.css";
import SectionPointer from "../SectionPointer/SectionPointer";
import Project from "./Project";
import { projectData } from "./projectData";
import useDeviceType from "../../hooks/useDeviceType";

export default function MyProjects() {
  const { exclusiveKratomClub } = projectData;
  const { isDesktop } = useDeviceType();

  const pointerMarginTop = isDesktop ? "mt-80" : "mt-50";

  return (
    <section id="projects" className={styles.myProjects}>
      <SectionPointer name="Projects" distance={160} style={pointerMarginTop} />

      <Project
        projectName={exclusiveKratomClub.projectName}
        videoSrc={exclusiveKratomClub.videoSrc}
        paragraps={exclusiveKratomClub.parahraps}
        projectUrl={exclusiveKratomClub.projectUrl}
      />
    </section>
  );
}

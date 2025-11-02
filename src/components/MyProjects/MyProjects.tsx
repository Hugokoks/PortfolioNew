import styles from "./index.module.css";
import SectionPointer from "../SectionPointer/SectionPointer";

import StackList from "./StackList";
import Project from "./Project";
import { projectData } from "./projectData";

export default function MyProjects() {
  const { exclusiveKratomClub } = projectData;
  return (
    <section className={styles.myProjects} id="projects">
      <SectionPointer />
      <div className={styles.projectWrapper}>
        <Project
          projectName={exclusiveKratomClub.projectName}
          videoSrc={exclusiveKratomClub.videoSrc}
          paragraps={exclusiveKratomClub.parahraps}
        />
        <StackList stackData={exclusiveKratomClub.stackData} />
      </div>
    </section>
  );
}

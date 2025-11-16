import useVideoObserver from "../../hooks/useVideoObserver";
import FadeContent from "../FadeContent/FadeContent";

import styles from "./index.module.css";

interface ProjectProps {
  videoSrc: string;
  projectName: string;
  paragraps: string[];
  projectUrl: string;
}

function Project({
  videoSrc,
  projectName,
  paragraps,
  projectUrl,
}: ProjectProps) {
  const videoRef = useVideoObserver();

  return (
    <FadeContent
      blur={true}
      duration={600}
      easing="ease-out"
      initialOpacity={0}
      threshold={0.3}
    >
      <div className={styles.projectWrapper}>
        <div className={styles.contentSpliter}>
          <video
            ref={videoRef}
            className={styles.videoPlayer}
            loop
            muted
            playsInline
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>

          <div className={styles.descriptWrapper}>
            <a className={styles.projectName} href={projectUrl} target="_blank">
              {projectName}
            </a>
            <div className={styles.paragrahpWrapper}>
              {paragraps.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeContent>
  );
}

export default Project;

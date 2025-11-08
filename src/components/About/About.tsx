import { Canvas } from "@react-three/fiber";
import styles from "./index.module.css";
import PulsingCube from "./PulsingCube";
import { OrbitControls } from "@react-three/drei";
import FadeContent from "../FadeContent/FadeContent";
import ParagraphDelay from "../ParagraphDelay/ParagraphDelay";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.contentContainer}>
        <div className={styles.textWrapper}>
          <ParagraphDelay
            array={[
              <p className={styles.italicText}>About me</p>,
              <p>I build clean, practical applications,</p>,
              <p>from web platforms to full software systems.</p>,
              <p>
                I care about architecture, performance and how things feel to
                use, small details make big differences.
              </p>,
              <p>
                Whether it’s a custom API, an internal tool, or something
                entirely new.
              </p>,
            ]}
          />
        </div>

        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          delay={0}
          threshold={0.4}
        >
          <div className={styles.sceneWrapper}>
            <Canvas camera={{ position: [4, 3, 3], fov: 80 }}>
              <ambientLight intensity={0.2} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <PulsingCube />
              <OrbitControls
                autoRotate
                autoRotateSpeed={2.0}
                enableZoom={false}
                enablePan={false}
              />
            </Canvas>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}

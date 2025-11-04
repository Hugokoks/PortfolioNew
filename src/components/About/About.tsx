import { Canvas } from "@react-three/fiber";
import styles from "./index.module.css";
import PulsingCube from "./PulsingCube";
import { OrbitControls } from "@react-three/drei";
import FadeContent from "../FadeContent/FadeContent";


export default function About() {
  return (
    <section id="about" className={styles.about}>


      <div className={styles.contentContainer}>
        <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
          <div className={styles.textWrapper}>
            <h2 className={styles.h2}>About me</h2>
            <p>My journey defines me more than a title. I've honed my entire skillset through years
              of disciplined self-study—piecing it all together, from the frontend to the backend,
              databases, and ultimately, final deployment.</p>

            <p>This path, built on dozens of projects that will never see the light of day, taught me the most valuable lesson:
              how to take an idea and forge it into a complete, functional application.</p>

            <p>What I'm most passionate about is the creative process itself: tackling complex problems and architecting robust solutions.</p>

          </div>
        </FadeContent>

        <div className={styles.sceneWrapper}>
          <Canvas

            camera={{ position: [4, 3, 3], fov: 80 }}
          >
            {/* Osvětlení scény */}
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            {/* Náš kód */}
            <PulsingCube />
            {/* Ovládání */}
            <OrbitControls
              autoRotate
              autoRotateSpeed={2.0}
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </div>
      </div>

    </section >
  );
}

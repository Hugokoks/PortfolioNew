import styles from "./index.module.css";
import Hyperspeed from "../HyperSpeed/HyperSpeed";
import TextType from "../TextType/TextType";
import BtnMain from "../Btns/BtnMain/BtnMain";
import ClickingMouseIcon from "../ClickingMouseIcon/ClickingMouseIcon";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgBox}>
        <Hyperspeed />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.textWrapper}>
          <h1>Kori Fullstack Developer</h1>
          <p className={styles.stackText}>React | Go | PostgreSQL | DevOps</p>
          <h2>
            <TextType
              text={["Ready to build something amazing?", "Hit me up!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
        </div>
        <BtnMain>Contact me</BtnMain>
      </div>
      <ClickingMouseIcon size={30} />
    </section>
  );
}

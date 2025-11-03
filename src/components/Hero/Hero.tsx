import styles from "./index.module.css";
import Hyperspeed from "../HyperSpeed/HyperSpeed";
import TextType from "../TextType/TextType";
import BtnMain from "../Btns/BtnMain/BtnMain";
import ClickingMouseIcon from "../ClickingMouseIcon/ClickingMouseIcon";

import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      <div className={styles.bgBox}>

        {isHeroVisible && <Hyperspeed />}
      </div>
      <div className={styles.heroContent}>
        <div className={styles.textWrapper}>
          <h1>Kori Fullstack Developer</h1>
          <p className={styles.stackText}>React | Go | PostgreSQL | DevOps</p>
          <h2>
            {isHeroVisible && (
              <TextType
                text={["Ready to build something amazing?", "Hit me up!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            )}
          </h2>
        </div>
        <BtnMain>Contact me</BtnMain>
      </div>
      {isHeroVisible && <ClickingMouseIcon size={30} />}
    </section>
  );
}
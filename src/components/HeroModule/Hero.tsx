import React from "react";
import styles from "./Hero.module.css";
import AnimateBackground_2 from "./AnimateBackground_2";

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <AnimateBackground_2 />
      <div className={styles.heroBorder}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Advance Your Future</h1>
          <h2 className={styles.subtitle}>
            Unlock your invest potential with our next generation formula.
            Designed to empower investors, our specialization in market
            instruments equips you with essential tools for profitability.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;

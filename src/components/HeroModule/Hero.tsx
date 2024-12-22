import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import ParticleBackground from "./ParticleBackground.js";

import AnimateBackground from "./AnimateBackground.js";
import AnimateBackground_2 from "./AnimateBackground_2.js";

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* Use the component */}
      <div>
        <AnimateBackground_2 />
      </div>
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

import React from "react";
import styles from './Hero.module.css'

function Hero() {
  return (
    
    <header className={styles.hero__header}>
      <div className="hero__greetings">
      <h1>Hej</h1>
      </div>
      <div className="hero__pitch">
      <p>lorem12
      </p>
      </div>

    </header>
  );
}

export default Hero;

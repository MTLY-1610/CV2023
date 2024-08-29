import React, { useRef, useEffect } from "react";
import gsap  from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from './SectionOne.module.css'

const SectionOne = () => {
  return (
    <div className={styles.section__wrapper}>
      <div className={styles.section__inner__wrapper_1}>
        UI     
        development
      </div>
    </div>
  );
};

export default SectionOne;
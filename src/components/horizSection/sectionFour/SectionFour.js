import React, { useRef, useEffect } from "react";
import gsap  from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from './SectionFour.module.css'

const SectionFour = () => {
  return (
    <div className={styles.section__wrapper}>
            <div className={styles.section__inner__wrapper_1}>
                <div className={styles.section__inner__wrapper__top}>
                    <div className={styles.inner__wrapper__top__left}>
                    </div>
                    <div className={styles.inner__wrapper__top__right}>
                        <div className={styles.left__collaps__1}>
                            <h2>
                                STACK
                            </h2>
                            <p>01</p>
                        </div>
                        <div className={styles.left__collaps__2}></div>
                        <div className={styles.left__collaps__3}></div>
                    </div>
                </div>
                <div className={styles.section__name}>
                    <h1>UI
                        development</h1>
                </div>


            </div>
        </div>
  );
};

export default SectionFour;
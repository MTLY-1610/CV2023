import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from './SectionOne.module.css'

const SectionOne = () => {
    return (
        <div className={styles.section__wrapper}>
            <div className={styles.section__inner__wrapper_1}>
                <div className={styles.section__inner__wrapper_top}>
                    <div className={styles.inner__wrapper_top__left}>
                    </div>
                    <div className={styles.inner__wrapper_top__right}>
                        <div className={styles.left__collaps__1}></div>
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

export default SectionOne;
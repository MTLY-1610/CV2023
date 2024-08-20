import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import styles from './Menu.module.css';
import Image from "next/image";
import smiley from 'public/fonts/smiley.png'

const AnimatedMenu = () => {
  // Create refs for each menu item
  const menuItem1 = useRef(null);
  const menuItem2 = useRef(null);
  const menuItem3 = useRef(null);
  const menuItem4 = useRef(null);
  const menuItem5 = useRef(null);
  const menuItem6 = useRef(null);
  const menuItem7 = useRef(null);
  const menuItem8 = useRef(null);

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Add opacity animations to the timeline
    tl.to([menuItem1.current, menuItem4.current], { opacity: 1, duration: 0.2, delay:.5, ease: "power3.in"})
    tl.to([menuItem2.current, menuItem5.current], { opacity: 1, duration: 0.2, ease: "power3.in" })
    tl.to([menuItem3.current, menuItem6.current], { opacity: 1, duration: 0.2, ease: "power3.in" })
    tl.to([menuItem7.current, menuItem8.current], { opacity: 1, duration: 0.2, ease: "power3.in" })



    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.menu__wrapper}>
      <div className={styles.menu__items}>
        <div className={styles.menu__item__left}>
          <span ref={menuItem1} className={styles.menu__name}>
            MATHIEU LARROUY
          </span>
          <span ref={menuItem2} className={styles.menu__name}>
            frontend developer
          </span>
          <span ref={menuItem3} className={styles.menu__name}>
            ui designer
          </span>
        </div>
        <div ref={menuItem7} className={styles.menu__item__center}>
          <Image
            src={smiley}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.menu__item__right}>
          <span ref={menuItem4} className={styles.menu__burger}>
            about me
          </span>
          <span ref={menuItem5} className={styles.menu__burger}>
            web development
          </span>
          <span ref={menuItem6} className={styles.menu__burger}>
            ui design
          </span>
        </div>
      </div>
      <div ref={menuItem8} className={styles.menu__border}></div>
    </div>
  );
};

export default AnimatedMenu;
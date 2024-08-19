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

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Add opacity animations to the timeline
    tl.to(menuItem1.current, { opacity: 1, duration: 0.5 })
      .to(menuItem2.current, { opacity: 1, duration: 0.51 })
      .to(menuItem3.current, { opacity: 1, duration: 0.52 })

    // Cleanup the timeline on component unmount
    return () => {
      tl.kill();
    };
  }, []);

  return (

    <div className={styles.menu__wrapper}>
      <div className={styles.menu__items}>
        <div ref={menuItem1} className={styles.menu__item__left}>
          <span className={styles.menu__name}>
            MATHIEU LARROUY
          </span>
          <span className={styles.menu__name}>
            frontend developer
          </span>
          <span className={styles.menu__name}>
            ui designer
          </span>
        </div>
        <div ref={menuItem2} className={styles.menu__item__center}>

          <Image
            src={smiley}
            width={50}
            height={50}
            alt="Picture of the author"
          />

        </div>
        <div ref={menuItem3} className={styles.menu__item__right}>
          <span className={styles.menu__burger}>
          about me 
          </span>
          <span className={styles.menu__burger}>
          web development
          </span>
          <span className={styles.menu__burger}>
            ui design
          </span>
        </div>

      </div>
      <div className={styles.menu__border}></div>
    </div>

  );
};

export default AnimatedMenu;
import React, { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap';
import styles from './Bottom.module.css';
import Image from "next/image";
import smiley from 'public/img/smiley.png';

const Bottom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bottomItem1 = useRef(null);
  const bottomItem2 = useRef(null);
  const bottomItem3 = useRef(null);
  const bottomItem4 = useRef(null);
  const bottomItem5 = useRef(null);
  const bottomItem6 = useRef(null);
  const bottomItem7 = useRef(null);
  const bottomItem8 = useRef(null);
  const musicPlayerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({delay: 5});

    tl.to([menuItem1.current, menuItem4.current], { opacity: 1, duration: 0.2, ease: "power3.out"})
      .to([menuItem2.current, menuItem5.current], { opacity: 1, duration: 0.2, ease: "power3.out" })
      .to([menuItem3.current, menuItem6.current], { opacity: 1, duration: 0.2, ease: "power3.out" })
      .to(menuItem7.current, { opacity: 1, duration: 0.2, ease: "power3.out" })
      .fromTo(
        menuItem8.current,
        { scaleX: 0, transformOrigin: "center" },
        { scaleX: 1, duration: 0.75, ease: "power3.out" }
      );

    return () => {
      tl.kill();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.bottom__wrapper}>
      <div className={styles.bottom__items}>
        <div className={styles.bottom__item__left}>
          <span ref={bottomItem1} className={styles.bottom__name__first}>
            MATHIEU LARROUY
          </span>
          <span ref={menuItem2} className={styles.menu__name}>
            Frontend developer
          </span>
          <span ref={menuItem3} className={styles.menu__name}>
            UI designer
          </span>
        </div>
        <div className={styles.menu__item__right}>
          <span ref={menuItem4} className={styles.menu__burger}>
            Frontend stack
          </span>
          <span ref={menuItem5} className={styles.menu__burger}>
            UID stack          </span>
          <span ref={menuItem6} className={styles.menu__burger__last}>
            BEEP ME
          </span>
        </div>
      <div ref={menuItem8} className={styles.menu__border}></div>
    </div>
    </div>
  );
};

export default Bottom;
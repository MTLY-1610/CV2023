import React, { useRef, useEffect, useState } from "react";
import gsap  from 'gsap';
import styles from './Menu.module.css';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItem1 = useRef(null);
  const menuItem2 = useRef(null);
  const menuItem3 = useRef(null);
  const menuItem4 = useRef(null);
  const menuItem5 = useRef(null);
  const menuItem6 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({delay: 4});

    tl.to([menuItem1.current, menuItem2.current, menuItem3.current, menuItem4.current, menuItem5.current], { opacity: 1, duration: 0.2, ease: "power3.out"})
      .fromTo(
        menuItem6.current,
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
    <div className={styles.menu__wrapper}>
      <div className={styles.menu__items}>
        <div className={styles.menu__item__left}>
          <span ref={menuItem1} className={styles.menu__name__first}>
          MTLY
          </span>
        </div>
        <div className={styles }>
        <span ref={menuItem2} className={styles.menu__name}>
            UI DEVELOPMENT
          </span>
          <span ref={menuItem3} className={styles.menu__name}>
          UI DESIGN
          </span>
        </div>
        <div className={styles.menu__item__center}>
          <span ref={menuItem4} className={styles.menu__name}>
   LOGO HERE
          </span>
        </div>
        <div className={styles.menu__item__right}>

          <span ref={menuItem5} className={styles.menu__burger}>
            BEEP ME
          </span>
        </div>

        <div className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>

        {isMenuOpen && (
          <div className={styles.fullscreenMenu} onClick={closeMenu}>
            <div className={styles.fullscreenMenuContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.menu__burger}>
                Frontend stack
              </span>
              <span className={styles.menu__burger}>
                UID stack
              </span>
              <span className={styles.menu__burger}>
                BEEP ME
              </span>
            </div>
          </div>
        )}
      </div>
      <div ref={menuItem6} className={styles.menu__border}></div>
      {/* <div className={styles.marquee}>
        <div className={styles.marquee__inner}>
          <span>Some darn text example to sell myself! - Some darn text example to sell myself! - Some darn text example to sell myself! !&nbsp;</span>
          <span>Some darn text example to sell myself! - Some darn text example to sell myself! - Some darn text example to sell myself! !&nbsp;</span>
          <span>Some darn text example to sell myself! - Some darn text example to sell myself! - Some darn text example to sell myself! !&nbsp;</span>
          <span>Some darn text example to sell myself! - Some darn text example to sell myself! - Some darn text example to sell myself! !&nbsp;</span>
          
          
        </div>
      </div> */}
    </div>
  );
};

export default Menu;
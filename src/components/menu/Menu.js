import React, { useRef, useEffect, useState } from "react";
import gsap  from 'gsap';
import styles from './Menu.module.css';

const AnimatedMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItem1 = useRef(null);
  const menuItem2 = useRef(null);
  const menuItem3 = useRef(null);
  const menuItem4 = useRef(null);
  const menuItem5 = useRef(null);
  const menuItem6 = useRef(null);
  const menuItem7 = useRef(null);
  const menuItem8 = useRef(null);
  const musicPlayerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({delay: 4});

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

  const handleBeepMeClick = async () => {
    try {
      const response = await fetch('/api/sendSms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNumber: '+46768167500',
          message: 'my message',
        }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className={styles.menu__wrapper}>
      <div className={styles.menu__items}>
        <div className={styles.menu__item__left}>
          <span ref={menuItem1} className={styles.menu__name__first}>
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
          <span ref={menuItem6} className={styles.menu__burger__last} onClick={handleBeepMeClick} >
            BEEP ME
          </span>
        </div>

        <div className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}onClick={handleBeepMeClick}></div>
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
      <div ref={menuItem8} className={styles.menu__border}></div>
    </div>
  );
};

export default AnimatedMenu;
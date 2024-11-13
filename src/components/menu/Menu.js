import React, { useRef, useEffect, useState } from "react";
import gsap from 'gsap';
import styles from './Menu.module.css';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [menuTextColor, setMenuTextColor] = useState("#D9D9D6");
  const [backgroundColor, setBackgroundColor] = useState("#D9D9D6");

  const menuItem1 = useRef(null);
  const menuItem2 = useRef(null);
  const menuItem3 = useRef(null);
  const menuItem4 = useRef(null);
  const menuItem5 = useRef(null);
  const menuItem6 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 });
    tl.to(
      [menuItem1.current, menuItem2.current, menuItem3.current, menuItem4.current, menuItem5.current],
      { opacity: 1, duration: 0.2, ease: "power3.out" }
    ).fromTo(
      menuItem6.current,
      { scaleX: 0, transformOrigin: "center" },
      { scaleX: 1, duration: 0.75, ease: "power3.out" }
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleColorChange = (color, bgColor) => {
      setMenuTextColor(color);
      setBackgroundColor(bgColor);
    };

    const observerOptionsDown = {
      sectionZero: { rootMargin: "0px 0px 0px 0px", threshold: 0 },
      sectionOne: { rootMargin: "0px 0px -100% 0px", threshold: 0 },
      sectionTwo: { rootMargin: "0px 0px -100% 0px", threshold: 0 },
      sectionThree: { rootMargin: "0px 0px -100% 0px", threshold: 0 },
      sectionFour: { rootMargin: "-2% 0px -2% 0px", threshold: 0.05 },
      sectionFive: { rootMargin: "0px 0px 0px 0px", threshold: 1 }
    };

    const observersDown = Array.from(sections).map((section) => {
      const sectionId = section.id;
      const options = observerOptionsDown[sectionId] || { rootMargin: "0px", threshold: 1 };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
              switch (sectionId) {
                case "sectionZero":
                  handleColorChange("#D9D9D6", "#D9D9D6");
                  setIsMenuVisible(true);
                  break;
                case "sectionOne":
                  handleColorChange("#533fff", "#533fff");
                  break;
                case "sectionTwo":
                  handleColorChange("#533fff", "#533fff");
                  break;
                case "sectionThree":
                  handleColorChange("#533fff", "#533fff");
                  break;
                case "sectionFour":
                  handleColorChange("#533fff", "#533fff");
                  setIsMenuVisible(true);
                  break;
                case "sectionFive":
                  handleColorChange("#1c1c1c", "#1c1c1c");
                  setIsMenuVisible(false); 
                  break;
                default:
                  handleColorChange("#D9D9D6", "#D9D9D6");
                  setIsMenuVisible(true);
              }
            }
          });
        },
        options
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observersDown.forEach((observer) => observer.disconnect());
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return isMenuVisible ? ( // Conditionally render menu based on isMenuVisible
    <div className={styles.menu__wrapper}>
      <div className={styles.menu__items} style={{ color: menuTextColor }}>
        <div className={styles.menu__item__left}>
          <span ref={menuItem1} className={styles.menu__name__first}>MTLY</span>
        </div>
        <div>
          <span ref={menuItem2} className={styles.menu__name}>UI DEVELOPMENT</span>
          <span ref={menuItem3} className={styles.menu__name}>UI DESIGN</span>
        </div>
        <div className={styles.menu__item__center}>
          <span ref={menuItem4} className={styles.menu__name}>LOGO HERE</span>
        </div>
        <div className={styles.menu__item__right}>
          <span ref={menuItem5} className={styles.menu__burger}>BEEP ME</span>
        </div>

        <div className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>

        {isMenuOpen && (
          <div className={styles.fullscreenMenu} onClick={closeMenu}>
            <div className={styles.fullscreenMenuContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.menu__burger}>Frontend stack</span>
              <span className={styles.menu__burger}>UID stack</span>
              <span className={styles.menu__burger}>BEEP ME</span>
            </div>
          </div>
        )}
      </div>
      <div ref={menuItem6} className={styles.menu__border} style={{ backgroundColor }}></div>
    </div>
  ) : null;
};

export default Menu;
import React, { useRef, useEffect } from "react";
import styles from './Menu.module.css';


function Menu() {
  return (

    <div className={styles.menu__wrapper}>
      <div className={styles.menu__items}>
        <div className={styles.menu__item__left}>
          <span className={styles.menu__name}>
            MATHIEU LARROUY
          </span>
          <span className={styles.menu__name}>
            frontend developer
          </span>
          <span className={styles.menu__name}>
            ui dedsigner
          </span>
        </div>
        <div className={styles.menu__item__center}>
          <span className={styles.menu__img}>
            some
          </span>
          <span className={styles.menu__img}>
            LOGO
          </span>
        </div>
        <div className={styles.menu__item__right}>
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
}

export default Menu;
import React, { useRef, useEffect } from "react";

import styles from './Menu.module.css';
import Image from "next/image";
import { gsap } from 'gsap';
import smiley from 'public/fonts/smiley.png'


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
            ui designer
          </span>
        </div>
        <div className={styles.menu__item__center}>

          <Image
            src={smiley}
            width={50}
            height={50}
            alt="Picture of the author"
          />

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
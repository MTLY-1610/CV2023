import React, { useRef, useEffect } from "react";
import styles from './Menu.module.css'

function Menu() {
  return (
    <div className={styles.menu__wrapper}>
      <span>
        NAME
      </span>
      <span>
       LOGO
      </span>
      <span>
        BURGER
      </span>
    </div>
  );
}

export default Menu;
import React, { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap';
import styles from './Bottom.module.css';


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
    const tl = gsap.timeline({ delay: 5 });


    return () => {
      tl.kill();
    };
  }, []);


  return (
    <div className={styles.bottom__wrapper}>
            <div className={styles.bottom__border}>
      </div>

      <div className={styles.bottom__items}>
      <div className={styles.bottom__items__left}>
        <span>item</span>
        <span>item</span>
        <span>item</span>
        <span>item</span>
        </div>
        <div className={styles.bottom__items__center}>
        <span>item</span>
        <span>item</span>
        <span>item</span>
        <span>item</span>
        </div>
        <div className={styles.bottom__items__right}>
        <span>item</span>
        <span>item</span>
        <span>item</span>
        <span>item</span>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
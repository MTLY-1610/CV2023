import React, { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap';
import styles from './Footer.module.css';
import Image from "next/image";
import linkedin from 'public/img/logo__linkedin.svg';
import github from 'public/img/logo__github.svg';


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

  useEffect(() => {
    const tl = gsap.timeline({ delay: 5 });

    return () => {
      tl.kill();
    };
  }, []);


  return (
    <div className={styles.bottom__wrapper}>
      <div className={styles.bottom__items}>
        <div className={styles.bottom__items__left}>
          <span>
            <Image
              className={styles.linkedin}
              src={linkedin}
              alt="linkedin logo"
            />
          </span>
          <span>
            <Image
              className={styles.github}
              src={github}
              alt="github logo"
            />
          </span>
        </div>
        <div className={styles.bottom__items__center}>
          <span>top</span>
        </div>
        <div className={styles.bottom__items__right}>
          <span>MTLY</span>
         
        </div>
      </div>
    </div>
  );
};

export default Bottom;
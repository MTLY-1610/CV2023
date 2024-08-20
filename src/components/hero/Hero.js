import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.css';
import Image from "next/image";
import smiley from 'public/fonts/smiley.png'



const Hero = () => {
  const heroGreet = useRef(null);
  const heroPitch = useRef(null);
  const heroText = useRef(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(heroGreet.current, { opacity: 1, duration: 1 })
      .to(heroGreet.current, { opacity: 0, duration: 1 })
      .to(heroPitch.current, { opacity: 1, duration: 1 });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (isImageVisible) {
      gsap.to(textRef.current, { opacity: 1, duration: 0.5 });
    } else {
      gsap.to(textRef.current, { opacity: 0, duration: 0.5 });
    }
  }, [isImageVisible]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const targetOpacity = scrollY > 50 ? 0 : 1;

      gsap.to(heroPitch.current, { opacity: targetOpacity, duration: 0.5 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
    className={styles.hero__header}>
      <div ref={heroGreet} className={styles.hero__greet}>
        <h1>hello or some greetings</h1>
      </div>
      <div ref={heroPitch} className={styles.hero__pitch}>
        <h1>presentation <span onMouseEnter={() => setIsImageVisible(true)} onMouseLeave={() => setIsImageVisible(false)} className={styles.hero__hover}> text</span> with some fancy image display on hover</h1>
      </div>
      <Image
        ref={textRef}
        width={300}
        height={300}
        src={smiley}
        alt="Fancy display for superficial people"
        className={styles.hero__image}
        style={{ opacity: 0, position: 'absolute' }}
      />
    </div>
  );
};

export default Hero;

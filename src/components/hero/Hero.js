import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.css';


const Hero= () => {
  const heroGreet = useRef(null);
  const heroPitch = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline(); 

    // Fade in the first div, then fade it out while the second one fades in
    tl.to(heroGreet.current, { opacity: 1, duration: 1 }) 
      .to(heroGreet.current, { opacity: 0, duration: 1 }) 
      .to(heroPitch.current, { opacity: 1, duration: 1 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.hero__header}>
      <div ref={heroGreet} className={styles.hero__greet}>
      <h1>hello or some greetings</h1>
      </div>
      <div ref={heroPitch} className={styles.hero__pitch}>
      <h1>Some presentation with some fancy image display on hover</h1>
      </div>

    </div>
  );
};

export default Hero;

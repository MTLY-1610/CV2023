import React, { useEffect, useRef, useState } from 'react';
import gsap  from 'gsap';
import styles from './Hero.module.css';
import Image from 'next/image';
import smiley from 'public/img/smiley.png';
import quote from 'public/img/quote.svg'


const Hero = () => {

  const heroItem1 = useRef(null);
  const heroItem2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2 });
    tl.to(
      heroItem1.current,
      { opacity: 1, duration: 0.75, ease: "power3.out" }
    ).to(
      heroItem2.current,
      { opacity: 1, duration: 0.75, ease: "power3.out", delay: 1 }
    );
  
    return () => {
      tl.kill();
    };
  }, []);


  return (
    <section id='sectionZero' className={styles.hero__header}>
      <div ref={heroItem1}className={styles.quote__wrapper}>
        <Image
               src={quote}
               alt="Fancy display for superficial people"
               className={styles.quote}
        />
      </div>
      <div ref={heroItem2} className={styles.text__wrapper}>
        <p > My name is Mathieu but people call me Matt.<br/>
        I am a french UI designer and developer. <br/>
        I like to make   cool and user-centric interfaces.   <Image
                src={smiley}
                alt="Fancy display for superficial people"
                className={styles.hero__image}/>
        </p>
      </div>
   </section>
  );
};

export default Hero;
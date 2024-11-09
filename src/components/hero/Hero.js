import React, { useEffect, useRef, useState } from 'react';
import gsap  from 'gsap';
import styles from './Hero.module.css';
import Image from 'next/image';
import smiley from 'public/img/smiley.png';


const Hero = () => {
  return (
    <section id='sectionZero' className={styles.hero__header}>
      <p className={styles.p__one}><sup className={styles.quote}>,,</sup> My name is Mathieu but people call me Matt.
      I am a french UI designer and developer. 
      </p> 
      <p className={styles.p__one}>I like to cool and user-centric interfaces.   <Image
              src={smiley}
              alt="Fancy display for superficial people"
              className={styles.hero__image}
         
            />
   
      </p>
     
   </section>
  );
};

export default Hero;
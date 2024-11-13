import React, { useEffect, useRef, useState } from 'react';
import gsap  from 'gsap';
import styles from './Hero.module.css';
import Image from 'next/image';
import smiley from 'public/img/smiley.png';
import quote from 'public/img/quote.svg'


const Hero = () => {
  return (
    <section id='sectionZero' className={styles.hero__header}>
      <div className={styles.quote__wrapper}>
        <Image
               src={quote}
               alt="Fancy display for superficial people"
               className={styles.quote}
        />
      </div>
      <div className={styles.text__wrapper}>
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
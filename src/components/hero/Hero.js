import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.css'; // Ensure this path is correct
import Image from "next/image";
import smiley from 'public/img/smiley.png';

const Hero = () => {
  const heroGreet = useRef([]);
  const heroPitchSentenceOne = useRef([]);
  const heroPitchSentenceTwo = useRef([]);
  const hoverTextRef = useRef([]);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate each letter of "BONJOUR" individually
    heroGreet.current.forEach((letter, index) => {
      tl.to(letter, { opacity: 1, duration: 0.2 }, index * 0.2);
    });

    tl.to(heroGreet.current, { opacity: 0, duration: 1, delay: 3 });

    // Animate each letter in sentence one
    heroPitchSentenceOne.current.forEach((letter, index) => {
      tl.to(letter, { opacity: 1, duration: 0.02 }, "+=0.02");
    });

    // Animate each letter in sentence two
    heroPitchSentenceTwo.current.forEach((letter, index) => {
      tl.to(letter, { opacity: 1, duration: 0.02 }, "+=0.02");
    });

    // Animate each letter in hoverTextRef
    hoverTextRef.current.forEach((letter, index) => {
      tl.to(letter, { opacity: 1, duration: 0.02 }, "+=0.02");
    });

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

      gsap.to(heroPitchSentenceOne.current, { opacity: targetOpacity, duration: 0.5 });
      gsap.to(heroPitchSentenceTwo.current, { opacity: targetOpacity, duration: 0.5 });
      gsap.to(hoverTextRef.current, { opacity: targetOpacity, duration: 0.5 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.hero__header}>
      <div className={styles.hero__greet}>
        {"BONJOUR".split("").map((letter, index) => (
          <span
            key={index}
            ref={(el) => {
              if (el) heroGreet.current[index] = el;
            }}
            className={styles.hero__letter}
            style={{ opacity: 0 }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className={styles.hero__pitch}>
        <div className={styles.hero__pitch__sentence_one}>
          {"I am a french Frontend developer and UI designer based in Gothenburg Sweden, who takes pride in designing and developing immersive and cool looking content. ".split("").map((letter, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) heroPitchSentenceOne.current[index] = el;
              }}
              className={styles.hero__letter}
              style={{ opacity: 0 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        <div className={styles.hero__pitch__sentence_two}>
          {"Currently freelancing I'd like to find a new cosy full time home where I can develop my development skills while having fun.".split("").map((letter, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) heroPitchSentenceTwo.current[index] = el;
              }}
              className={styles.hero__letter}
              style={{ opacity: 0 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}

        </div>
        <div className={styles}>
        <span 
          onMouseEnter={() => setIsImageVisible(true)} 
          onMouseLeave={() => setIsImageVisible(false)} 
          className={styles.hero__hover}
        >
          {"(that's me by the way)".split("").map((letter, index) => (
            <span 
              key={index} 
              ref={(el) => {
                if (el) hoverTextRef.current[index] = el;
              }} 
              className={styles.hero__letter}
              style={{ opacity: 0 }} // Initial opacity set to 0
            >
            {letter === " " ? "\u00A0" : letter} 
            </span>
          ))}
        </span> 
        </div>

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
import React, { useEffect, useRef, useState } from 'react';
import gsap  from 'gsap';
import styles from './Hero.module.css';
import Image from "next/image";
import smiley from 'public/img/smiley.png';

const Hero = () => {
  const heroGreet = useRef([]);
  const heroPitchSentenceOne = useRef([]);
  const heroPitchSentenceTwo = useRef([]);
  const smileyRef = useRef(null);
  const [isImageVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.5 } });
  
    tl.to(heroGreet.current, {
      opacity: 1,
      stagger: { each: 0.1, from: "start" },
    })
    .to(heroGreet.current, { opacity: 0, duration: 1, delay: 1 })
    .to(heroPitchSentenceOne.current, {
      opacity: 1,
      stagger: { each: 0.15, from: "start" },
    }, "+=0.5")
    .to(heroPitchSentenceTwo.current, {
      opacity: 1,
      stagger: { each: 0.15, from: "start" },
    }, "+=0.5")
    .to(smileyRef.current, { opacity: 1, duration: 0.5 }, "-=0.5");
  
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

      gsap.to([heroPitchSentenceOne.current, heroPitchSentenceTwo.current, smileyRef.current], {
        opacity: targetOpacity,
        duration: 0.5,
      });
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
          {"I am a french Frontend developer and UI designer based in Gothenburg Sweden, who takes pride in designing and developing immersive and cool looking content.".split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) heroPitchSentenceOne.current[index] = el;
              }}
              className={styles.hero__word}
              style={{ opacity: 0, display: 'inline-block'}}
            >
              {word}
              {index < heroPitchSentenceOne.current.length - 1 && "\u00A0"}
            </span>
          ))}
        </div>
        <div className={styles.hero__pitch__sentence_two}>
          {"Currently freelancing I'd like to find a new cosy full time home where I can develop my skills while having fun.".split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) heroPitchSentenceTwo.current[index] = el;
              }}
              className={styles.hero__word}
              style={{ opacity: 0, display: 'inline-block'}}
            >
              {word}
              {index < heroPitchSentenceTwo.current.length - 1 && "\u00A0"}
            </span>
          ))}
          <span 
            ref={smileyRef} 
            style={{ opacity: 0, display: 'inline-block' }}
          >
            <Image
              src={smiley}
              alt="Fancy display for superficial people"
              className={styles.hero__image}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from './HorizSection.module.css'
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

function HorizSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className={styles.scroll_section__outer}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={styles.scroll_section__inner}>
          <section id="sectionOne" className={styles.scroll_section}>
            <SectionOne />
          </section>
          <section id="sectionTwo" className={styles.scroll_section}>
            <SectionTwo />
          </section>
          <section id="sectionThree" className={styles.scroll_section}>
            <SectionThree />
          </section>
          <section id="sectionFour" className={styles.scroll_section}>
            <SectionFour />
          </section>
        </div>
      </div>
    </section>
  );
}

export default HorizSection;

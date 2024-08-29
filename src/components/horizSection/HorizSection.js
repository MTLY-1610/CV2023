import React, { useRef, useEffect } from "react";
import gsap  from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from './HorizSection.module.css'

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
          <div className={styles.scroll_section}>
            <h3>Section 1</h3>
          </div>
          <div className={styles.scroll_section}>
            <h3>Section 2</h3>
          </div>
          <div className={styles.scroll_section}>
            <h3>Section 3</h3>
          </div>
          <div className={styles.scroll_section}>
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizSection;

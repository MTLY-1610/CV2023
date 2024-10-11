import React, { useRef,useState, useEffect } from "react";
import gsap  from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from './SectionTwo.module.css'

const SectionTwo = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const refs = useRef([]);

    const toggleContent = (index) => {
        const currentElement = refs.current[index];

        if (activeIndex === index) {
            // Close the currently active section
            gsap.to(currentElement, {
                height: 0,
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
            });
            setActiveIndex(null);
        } else {
            // Close the previously active section
            if (activeIndex !== null) {
                const previousElement = refs.current[activeIndex];
                gsap.to(previousElement, {
                    height: 0,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.inOut",
                });
            }

            // Open the clicked section
            gsap.set(currentElement, { height: "auto", opacity: 1 });
            const autoHeight = currentElement.scrollHeight; // Get natural height

            gsap.fromTo(
                currentElement,
                { height: 0, opacity: 0 },
                {
                    height: '12vh',
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.inOut",
                }
            );

            setActiveIndex(index);
        }
    };

    return (
        <div className={styles.section__wrapper}>
        
            <div className={styles.collaps__wrapper}>
                <div className={styles.collaps__one}>
                    <div className={styles.collaps__content} onClick={() => toggleContent(1)}>
                        <h1>STACK</h1>
                        <h6>01</h6>
                    </div>
                    <div
                        ref={(el) => (refs.current[1] = el)}
                        className={styles.collaps__one__paragraph}
                        style={{ overflow: 'hidden', height: 0, opacity: 0 }}
                    >
                        HTML, CSS, SCSS, Tailwind, Javascript, Typescript, Next, React, Angular, Vue, Nexus, Python (basics), Mysql, MongoDB, Express, Node, MERN, CERN, GIT.
                    </div>
                    <div className={styles.separator}></div>
                </div>

                <div className={styles.collaps__two}>
                    <div className={styles.collaps__content} onClick={() => toggleContent(2)}>
                        <h1>VISION</h1>
                        <h6>02</h6>
                    </div>
                    <div
                        ref={(el) => (refs.current[2] = el)}
                        className={styles.collaps__two__paragraph}
                        style={{ overflow: 'hidden', height: 0, opacity: 0 }}
                    >
                        HTML, CSS, SCSS, Tailwind, Javascript, Typescript, Next, React, Angular, Vue, Nexus, Python (basics), Mysql, MongoDB, Express, Node, MERN, CERN, GIT.
                    </div>
                    <div className={styles.separator}></div>
                </div>

                <div className={styles.collaps__three}>
                    <div className={styles.collaps__content} onClick={() => toggleContent(3)}>
                        <h1>PROJECTS</h1>
                        <h6>03</h6>
                    </div>
                    <div
                        ref={(el) => (refs.current[3] = el)}
                        className={styles.collaps__three__paragraph}
                        style={{ overflow: 'hidden', height: 0, opacity: 0 }}
                    >
                        HTML, CSS, SCSS, Tailwind, Javascript, Typescript, Next, React, Angular, Vue, Nexus, Python (basics), Mysql, MongoDB, Express, Node, MERN, CERN, GIT.
                    </div>
                    <div className={styles.separator}></div>
                </div>
            </div>
            <div className={styles.section__name}>
                DESIGN
            </div>
        </div>
    );
};


export default SectionTwo;
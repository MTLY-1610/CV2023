import React from "react";
import styles from './Footer.module.css'
import ContactForm from "./ContactForm";
import Bottom from "./Bottom"

function Footer({ elapsedTime }) {
  return (
    <section id="sectionFive" className={styles.footer}>
      <div className={styles.spacer}></div>
      <ContactForm elapsedTime={elapsedTime} o/>
      <Bottom />
    </section>
  );
}

export default Footer;

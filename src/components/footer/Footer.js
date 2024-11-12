import React from "react";
import styles from './Footer.module.css'
import ContactForm from "./ContactForm";
import Bottom from "./Bottom"

function Footer() {
  return (
    <section id="sectionFive" className={styles.footer}>
      <div className={styles.spacer}></div>
      <ContactForm />
      <Bottom />
    </section>
  );
}

export default Footer;

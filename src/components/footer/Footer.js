import React from "react";
import styles from './Footer.module.css'
import ContactForm from "./contactform/ContactForm";
import Bottom from "./Bottom"

function Footer() {
  return (
    <section id="sectionFive" className={styles.footer}>
      {/* <ContactForm /> */}
      <Bottom />
    </section>
  );
}

export default Footer;

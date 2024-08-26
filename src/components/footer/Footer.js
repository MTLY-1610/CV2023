import React from "react";
import styles from './Footer.module.css'
import ContactForm from "./contactform/ContactForm";
import Bottom from "./bottom/Bottom"

function Footer() {
  return (
    <div className={styles.footer}>
      {/* <ContactForm /> */}
      <Bottom />
    </div>
  );
}

export default Footer;

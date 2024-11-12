import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Footer.module.css'; 
import Image from 'next/image';
import quote from 'public/img/quote.svg'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required.';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required.';
    if (!subject) newErrors.subject = 'Subject is required.';
    if (!message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
        setStatus('Failed to send the message.');
      });
  };

  return (
    <div className={styles.contact__wrapper}>
      <Image
              src={quote}
              alt="Fancy display for superficial people"
              className={styles.quote}
         
            />
      <div className={styles.contactText} >
        
        <p>Thanks you for the time you spent reading this blabla ! <br/> <br/>
        [or some bullshit text...]</p>
      </div>
      <div className={styles.contactForm}>
        <h2>BEEP ME</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formWrapper}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {errors.subject && <p className={styles.error}>{errors.subject}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>
          <button className={styles.contact__button} type="submit">Send</button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </div>
  );
  
};

export default ContactForm;
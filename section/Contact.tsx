import Button from '@/components/Button';
import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">
        <span>&#65371;</span> What&apos;s Next? <span>&#65373;</span>
      </h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <div className="contact-cta">
        <Button link="mailto:ocritocrit@gmail.com" text="Say Hello" />
      </div>
    </section>
  );
};

export default Contact;

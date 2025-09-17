import React from 'react';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xdklrdde");

  if (state.succeeded) {
    return (
      <section id="contact" className="section contact">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="form-status success">
            <h3>Thank you for your message!</h3>
            <p>I'll get back to you as soon as possible.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p>I'm always interested in new opportunities and collaborations. Let's connect!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="submit-button" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
          {state.errors && state.errors.length > 0 && (
            <p className="form-status error">
              There was an error sending your message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
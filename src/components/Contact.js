import { useForm } from '@formspree/react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [state, handleSubmit] = useForm("xdklrdde");

  if (state.succeeded) {
    return (
      <section id="contact" className="section contact">
        <AnimatedSection animation="fadeInUp" delay={0.1}>
          <h2>Get In Touch</h2>
        </AnimatedSection>
        <AnimatedSection animation="scaleIn" delay={0.2}>
          <div className="contact-content">
            <div className="form-status success">
              <h3>🎉 Thank you for your message!</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    );
  }

  return (
    <section id="contact" className="section contact">
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <h2>Get In Touch</h2>
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <div className="contact-content">
          <p>I'm always interested in new opportunities and collaborations. Let's connect!</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <span className="form-icon">👤</span>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <span className="form-icon">📧</span>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <span className="form-icon">💬</span>
            </div>
            <button type="submit" className="submit-button" disabled={state.submitting}>
              {state.submitting ? '📤 Sending...' : '🚀 Send Message'}
            </button>
            {state.errors && state.errors.length > 0 && (
              <div className="form-status error">
                <p>❌ There was an error sending your message. Please try again.</p>
              </div>
            )}
          </form>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
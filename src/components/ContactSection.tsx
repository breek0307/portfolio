import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let's Build Something Great</h2>
      <p className="contact-description">
        I'm actively seeking new opportunities. Whether you have a project in mind 
        or just want to connect, I'd love to hear from you.
      </p>
      <a href="mailto:hello@vedant.dev" className="btn-contact">
        <Mail className="w-5 h-5" />
        Get In Touch
      </a>
    </section>
  );
};

export default ContactSection;

import React from "react";
import "./ContactUsSection.css";
import contactImage from "../../assets/contactUs.png"; // Replace with the correct image path

const ContactUsSection = () => {
  return (
    <div className="contact-us-section">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Phone Number *" required />
          <input type="email" placeholder="E-mail *" required />
          <input type="text" placeholder="Interested In" required />
          <textarea placeholder="Message *" required></textarea>
          <button type="submit">Send Email →</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={contactImage} alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactUsSection;

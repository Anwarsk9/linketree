import React from "react";
import "./Contact.css"; // Import CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Get in Touch</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="info-title">Contact Information</h2>
          <p className="info-text">
            We&apos;re here to help! Reach out to us via phone or email.
          </p>
          <p className="info-text">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="info-text">
            <strong>Email:</strong> info@example.com
          </p>
          <p className="info-text">
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
        </div>
        <div className="contact-form">
          <h2 className="form-title">Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Enter your message"
                rows={4}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

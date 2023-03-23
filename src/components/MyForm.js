import "./MyFormStyle.css";
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaMailBulk, FaPhone, FaSpinner, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MyForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const form = useRef();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    setMessage(null);
    setErrorMessage(null);
    e.preventDefault();
    const userEmail = e.target.user_email.value;

    if (!validateEmail(userEmail)) {
        setErrorMessage("Please enter a valid email address.");
        return;
    }

    setLoading(true);
    emailjs
      .sendForm("service_5z43xno", "template_yopp9kg", form.current, "8kM_BFfbW98m-Sl0t")
      .then(() => {
        setLoading(false);
        setMessage("Your message was sent successfully!");
        setErrorMessage(null);
        e.target.reset();
      })
      .catch((error) => {
        setLoading(false);
        setMessage(null);
        setErrorMessage(`There was an error sending your message: ${error.message}`);
      });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="left">
          <div className="social-links">
            <div className="social-link">
              <NavLink to="https://wa.me/+254725341547">
                <FaWhatsapp />
                <h2>WhatsApp</h2><h3>+254 725 341 547</h3>
              </NavLink>
            </div>
            <div className="social-link">
              <NavLink to="mailto:kipchirchirraph@gmail.com">
                <FaMailBulk />
                <h2>Email</h2><h3>kipchirchirraph@gmail.com</h3>
              </NavLink>
            </div>
            <div className="social-link">
              <NavLink to="tel:+254725341547">
                <FaPhone />
                <h2>Phone</h2><h3>+254 725 341 547</h3>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="form">
            {loading ? (
              <div className="loading">
                <FaSpinner />
                <p>Sending...</p>
              </div>
            ) : (
              ""
            )}
            {message && <p className="success">{message}</p>}
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form ref={form} onSubmit={sendEmail}>
              <label>Your Name</label>
              <input type="text" name="user_name" required></input>
              <label>Email</label>
              <input type="email" name="user_email" required></input>
              <label>Subject</label>
              <input type="text" name="subject" required></input>
              <label>Message</label>
              <textarea rows="6" placeholder="Type your message here" name="message" required/>
                  <button className="btn" value="Send">Submit</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyForm;
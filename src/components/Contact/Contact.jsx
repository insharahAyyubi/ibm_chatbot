import React from "react";

import "../Header/Header.css";
import "./Contact.css";
import Header from '../Header/Header'
import Footer from "../Footer";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "00728414-f529-402e-9c83-609131f1e3f2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="outer">
   <Header></Header>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Sends us a message
            <img className="msgImg" src="msg.png" alt="" />
          </h3>
          <p>
            Have a question or just want to say hello? We're here to help! Our
            team is dedicated to providing exceptional support and guidance.
            Whether you're interested in learning more about our services or
            just want to chat, we're all ears. Feel free to reach out to us
            anytime using the contact form. We'll get back to you promptly and
            look forward to connecting!
          </p>
          <ul>
            <li>
              <img src="mail.png" alt="" />
              johndoe98765@gmail.com
            </li>
            <li>
              <img src="phone.png" alt="" />
              +91 94288464621
            </li>
            <li>
              <img src="pin.png" alt="" />
              123 Main St, Anytown, CA 12345
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Your email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

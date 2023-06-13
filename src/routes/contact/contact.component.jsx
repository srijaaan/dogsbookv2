import React from "react";
import "./contact.styles.css";

const Contact = () => {
  return (
    <div className="contactcontainer">
      <h1 className="text-white font-semibold text-3xl md:text-5xl">
        Contact Us
      </h1>
      <hr className=" w-36 md:w-52 mt-3 border-2 rounded-sm mb-6" />
      <div className="contact-box rounded-2xl -mb-36">
        <div className="left rounded-2xl"></div>
        <div className="right">
          <h2>Contact Us</h2>
          <input type="text" className="field" placeholder="Your Name" />
          <input type="text" className="field" placeholder="Your Email" />
          <input type="text" className="field" placeholder="Phone" />
          <textarea placeholder="Message" className="field"></textarea>
          <button className="btn">Send</button>
        </div>
      </div>
      <h3 className="footer">Made with Love for Dogs ❤</h3>
    </div>
  );
};

export default Contact;

import React from "react";
import { FaFacebook, FaInstagram, FaMailBulk, FaTwitter } from "react-icons/fa";
import "./Contact.css";
import Button from "../Button/Button";
const Contact = () => {
  return (
    <div>
      <div>
        <h4>Follow Us</h4>
      </div>
      <div className="social-icon">
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
      </div>
      <div>
        <h4>Receive exclusive offers in your mailbox</h4>

        <div className="input-txt">
          <div className="mail-box">
            <span className="mail-icon">
              <FaMailBulk />
            </span>
            <input
              type="text"
              className="txt-fild"
              placeholder="  Enter Your email"
            />
          </div>
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

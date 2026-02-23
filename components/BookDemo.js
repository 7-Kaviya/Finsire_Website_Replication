import React from "react";
import "../components/bookDemo.css";
import logo from "../images/logo.png";
import Footer from "../components/Footer";
import Distributors from "../components/Distributors";

export default function BookDemo({ goTo }) {
  return (
    <div className="demo-page">
      {/* Top Navbar */}
      <div className="demo-navbar">
        <div className="demo-logo">
          <img src={logo} alt="FINSIRE" className="logo-img" />
        </div>
        <button className="back-btn" onClick={() => goTo("distributors")}>Go Back to Website</button>
      </div>

      <div className="demo-container">
        {/* LEFT SIDE */}
        <div className="demo-left">
          <h1>Book a Demo <br /> Call with us</h1>

          <p>
            Partner with Finsire to experience industry leading digital
            infrastructure for assets. Simply fill out the form and tell us
            about your vision and requirements.
          </p>

          <div className="contact-info">
            <p>CONTACT US: support@finsire.com</p>
            <p>PHONE: +91 73582 60365</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="demo-form">
          <p className="form-title">
            We will try to contact you as soon as possible!
          </p>
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" placeholder="Fnter your First Name" required/>
          </div>

          <div className="form-group">
            <label htmlFor="companyName">Company Name*</label>
            <input type="text" placeholder="Enter your Company Name" required/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID*</label>
            <input type="email" placeholder="Enter Your Email ID" required/>
          </div>

        <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" placeholder="Enter Your Phone Number" />
        </div>

          <button className="submit-btn">Request Access</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
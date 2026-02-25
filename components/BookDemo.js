import React from "react";
import "../components/bookDemo.css";
import Footer from "../components/Footer";

export default function BookDemo({ goTo }) {
  return (
    <div className="demo-page">
      {/* Top Navbar */}
      <div className="demo-navbar">
        <div className="demo-logo">
          <img src="/logo2.png" alt="FINSIRE" className="logo-img" />
        </div>
        <button className="back-btn" onClick={() => goTo("home")}>Go Back to Website</button>
      </div>

      <div className="demo-container">
        {/* LEFT SIDE */}
        <div className="demo-left">
          <h1>Book a Demo <br /> Call with us</h1>

          <h3>
            Partner with Finsire to experience industry leading digital
            infrastructure for assets. Simply fill out the form and tell us
            about your vision and requirements.
          </h3>
          <img src="/demo.png" alt="demo" className="demo-img" /><br />
          <h4>Don’t like filling forms? Alternate ways to contact us.</h4>
          <div className="contact-info">
             ✉ CONTACT US: <a href="mailto:support@finsire.com">SUPPORT@FINSIRE.COM</a>
             <span className="phone">📞PHONE: <a href="tel:+917358260365">+91 73582 60365</a></span>
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
      <Footer goTo={goTo} />
    </div>
  );
}
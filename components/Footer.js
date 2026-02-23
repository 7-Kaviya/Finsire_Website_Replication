import React from "react";
import logo from "../images/logo.png";
export default function App() {
  return (
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="logo" className="logo-img" />
            <p>Empower your decisions effortlessly with our suite <br />
              designed to optimize operations and elevate <br />
              customer experience.</p>
              <p>Contact us: <a href="support@finsire.com">support@finsire.com</a></p>
          </div>

          <div className="footer-links">
            <span>DISTRIBUTORS</span>
            <span>BLOGS</span>
            <span>MEDIA</span>
            <span>CAREERS</span>
            <span>ABOUT US</span>
            <span>GRIEVANCE</span>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Finsire Technologies Pvt. Ltd.
        </div>
        <div className="address">
          Address: #48, 1st Floor, 2nd Street, Balaji Nagar, Royapettah, Chennai, Tamil Nadu - 600 014
        </div>
      </footer>
  );
}
import React from "react";
import "../components/bookDemo.css";
import Footer from "../components/Footer";

export default function BookDemo({ goTo }) {
  return (
    <div className="demo-page">
      {/* Top Navbar */}
      <div className="demo-navbar">
        <div className="demo-logo">
          <img src="/logo2.png" alt="FINSIRE" className="logo-img" />       <span>CAREERS</span>
        </div>
        <button className="back-btn" onClick={() => goTo("home")}>Go Back to Website</button>
      </div>

      <div className="careers-container">
        <img src="/careers.png" alt="careers" className="careers-img" />
        <h1>No current openings,<br />
         but we’d love to connect.</h1>
        <h3>Follow us for updates and be the first to know <br />
        when new opportunities drop!</h3>
        <div className="careers-contact">
        <div className="left">
            <p>Drop your resume at</p>
            <p><a href="mailto:hr@finsire.com">hr@finsire.com ↗</a></p>
        </div>
        <div className="vertical-line"></div>
        <div className="right">
            <p>Follow us on</p>
            <p><a href="https://www.linkedin.com/company/finsire/posts/?feedView=all">LinkedIn ↗</a></p>
        </div>
      </div>
      </div>
      <Footer goTo={goTo} />
    </div>
  );
}
import React from "react";
import logo from "../images/logo.png";
import centreImage from "../images/centreimage.png";
import threeWay from "../images/threeway.png";
import Footer from "../components/Footer";

export default function Distributors({ goTo }) {
  return (
    <div className="page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="FINSIRE" className="logo-img" />

        </div>

        <div className="nav-center">
          <button>DISTRIBUTORS</button>
          <button>BLOGS</button>
          <button>MEDIA</button>
          <button onClick={() => goTo("careers")}>CAREERS</button>
          <button onClick={() => goTo("aboutus")}>ABOUT US</button>
        </div>

        <div className="nav-right">
          <button className="outline-btn" onClick={() => goTo("bookdemo")}>Book a Demo</button>
          <button className="primary-btn">Get a Loan</button>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}

      <section className="hero">
        <h4 className="hero-top-text">
          POWERING BANKS, NBFCs & FINTECHS TO LAUNCH AND SCALE SEAMLESSLY
        </h4>

        <h1>
          Digital Infrastructure for <br />
          Loan Against Mutual Funds and Shares
        </h1>

        <p className="hero-subtext">
          <span className="check">✔</span> The Tech Stack is Compliant with the
          Regulator Approved Process
        </p>

        {/* HERO IMAGES */}

        <div className="hero-images">
          <img src={centreImage} alt="center screen" />
        </div>

        <button className="primary-btn large-btn" onClick={() => goTo("bookdemo")}>
          Request access →
        </button>
      </section>

      {/* ================= LENDERS SECTION ================= */}

      <section className="section">
        <p className="section-label">SOLUTION FOR LENDERS</p>
        <h2>Plug and Play for Secured Credit</h2>

        <div className="card-row">
          <div className="info-card">
            <h3>Loan Origination System</h3>
            <ul>
              <li>Instant on-boarding</li>
              <li>Dynamic pledging flows</li>
              <li>Portfolio discovery with CAS & AA flows</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Collateral Management System</h3>
            <ul>
              <li>Maker-checker flows</li>
              <li>Collateral risk management</li>
              <li>Invoke and revoke functionalities</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Loan Management System</h3>
            <ul>
              <li>Integration for secured lending</li>
              <li>Core banking insights</li>
              <li>LSPs/DLAs/DSAs management</li>
            </ul>
          </div>
          <div>
            <h4 className="info">❖ An all-in-one platform to originate, manage, and scale secured lending ❖</h4>
          </div>
        </div>

        <button className="outline-btn" onClick={() => goTo("bookdemo")}>Book a Demo</button>
      </section>

      {/* ================= DISTRIBUTORS SECTION ================= */}

      <section className="section light-grid">
        <p className="section-label">SOLUTION FOR DISTRIBUTORS</p>
        <h2>Embed Secured Lending into Your Ecosystem</h2>
        <div>
          <img src={threeWay} alt="threeway" className="threeway-img" />
        </div>
        <p className="dist-subtext">Real-time lien marking <span className="star"> ✦ </span> Multi-lender integration <span className="star">✦</span> Regulator approved workflows 
        </p>
        <div>
          <h4 className="info1">❖ Seamlessly embed secured credit journeys into your applications ❖</h4>
        </div>

        <div className="button-row">
          <button className="text-btn">Test the flow ↗</button>
          <button className="primary-btn" onClick={() => goTo("bookdemo")}>Book a demo →</button>
        </div>
      </section>

      {/* ================= AUDIENCE SECTION ================= */}

      <section className="section">
        <p className="section-label">
          SOLUTION FOR LENDERS & NON-LENDERS
        </p>

        <h2>
          Build for lenders. Trusted by Fintech & Wealth Managers.
        </h2>

        <div className="card-row">
          <div className="info-card">
            <h3>For Lenders</h3>
            <h4>BANKS/NBFCs</h4>
            <ul>
              <li>Faster loan processing</li>
              <li>Real-time valuation</li>
              <li>Reduced non-performing assets</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>For Non-Lenders</h3>
            <h4>WEALTH MANAGERS/FINTECH</h4>
            <ul>
              <li>Offer credit services</li>
              <li>Integrate multi lenders</li>
              <li>Provide both Overdraft & Term Loan</li>
            </ul>
          </div>
          </div>
      </section>

      {/* ================= STEPS SECTION ================= */}

      <section className="section">
        <p className="section-label">WE BELIEVE IN SPEED</p>
        <h2>Launch in Weeks, Not Months.</h2>

         <div className="steps-row">
          <div className="steps">
            <h1>01</h1>
            <h3>CONNECT</h3>
            <h4>Integrate systems seamlessly</h4>
          </div>
          <div className="steps">
            <h1>02</h1>
            <h3>ONBOARD</h3>
            <h4>Verify users and portfolios</h4>
          </div>
          <div className="steps">
            <h1>03</h1>
            <h3>PLEDGE</h3>
            <h4>Enable secure, real-time lien marking</h4>
          </div>
          <div className="steps">
            <h1>04</h1>
            <h3>DISBURSE & MANAGE</h3>
            <h4>Automate loan disbursal and portfolio monitoring</h4>
          </div>
          <div>
            <h4 className="info">❖ Finsire handles secured lending and you focus on customers ❖</h4>
          </div>
          </div>

        <button className="primary-btn" onClick={() => goTo("bookdemo")}>Start integration →</button>
      </section>

      {/* ================= SECURITY SECTION ================= */}

      <section className="section">
        <p className="section-label">COMPLIANCE & SECURITY</p>
        <h2>Regulated. Secure. Enterprise-Grade.</h2>
        <p className="hero-subtext">
          <span className="check">✅</span>Every loan flow is built with compliance and data security at its core
        </p>
        <div className="card-row">
          <div className="info-card">
            <p>SEBI-compliant lien marking</p>
          </div>

          <div className="info-card">
            <p>RBI-regulated lending partners</p>
          </div>

          <div className="info-card">
            <p>Bank-grade encryption</p>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}

       <div className="CTA">
          <div className="content">
            <h1>Ready to Power the Next <br />
              Generation of Secured Lending?</h1>
            <h3>Join leading banks, NBFCs, and fintechs building <br />
              smarter credit products with Finsire.</h3>
            <button className="primary-btn" onClick={() => goTo("bookdemo")}>Request access →</button>
          </div>
       </div>

      <Footer />

    </div>
  );
}
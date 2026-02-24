import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import centreImage from "../images/centreimage.png";
import threeWay from "../images/threeway.png";
import b1 from "../images/Bank1.png";
import b2 from "../images/Bank2.png";
import b3 from "../images/Bank3.png";
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
          <button onClick={() => goTo("distributors")}>DISTRIBUTORS</button>
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
        <h1>
          Digital Infrastructure for <br />
          Loan Against Mutual Funds and Shares
        </h1>

        <p className="hero-subtext">
          <span className="check">✅</span>Building for RBI-Regulated Banks and NBFCs
        </p>

        {/* HERO IMAGES */}
         <div className="card-row">
          <div className="info-card">
            <div className="hero-images">
              <img src={b1} alt="Bank1" />
            </div>
            <p>City Union Bank</p>
            <h5>LOWEST INTEREST RATE</h5>
          </div>

          <div className="info-card">
            <div className="hero-images">
              <img src={b2} alt="Bank2" />
            </div>
            <p>Bajaj Finance Limited</p>
            <h5>LEADS WITH 35%+ MARKET SHARE</h5>
          </div>

          <div className="info-card">
            <div className="hero-images">
              <img src={b3} alt="Bank3" />
            </div>
            <p>Suryoday Small Finance Bank</p>
            <h5>HIGHEST LOAN-TO-VALUE</h5>
          </div>
          
        </div>

        
        <div className="button-row">
          <button className="text-btn" onClick={() => goTo("bookdemo")}>How it works ↗</button>
          <button className="primary-btn">Check my eligibility →</button>
        </div>
      </section>

      {/* ================= LENDERS SECTION ================= */}

      <section className="section">
        <p className="section-label">WHY LOAN AGAINST MUTUAL FUNDS</p>
        <h2>Key Benefits</h2>

        <div className="steps-row">
          <div className="step">
            <h1>Stay Invested, <br />
               Keep Growing</h1>
            <h4>Your mutual funds remain invested, so you keep earning returns while accessing cash.</h4>
          </div>
          <div className="step">
            <h1>Lower Interest,<br />
                 Higher Value</h1>
            <h4>Enjoy rates far below personal loans or credit cards, with a higher sanctioned amount.</h4>
          </div>
          <div className="step">
            <h1>Flexible Repayments</h1>
            <h4>Pay interest only on what you use and repay principal anytime without penalties.</h4>
          </div>
          <div className="step">
            <h1>Instant & 100% <br />Digital Process</h1>
            <h4>Apply online, pledge digitally, & get disbursal in minutes without branch visits.</h4>
          </div>
          <div>
            <h4 className="info">❖ Enjoy rates lower than personal loans or credit cards, with higher sanctioned limits ❖</h4>
          </div>
          </div>

        <button className="primary-btn" >Check my eligibility →</button>
      </section>

      {/* ================= PROCESS SECTION ================= */}

      <section className="section light-grid">
        <p className="section-label">HOW IT WORKS</p>
        <h2>From Portfolio to Cash in Just 3 Steps</h2>
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
          WHY PLEDGE INSTEAD OF SELLING?
        </p>

        <h2>
          Unlock cash, Preserve wealth
        </h2>

        <div className="steps-row">
          <div className="step1">
            <h1>Compounding Works</h1>
            <h4>Your funds stay invested, keep earning - even while pledged. No loss on market upside.</h4>
          </div>
          <div className="step1">
            <h1>Avoid Bad Timing Losses</h1>
            <h4>Selling in a dip locks losses. Pledging lets you ride the recovery and access cash.</h4>
          </div>
          <div className="step1">
            <h1>Maintain Tax Efficiency</h1>
            <h4>No capital gains tax triggered because you’re not selling units. Keep your tax planning intact.</h4>
          </div>
          <div className="step1">
            <h1>Access More, Pay Less</h1>
            <h4>Get up to 80% of your MF value with lower rates than personal loans or credit cards.</h4>
          </div>
          <div className="step1">
            <h1>Flexibility with Control</h1>
            <h4>Pay interest only on what you use. Repay principal when you want without any penalties.</h4>
          </div>
          <div>
            <h4 className="info">❖ Let your portfolio keep growing while you get the funds you need ❖</h4>
          </div>
          </div>

        <button className="primary-btn" >Check my eligibility →</button>
      </section>

      {/* ================= QUERY SECTION ================= */}

      <section className="section">
        <p className="section-label">FREQUENTLY ASKED QUESTIONS</p>
        <h2>We’ve Got Answers</h2>

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
        <h2>Unlock More Power From Your <br />Portfolio - Starting Today</h2>
        <p className="hero-subtext">100% Secure <span className="star"> ✦ </span> Regulatory Compliant <span className="star">✦</span> No-Prepayment Charges 
        </p>
        <p className="dist-subtext">Stop letting your investments sit idle- unlock instant liquidity.<br />
        Borrow smart, stay invested, and keep growing.</p>
        <div className="button-row">
          <button className="text-btn">Check my eligibility ↗</button>
          <button className="primary-btn" onClick={() => goTo("bookdemo")}>Apply Now →</button>
        </div>
        
      </section>

      <Footer />

    </div>
  );
}
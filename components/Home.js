import React from "react";
import Footer from "../components/Footer";

export default function Distributors({ goTo }) {
  return (
    <div className="page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-left">
          <img src="/logo.png" alt="FINSIRE" className="logo-img" />

        </div>

        <div className="nav-center">
          <button onClick={() => goTo("distributors")}>DISTRIBUTORS</button>
          <button onClick={() => goTo("blogs")}>BLOGS</button>
          <button onClick={() => goTo("media")}>MEDIA</button>
          <button onClick={() => goTo("careers")}>CAREERS</button>
          <button onClick={() => goTo("aboutus")}>ABOUT US</button>
        </div>

        <div className="nav-right">
          <button className="outline-btn1" onClick={() => goTo("bookdemo")}>Book a Demo</button>
          <button className="primary-btn" onClick={() => goTo("loan")}>Get a Loan</button>
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
              <img src="/Bank1.png" alt="Bank1" />
            </div>
            <p>City Union Bank</p>
            <h5>LOWEST INTEREST RATE</h5>
          </div>

          <div className="info-card">
            <div className="hero-images">
              <img src="/Bank2.png" alt="Bank2" />
            </div>
            <p>Bajaj Finance Limited</p>
            <h5>LEADS WITH 35%+ MARKET SHARE</h5>
          </div>

          <div className="info-card">
            <div className="hero-images">
              <img src="/Bank3.png" alt="Bank3" />
            </div>
            <p>Suryoday Small Finance Bank</p>
            <h5>HIGHEST LOAN-TO-VALUE</h5>
          </div>
          
        </div>

        
        <div className="button-row">
          <button className="text-btn" onClick={() => goTo("bookdemo")}>How it works ↗</button>
          <button className="primary-btn" onClick={() => goTo("loan")}>Check my eligibility →</button>
        </div>
      </section>

      {/* ================= LENDERS SECTION ================= */}

      <section className="section1">
        <p className="section-label">WHY LOAN AGAINST MUTUAL FUNDS</p>
        <h2>Key Benefits</h2>

        <div className="steps-row">
          <div className="step">
            <img src="/icon6.png" alt="icon6" className="icon-img" />
            <h1>Stay Invested, <br />
               Keep Growing</h1>
            <h4>Your mutual funds remain invested, so you keep earning returns while accessing cash.</h4>
          </div>
          <div className="step">
            <img src="/icon7.png" alt="icon7" className="icon-img" />
            <h1>Lower Interest,<br />
                 Higher Value</h1>
            <h4>Enjoy rates far below personal loans or credit cards, with a higher sanctioned amount.</h4>
          </div>
          <div className="step">
            <img src="/icon8.png" alt="icon8" className="icon-img" />
            <h1>Flexible Repayments</h1>
            <h4>Pay interest only on what you use and repay principal anytime without penalties.</h4>
          </div>
          <div className="step">
            <img src="/icon9.png" alt="icon9" className="icon-img" />
            <h1>Instant & 100% <br />Digital Process</h1>
            <h4>Apply online, pledge digitally, & get disbursal in minutes without branch visits.</h4>
          </div>
          <div>
            <h4 className="info">❖ Enjoy rates lower than personal loans or credit cards, with higher sanctioned limits ❖</h4>
          </div>
          </div>

        <button className="primary-btn" onClick={() => goTo("loan")}>Check my eligibility →</button>
      </section>

      {/* ================= PROCESS SECTION ================= */}

      <section className="section light-grid">
        <p className="section-label">HOW IT WORKS</p>
        <h2>From Portfolio to Cash in Just 3 Steps</h2>
        <section className="steps-sections">
      <div className="step-rows">
        <img src="/steps.png" alt="Step 1" className="step-image" />

        <div className="step-texts">
          <p className="step-labels">STEP 1/<span>3</span></p>
          <h2>Apply and check eligibility</h2>
          <p>
            Your mutual funds remain invested, so you keep earning returns
            while accessing cash.
          </p>
        </div>
      </div>

      <div className="step-rows">
        <img src="/step2.png" alt="Step 2" className="step-image" />

        <div className="step-texts">
          <p className="step-labels">STEP 2/<span>3</span></p>
          <h2>Pledge your funds</h2>
          <p>
            Select the funds you wish to pledge. Lien marking is carried out
            digitally via a SEBI-compliant process, with no requirement for
            physical paperwork.
          </p>
        </div>
      </div>

      <div className="step-rows">
        <img src="/step3.png" alt="Step 3" className="step-image" />

        <div className="step-texts">
          <p className="step-labels">STEP 3/<span>3</span></p>
          <h2>Get instant disbursal</h2>
          <p>
            The loan is approved within minutes and credited directly to your
            bank account, available 24×7. Your investments stay intact while
            you access liquidity.
          </p>
        </div>
      </div>

    </section>
        
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
            <img src="/icon1.png" alt="icon1" className="icon-img" />
            <h1>Compounding Works</h1>
            <h4>Your funds stay invested, keep earning - even while pledged. No loss on market upside.</h4>
          </div>
          <div className="step1">
            <img src="/icon2.png" alt="icon2" className="icon-img" />
            <h1>Avoid Bad Timing Losses</h1>
            <h4>Selling in a dip locks losses. Pledging lets you ride the recovery and access cash.</h4>
          </div>
          <div className="step1">
            <img src="/icon3.png" alt="icon3" className="icon-img" />
            <h1>Maintain Tax Efficiency</h1>
            <h4>No capital gains tax triggered because you’re not selling units. Keep your tax planning intact.</h4>
          </div>
          <div className="step1">
            <img src="/icon4.png" alt="icon4" className="icon-img" />
            <h1>Access More, Pay Less</h1>
            <h4>Get up to 80% of your MF value with lower rates than personal loans or credit cards.</h4>
          </div>
          <div className="step1">
            <img src="/icon5.png" alt="icon5" className="icon-img" />
            <h1>Flexibility with Control</h1>
            <h4>Pay interest only on what you use. Repay principal when you want without any penalties.</h4>
          </div>
          <br />
          <div>
            <h4 className="info">❖ Let your portfolio keep growing while you get the funds you need ❖</h4>
          </div>
          </div>

        <button className="primary-btn" onClick={() => goTo("loan")}>Check my eligibility →</button>
      </section>

      {/* ================= QUERY SECTION ================= */}

      <section className="section">
        <p className="section-label">FREQUENTLY ASKED QUESTIONS</p>
        <h2>We’ve Got Answers</h2>
        <div className="faq-section">
  <div className="faq-container">

    {/* LEFT FAQ */}
    <div className="faq-card">

      <div className="faq-item">
        <div className="faq-question">
          What exactly is a loan against mutual funds?
          <span>⌄</span>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          How much can I borrow?
          <span>⌄</span>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          Which mutual funds are eligible?
          <span>⌄</span>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          Is my money safe when I pledge?
          <span>⌄</span>
        </div>
      </div>

      <div className="view-all">
        View all ›
      </div>

    </div>

    {/* RIGHT CONTACT CARD */}
    <div className="contact-card">

      <div className="contact-text">
        <div className="badge">LEARN ABOUT LAMF</div>
        <div className="contact-title">
          Call us for a 5-minute practical introduction
        </div>

        <a href="tel:+918645627153" className="call-button">
          📞 +91 86456 27153
        </a>
      </div>
    </div>

  </div>
</div>
      </section>

      {/* ================= SECURITY SECTION ================= */}

      <section className="section">
        <h2>Unlock More Power From Your <br />Portfolio - Starting Today</h2>
        <p className="hero-subtext">100% Secure <span className="star"> ✦ </span> Regulatory Compliant <span className="star">✦</span> No-Prepayment Charges 
        </p>
        <p className="dist-subtext">Stop letting your investments sit idle- unlock instant liquidity.<br />
        Borrow smart, stay invested, and keep growing.</p>
        <div className="button-row">
          <button className="text-btn" onClick={() => goTo("loan")}>Check my eligibility ↗</button>
          <button className="primary-btn" onClick={() => goTo("bookdemo")}>Apply Now →</button>
        </div>
        
      </section>

      <Footer goTo={goTo} />

    </div>
  );
}
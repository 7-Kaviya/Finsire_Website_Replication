import React from "react";
import "../components/BlogStyles.css";
import Footer from "../components/Footer";

export default function BookDemo({ goTo }) {
  return (
    <div className="demo-page">
      {/* Top Navbar */}
      <div className="demo-navbar">
        <div className="demo-logo">
          <img src="/logo2.png" alt="FINSIRE" className="logo-img" />       <span>BLOGS</span>
        </div>
        <button className="back-btn" onClick={() => goTo("home")}>Go Back to Website</button>
      </div>

      <section className="blog-section">
      <h1 className="blog-title">Fresh Read from Finsire</h1>

      <p className="blog-subtitle">
        STAY UPDATED WITH LATEST FEATURES & FINTECH INSIGHTS.
      </p>

      <div className="blog-row">
        <div className="blog-card">
          <img src="/1.png" alt="1" className="blog-img" />
          <h3>6 Things to Know About Loan Against Mutual Funds</h3>
          <p>
            Get fast access to cash without selling your investments with loan
            against mutual funds
          </p>

          <div className="blog-footer">
            <span>15 Apr’ 2024</span>
            <span>6 Min Read</span>
            <button>Read more ▸</button>
          </div>
        </div>

        <div className="blog-card">
          <img src="/2.png" alt="2" className="blog-img" />
          <h3>Myths and Facts About Loan Against Mutual Fund</h3>
          <p>
            Unlock the potential of your investments with our guide to loans
            against mutual funds
          </p>

          <div className="blog-footer">
            <span>11 Jun’ 2024</span>
            <span>3 Min Read</span>
            <button>Read more ▸</button>
          </div>
        </div>

        <div className="blog-card">
          <img src="/3.png" alt="3" className="blog-img" />
          <h3>
            Managing Loan Against Mutual Funds Amid Market Volatility
          </h3>
          <p>
            Discover how market volatility impacts loan against mutual funds and
            en...
          </p>

          <div className="blog-footer">
            <span>19 Jun’ 2024</span>
            <span>3 Min Read</span>
            <button>Read more ▸</button>
          </div>
        </div>
        </div>
       <div className="blog-row">
        <div className="blog-card">
          <img src="/4.png" alt="4" className="blog-img" />
          <h3>
            Loan Against Mutual Funds: Choosing the Right Mutual Funds for Collateral
          </h3>
          <p>
            An approach to selecting mutual funds for collateral purposes. This guid...
          </p>

          <div className="blog-footer">
            <span>26 Jun’ 2024</span>
            <span>4 Min Read</span>
            <button>Read more ▸</button>
          </div>
        </div>

        <div className="blog-card">
          <img src="/5.png" alt="5" className="blog-img" />
          <h3>
            Understanding the Terms of Loan Against Mutual Funds
          </h3>
          <p>
           Explore the essentials of loan terms and interest rates when borrowing a...
          </p>

          <div className="blog-footer">
            <span>25 Jul’ 2024</span>
            <span>4 Min Read</span>
            <button>Read more ▸</button>
          </div>
        </div>

        <div className="blog-card">
          <img src="/6.png" alt="6" className="blog-img" />
          <h3>
            Loan Against Mutual Funds SIP Explained: Tap Liquidity While Staying Invested
          </h3>
          <p>
            Discover how to unlock liquidity from your SIP holdings without breaking
          </p>

          <div className="blog-footer">
            <span>20 Jan’ 2025</span>
            <span>4 Min Read</span>
            <button>Read more ▸</button>
          </div>
        </div>
      </div>

      <div className="blog-row">
        <div className="blog-card">
          <img src="/7.png" alt="7" className="blog-img" />
          <h3>
            Loan Against Mutual Funds: Which Makes More Sense-Term Loan or Overdraft
          </h3>
          <p>
            Discover how to leverage your mutual fund investments for quick financing
          </p>

          <div className="blog-footer">
            <span>20 Jan’ 2025</span>
            <span>4 Min Read</span>
            <button>Read more ▸</button>
          </div>
        </div>

        <div className="blog-card">
          <img src="/8.png" alt="8" className="blog-img" />
          <h3>
            Loan Against Mutual Funds: 5 Times It's the Best Option
          </h3>
          <p>
           Explore 5 situation where a loan against mutual funds helps you meet find
          </p>

          <div className="blog-footer">
            <span>21 Jan’ 2025</span>
            <span>4 Min Read</span>
            <button>Read more ▸</button>
          </div>
        </div>

        <div className="blog-card">
          <img src="/9.png" alt="9" className="blog-img" />
          <h3>
            Mastering Mutual Fund Performance: Essential Tools Simplified
          </h3>
          <p>
            Discover simple, practical tools to understand and evaluate mutual funds
          </p>

          <div className="blog-footer">
            <span>15 Jul’ 2024</span>
            <span>3 Min Read</span>
            <button>Read more ▸</button>
          </div>
        </div>
      </div>
    </section>
      <Footer goTo={goTo} />
    </div>
  );
}
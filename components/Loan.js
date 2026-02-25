import React from "react";
import "./loanstyles.css";

export default function AuthScreen() {
  return (
    <div className="auth-page">

      {/* LEFT SIDE */}

      <div className="auth-left">
        <img src="/loan.png" alt="loan" className="loan-img" />
        <h1>
          Unlock Your Mutual <br />
          Funds, Without Letting <br />
          Them Go.
        </h1>

        <p>
          Get a loan in minutes, keep your funds invested,
          <br />
          and watch them grow.
        </p>
      </div>

      {/* RIGHT SIDE */}

      <div className="auth-right">

        <div className="auth-card">

          <h2>Welcome!</h2>
          <p className="subtitle">
            Keep your investments intact while meeting your financial needs.
          </p>

          <label>Phone Number</label>
          <input placeholder="Enter your phone number" />

          <label>PAN Number</label>
          <input placeholder="Enter your PAN number" />

          <div className="consent-row">
            <div className="checkbox"></div>

            <p>
              By continuing, you agree to Finsire collecting your PAN and phone
              number to access your mutual fund holdings for assessing your loan
              eligibility, in accordance with Finsire's{" "}
              <span>Terms & Conditions</span> and{" "}
              <span>Privacy Policy</span>.
            </p>
          </div>

          <button className="signup-btn">Sign Up</button>

          <p className="login-text">
            Are you already registered? <span>Log in</span>
          </p>

        </div>
      </div>
    </div>
  );
}
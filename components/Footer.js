import React from "react";
export default function Footer({goTo}) {
  return (
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="FINSIRE" className="logo-img" />
            <p>Empower your decisions effortlessly with our suite <br />
              designed to optimize operations and elevate <br />
              customer experience.</p>
              <p>Contact us: <a href="support@finsire.com">support@finsire.com</a></p>
          </div>

          <div className="footer-links">
            <h1>Backed by Institutions and Leaders from</h1>
            <img src="/footer.png" alt="footer" className="footer-img" />
          </div>
        </div>

        <div className="footer-button">
              <button onClick={() => goTo("distributors")}>DISTRIBUTORS</button>
              <button onClick={() => goTo("blogs")}>BLOGS</button>
              <button onClick={() => goTo("media")}>MEDIA</button>
              <button onClick={() => goTo("careers")}>CAREERS</button>
              <button onClick={() => goTo("aboutus")}>ABOUT US</button>
        </div>

        <div className="footer-bottom">
          © 2026 Finsire Technologies Pvt. Ltd.
        </div>
        <div className="address">
          Address: #48, 1st Floor, 2nd Street, Balaji Nagar, Royapettah, Chennai, Tamil Nadu - 600 014
        </div>
        <hr />
        <div className="disclaimer">
          Disclaimer: Loan approval and terms are subject to analysis of your mutual fund portfolio
          and fulfillment of KYC/eligibility criteria. The exact loan-to-value (LTV) offered will depend
          on the type of mutual funds pledged and may vary (e.g. up to ~50% for equity funds and ~75%
          for debt funds, as per industry norms and as per a particular lender). Mutual fund investments
          will be lien-marked in favor of the lender during the tenure of the loan, meaning you cannot redeem
          or sell those units until the loan is repaid. However, you continue to remain the owner of the
          funds and enjoy all gains/dividends. Interest rates and other charges will be clearly 
          disclosed in the sanction letter; please read all terms and conditions carefully. 
          Finsire is a technology platform facilitating loans issued by its partner banks/NBFCs – all 
          loans are at the sole discretion of the lending partners. Mutual Funds are subject to market
          risks; a fall in NAV of pledged funds may require additional collateral or partial repayment (margin call). 
          Make sure to borrow responsibly and have a repayment plan in place to avoid liquidation of your investments.
        </div>
        <div className="finsire">
          <img src="/finsire.png" alt="finsire" className="finsire-img" />
        </div>
      </footer>
  );
}
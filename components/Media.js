import React from "react";
import "../components/BlogStyles.css";
import Footer from "../components/Footer";

export default function BookDemo({ goTo }) {
  return (
    <div className="demo-page">
      <div className="demo-navbar">
        <div className="demo-logo">
          <img src="/logo2.png" alt="FINSIRE" className="logo-img" />                             <span>PRESS & MEDIA</span>
        </div>
        <button className="back-btn" onClick={() => goTo("home")}>Go Back to Website</button>
      </div>
      <hr />
      <h2 className="press-title">INDUSTRY STORY</h2>
      <div className="media-row">
        <div className="media-card">
          <img src="/media1.png" alt="media1" className="blog-img" />
          <p>
            Are loans against stocks and mutual funds good for investors?
          </p>

          <div className="media-footer">
            <span>26 January 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>
        
        <div className="media-card">
          <img src="/media2.png" alt="media2" className="blog-img" />
          <p>
            Is maintaining a credit score of 750 for home loans, car loans or personal loans enough?
          </p>

          <div className="media-footer">
            <span>15 June 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>

        <div className="media-card">
          <img src="/media1.png" alt="media1" className="blog-img" />
          <p>
            Google to impose stricter guidelines for personal loans applications on Play Store...
          </p>

          <div className="media-footer">
            <span>06 April 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>
       </div>

       <div className="media-row">
        <div className="media-card">
          <img src="/media3.png" alt="media3" className="blog-img" />
          <p>
            How to get a loan against mutual funds — interest rate and key details
          </p>

          <div className="media-footer">
            <span>20 February 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>
        
        <div className="media-card">
          <img src="/media1.png" alt="media1" className="blog-img" />
          <p>
            Why ONDC can’t be a UPI of e- commerce? All you need to know
          </p>

          <div className="media-footer">
            <span>11 May 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>
       </div>

      <h2 className="press-title">INTERVIEW</h2>
      <div className="media-row">
        <div className="media-card">
          <img src="/media4.png" alt="media4" className="blog-img" />
          <p>
            Unlock Loans Through Digital Assets With Shreyans Nahar of Finsire
          </p>

          <div className="media-footer">
            <span>20 February 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>
        
        <div className="media-card">
          <img src="/media6.png" alt="media6" className="blog-img" />
          <p>
            Unlock Loans Through Digital Assets With Shreyans Nahar of Finsire
          </p>

          <div className="media-footer">
            <span>20 February 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>

        <div className="media-card">
          <img src="/media5.png" alt="media5" className="blog-img" />
          <p>
            Why ONDC can’t be a UPI of e- commerce? All you need to know
          </p>

          <div className="media-footer">
            <span>11 May 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>
       </div>

       <h2 className="press-title">PRESS RELEASE</h2>
      <div className="media-row">
        <div className="media-card">
          <img src="/media7.png" alt="media7" className="blog-img" />
          <p>
            Chennai-based fintech startup raises USD 1.3 million in seed funding
          </p>

          <div className="media-footer">
            <span>16 March 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>
        
        <div className="media-card">
          <img src="/media8.png" alt="media8" className="blog-img" />
          <p>
            Fintech startup Finsire raises $1.3 million in seed funding
          </p>

          <div className="media-footer">
            <span>15 March 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>

        <div className="media-card">
          <img src="/media9.png" alt="media9" className="blog-img" />
          <p>
            Fintech startup Finsire bags $1.3 Mn in seed round
          </p>

          <div className="media-footer">
            <span>15 March 2023</span>
            <button>Read more ▸</button>
          </div>
        </div>
       </div>
      <Footer goTo={goTo} />
    </div>
  );
}
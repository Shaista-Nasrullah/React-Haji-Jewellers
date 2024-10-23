import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col1">
              <h3>Download Our App</h3>
              <p>Download App for Android and ios mobile phone.</p>
              <div className="app-logo">
                <img src="images/play-store.png" />
                <img src="images/app-store.png" />
              </div>
            </div>
            {/* <div className="footer-col2">
              <img src="images/logo.png" />
              <p>
                Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div> */}
            <div className="footer-col3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div className="footer-col4">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/share/kcGCaoEvJZ9SUqPL/?mibextid=LQQJ4d">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@shaista.nasrullah?_t=8pUTj5JDiEB&_r=1">
                    TikTok
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/hajijewellers2022/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="hajijewellers856@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">
            <a href="https://portfolio-xrqg.vercel.app/">
              &copy; 2024 - Designed and Developed by Shaista Nasrullah
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

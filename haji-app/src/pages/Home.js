import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/home.css";

const Home = () => {
  return (
    <Layout>
      <div className="main">
        <img src="images/Haji-jewellers2.png" alt="Haji" />
      </div>

      {/* ------------collections starts---------------- */}

      <div id="collections">
        <h1>COLLECTIONS</h1>
        <div class="collection-container ">
          <div className="row">
            <div class="item">
              <img src="images/col1.png" alt="silver-jewellery" />
              <div class="text-wrapper">
                <h1 id="text" class="text">
                  Silver
                </h1>
              </div>
            </div>
            <div class="item">
              <img src="images/collection3.png" alt="Gold-jewellery" />
              <div class="text-wrapper">
                <h1 id="text" class="text">
                  Gold
                </h1>
              </div>
            </div>

            <div class="item">
              <img src="images/collection2.png" alt="Natiral-stones" />
              <div class="text-wrapper">
                <h1 id="text" class="text">
                  Stones
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------collection starts---------------- */}
      <div className="container">
        <h2 className="title">Latest Products</h2>
        <div className="row">
          <div className="col-4">
            <img
              src="images/set9.jpg"
              alt="Gold Bridal Necklace Set - Elegant Jewelry for Women"
            />
            <h4>Gold Bridal Necklace Set</h4>
          </div>

          <div className="col-4">
            <img
              src="images/putincover.jpg"
              alt="Gold Designer Bangle for Women"
            />
            <h4>Gold Designer Bangle</h4>
          </div>

          <div className="col-4">
            <img
              src="images/ring14.jpg"
              alt="Gold Engagement Ring - Diamond Studded"
            />
            <h4>Gold Engagement Ring</h4>
          </div>

          <div className="col-4">
            <img
              src="images/set-group.jpg"
              alt="Gold Jewelry Set - Necklace and Earrings"
            />
            <h4>Gold Jewelry Set - Necklace and Earrings</h4>
          </div>

          <div className="col-4">
            <img
              src="images/set7.jpg"
              alt="Gold Pendant Set - Modern Jewelry Design"
            />
            <h4>Gold Pendant Set</h4>
          </div>

          <div className="col-4">
            <img
              src="images/ring30.jpg"
              alt="Gold Wedding Ring - Classic Band Design"
            />
            <h4>Gold Wedding Ring</h4>
          </div>

          <div className="col-4">
            <img
              src="images/ring31.jpg"
              alt="Gold Anniversary Ring with Diamond"
            />
            <h4>Gold Anniversary Ring</h4>
          </div>

          <div className="col-4">
            <img
              src="images/ring15alt.jpg"
              alt="Gold Traditional Ring - Intricate Design"
            />
            <h4>Gold Traditional Ring</h4>
          </div>

          <div className="col-4">
            <img
              src="images/bengle4.jpg"
              alt="Gold Bracelet for Women - Sleek and Stylish"
            />
            <h4>Gold Bracelet</h4>
          </div>

          <div className="col-4">
            <img
              src="images/bengle2alt.jpg"
              alt="Gold Bangle - Traditional Design for Women"
            />
            <h4>Gold Bangle</h4>
          </div>

          <div className="col-4">
            <img
              src="images/ring23.jpg"
              alt="Gold Cocktail Ring - Bold Statement Piece"
            />
            <h4>Gold Cocktail Ring</h4>
          </div>

          <div className="col-4">
            <img
              src="images/ring30alt.jpg"
              alt="Gold Promise Ring - Simple and Elegant"
            />
            <h4>Gold Promise Ring</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

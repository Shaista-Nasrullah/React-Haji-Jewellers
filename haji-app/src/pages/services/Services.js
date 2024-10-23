import React from "react";
import Layout from "../../components/Layout/Layout";
import "./../../styles/services.css";

const Services = () => {
  return (
    <Layout title={"Services - Haji Jewellers"}>
      <div>
        <div className="main">
          <img src="images/Emerald-with-silver.jpg" alt />
        </div>
        <div className="row">
          <div className="col-2">
            <video height="auto" controls>
              <source src="/images/making.mp4" type="video/mp4" />
              Have a Look
            </video>
          </div>
          <div className="col-2">
            <h1>Services at Haji Jewellers</h1>
            <p>
              Welcome to <strong>Haji Jewellers</strong>, where we offer a wide
              selection of high-quality jewelry for every occasion. Our
              collection includes exquisite <strong>gold items</strong> such as{" "}
              <strong>gold sets</strong>, <strong>bangles</strong>,{" "}
              <strong>hoop earrings</strong>, <strong>bracelets</strong>, and{" "}
              <strong>rings</strong>, crafted with care to reflect timeless
              beauty and elegance. Whether you need a gold ring for daily wear
              or a stunning gold set for special events, our designs cater to
              all your needs.
            </p>

            <p>
              <strong>Haji Jewellers</strong> is also proud to offer a variety
              of authentic <strong>natural stones</strong>, including gems like{" "}
              <strong>Emerald</strong>, <strong>Turquoise</strong>, and{" "}
              <strong>Ruby</strong>. Each natural stone is carefully selected,
              adding vibrant colors and luxury to your collection. These stones
              are perfect for custom designs that showcase your individuality.
            </p>

            <p>
              We also specialize in custom-made <strong>silver rings</strong>{" "}
              for both <strong>men</strong> and <strong>women</strong>, allowing
              you to personalize your piece with the{" "}
              <strong>natural stone</strong> of your choice, from{" "}
              <strong>Emerald</strong> to <strong>Turquoise</strong> and more.
            </p>

            <p>
              At <strong>Haji Jewellers</strong>, our commitment is to provide
              you with exceptional quality and unique designs. Whether you’re
              looking for a signature <strong>gold bangle</strong>, a custom{" "}
              <strong>silver ring</strong>, or jewelry adorned with{" "}
              <strong>natural stones</strong>, explore our collection today to
              find something that matches your style perfectly.
            </p>
          </div>
        </div>
        <div className="container">
          <h2 className="title">Some of our products</h2>
          <div className="roww">
            <div className="col-4">
              <img
                src="images/blue-ruby.jpg"
                alt="Blue Ruby Gemstone Ring - Elegant Jewelry"
              />
              <h4>Blue Ruby Gemstone Ring</h4>
            </div>

            <div className="col-4">
              <img
                src="images/Emerald-with-zarghoon.jpg"
                alt="Emerald and Zarghoon Gemstone Ring"
              />
              <h4>Emerald and Zarghoon Gemstone Ring</h4>{" "}
              {/* Corrected to 'Ring' */}
            </div>

            <div className="col-4">
              <img
                src="images/male3.jpg"
                alt="Men's Gemstone Ring - Stylish Jewelry for Men"
              />
              <h4>Men's Gemstone Ring</h4>
            </div>

            <div className="col-4">
              <img
                src="images/Emerald1.jpg"
                alt="Emerald Gemstone Pendant - Precious Green Stone"
              />
              <h4>Emerald Gemstone Pendant</h4>{" "}
              {/* Corrected heading to 'Pendant' */}
            </div>

            <div className="col-4">
              <img
                src="images/Yaqoot.jpg"
                alt="Yaqoot Gemstone Ring - Red Garnet Stone"
              />
              <h4>Yaqoot Gemstone Ring</h4>
            </div>

            <div className="col-4">
              <img
                src="images/cover1st.jpg"
                alt="Ruby Gemstone Ring - Classic Red Stone Jewelry"
              />
              <h4>Ruby Gemstone Ring</h4>
            </div>

            <div className="col-4">
              <img
                src="images/ruby.jpg"
                alt="Ruby Gemstone Necklace - Elegant Red Stone Jewelry"
              />
              <h4>Ruby Gemstone Necklace</h4>{" "}
              {/* Corrected heading to 'Necklace' */}
            </div>

            <div className="col-4">
              <img
                src="images/Emerald2.jpg"
                alt="Emerald Gemstone Earrings - Precious Green Jewelry"
              />
              <h4>Emerald Gemstone Earrings</h4>{" "}
              {/* Corrected heading to 'Earrings' */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;

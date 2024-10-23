import React from "react";
import { NavLink } from "react-router-dom";
import rings from "./ringsList";
import "../../styles/home.css";
import Layout from "../../components/Layout/Layout";

const Ringg = () => {
  return (
    <Layout title={"Gold Rings - Haji Jewellers"}>
      <div className="back">
        <h1>Our Gold Rings Collection</h1>
        <div className="container">
          <div className="row">
            {rings.map((ring) => (
              <div className="col-4" key={ring.id}>
                {ring.link ? (
                  <NavLink to={ring.link}>
                    <img src={ring.image} alt={ring.name} />
                  </NavLink>
                ) : (
                  <img src={ring.image} alt={ring.name} />
                )}
                <h4>{ring.name}</h4>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ringg;

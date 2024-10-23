import React from "react";
import { NavLink } from "react-router-dom";
import Bengless from "./BengleList";
import "../../styles/home.css";
import Layout from "../../components/Layout/Layout";

const Bengles = () => {
  return (
    <Layout title={"Gold Bengles - Haji Jewellers"}>
      <div className="back">
        <h1>Our Gold Bengles Collection</h1>
        <div className="container">
          <div className="row">
            {Bengless.map((bengle) => (
              <div className="col-4" key={bengle.id}>
                {bengle.link ? (
                  <NavLink to={bengle.link}>
                    <img src={bengle.image} alt={bengle.name} />
                  </NavLink>
                ) : (
                  <img src={bengle.image} alt={bengle.name} />
                )}
                <h4>{bengle.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bengles;

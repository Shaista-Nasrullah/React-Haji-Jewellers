import React from "react";
import { NavLink } from "react-router-dom";
import GoldEarrings from "./EarringsList";
import "../../styles/home.css";
import Layout from "../../components/Layout/Layout";

const Goshwara = () => {
  return (
    <Layout title={"Gold Earrings - Haji Jewellers"}>
      <div className="back">
        <h1>Our Gold Earrings Collection</h1>
        <div className="container">
          <div className="row">
            {GoldEarrings.map((OnlyEarring) => (
              <div className="col-4" key={OnlyEarring.id}>
                {OnlyEarring.link ? (
                  <NavLink to={OnlyEarring.link}>
                    <img src={OnlyEarring.image} alt={OnlyEarring.name} />
                  </NavLink>
                ) : (
                  <img src={OnlyEarring.image} alt={OnlyEarring.name} />
                )}
                <h4>{OnlyEarring.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Goshwara;

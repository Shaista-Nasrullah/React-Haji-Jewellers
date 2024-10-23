import React from "react";
import { NavLink } from "react-router-dom";
import HoopEarrings from "./HoopEarringsList";
import "../../styles/home.css";
import Layout from "../../components/Layout/Layout";

const HoopEarring = () => {
  return (
    <Layout title={"Gold Hoop Earrings - Haji Jewellers"}>
      <div className="back">
        <h1>Our Gold Hoop Earrings Collection</h1>
        <div className="container">
          <div className="row">
            {HoopEarrings.map((HoopEarring) => (
              <div className="col-4" key={HoopEarring.id}>
                {HoopEarring.link ? (
                  <NavLink to={HoopEarring.link}>
                    <img src={HoopEarring.image} alt={HoopEarring.name} />
                  </NavLink>
                ) : (
                  <img src={HoopEarring.image} alt={HoopEarring.name} />
                )}
                <h4>{HoopEarring.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HoopEarring;

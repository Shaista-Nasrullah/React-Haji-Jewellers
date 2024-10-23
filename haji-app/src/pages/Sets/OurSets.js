import React from "react";
import { NavLink } from "react-router-dom";
import Sets from "./SetsList";
import "../../styles/home.css";
import Layout from "../../components/Layout/Layout";

const OurSets = () => {
  return (
    <Layout title={"Gold Set - Haji Jewellers"}>
      <div className="back">
        <h1>Our Gold Sets Collection</h1>
        <div className="container">
          <div className="row">
            {Sets.map((set) => (
              <div className="col-4" key={set.id}>
                {set.link ? (
                  <NavLink to={set.link}>
                    <img src={set.image} alt={set.name} />
                  </NavLink>
                ) : (
                  <img src={set.image} alt={set.name} />
                )}
                <h4>{set.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurSets;

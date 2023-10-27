/** @format */

import React from "react";
import styles from "../styles/HeroSection3.module.css";
import Containers from "./Containers";

function ElevateFinances() {
  return (
    <>
      <div className={styles.container}>
        <h4>Elevate Your Financial Journey with RAFT</h4>
        <p>
          RAFT offers a world of financial possibilities. From investments to payments, we've got
          you covered. Join us and unlock your financial potential today.
        </p>
      </div>
      <Containers />
    </>
  );
}

export default ElevateFinances;
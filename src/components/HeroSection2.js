/** @format */

import React from "react";
import styles from "../styles/HeroSection2.module.css";
import Carousel from "./Features/Carousel";

function HeroSection2() {
  return (
    <div className={styles.container}>
      <h4>FEATURED AND SEEN IN</h4>

      <section>
        <Carousel />
      </section>
    </div>
  );
}

export default HeroSection2;

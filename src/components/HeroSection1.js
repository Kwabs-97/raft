/** @format */

import React from "react";
import styles from "../styles/HeroSection1.module.css";
import img from "../assets/cc1a3cfdca3e9786b68ec25e81a6d1a0.webp";
function HeroSection1() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={img} alt="hero1img" />
      </div>
    </div>
  );
}

export default HeroSection1;

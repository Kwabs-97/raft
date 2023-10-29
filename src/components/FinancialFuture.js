/** @format */

import React from "react";
import { ReactSVG } from "react-svg";

import styles from "../styles/FinancialFuture.module.css";
import card1 from "../assets/Financial Future/Frame 35.svg";
import card2 from "../assets/Financial Future/Frame 1000001583.svg";
import img from "../assets/Financial Future/Frame 150.svg";
function FinancialFuture() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h4>Confidently Shape Your Financial Future</h4>
        <p>
          At RAFT, we empower you to confidently shape your financial future.Our modern approach
          simplifies saving and investing, making it easier than ever.
        </p>
      </div>
      <div className={styles.cards}>
        <ReactSVG src={card1} />
        <ReactSVG src={card2} />
      </div>
      <div className={styles.numbers}>
        <section>
          <h4>50+</h4>
          <p>CITIES</p>
        </section>
        <section>
          <h4>50,100+</h4>
          <p>TRANSACTIONS</p>
        </section>
        <section>
          <h4>3M+</h4>
          <p>USERS</p>
        </section>
        <section>
          <h4>5</h4>
          <p>USER RATINGS</p>
        </section>
      </div>
          <div className={styles.image}>
        <img src={img} alt="image" />
      </div>
    </div>
  );
}

export default FinancialFuture;

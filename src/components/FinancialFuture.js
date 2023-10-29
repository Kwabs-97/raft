/** @format */

import React from "react";
import styles from "../styles/FinancialFuture.module.css";

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
      <div className={styles.cards}></div>
      <div className={styles.numbers}></div>
      <div className={styles.image}></div>
    </div>
  );
}

export default FinancialFuture;

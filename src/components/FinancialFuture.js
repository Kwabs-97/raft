/** @format */

import React from "react";
import styles from "../styles/FinancialFuture.module.css";

function FinancialFuture() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h4>Confidently Shape Your Financial Future</h4>
        <p>
          display: flex; width: 21.375rem; flex-direction: column; align-items: flex-start; gap:
          1.5rem;
        </p>
      </div>
      <div className={styles.cards}></div>
      <div className={styles.numbers}></div>
      <div className={styles.image}></div>
    </div>
  );
}

export default FinancialFuture;

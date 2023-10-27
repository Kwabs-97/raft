/** @format */

import React from "react";
import styles from "../../styles/VectorContainers.module.css";

function VectorContainers({ children }) {
  return (
    <div className={styles.vectorContainer}>
      {children}
      <div className={styles.overlay}></div>
    </div>
  );
}

export default VectorContainers;

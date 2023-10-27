/** @format */

import React from "react";
import styles from "../../styles/VectorContainers.module.css";
import vector from "../../assets/Vector/Vector.svg";
import { ReactSVG } from "react-svg";

function VectorContainers({ children }) {
  return (
    <div className={styles.vectorContainer}>
      {children}
      <div className={styles.overlay}></div>
      <ReactSVG src={vector} />
    </div>
  );
}

export default VectorContainers;

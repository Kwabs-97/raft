/** @format */

import React from "react";
import {featuredSVGs} from "../../utils/images";
import styles from "../../styles/Carousel.module.css";
import { ReactSVG } from "react-svg";

function Carousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.scrollWrapper}>
        {featuredSVGs.map((svg) => {
          return <ReactSVG src={svg} key={svg} />;
        })}
      </div>
    </div>
  );
}

export default Carousel;

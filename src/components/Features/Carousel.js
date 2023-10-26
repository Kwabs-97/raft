/** @format */

import React from "react";
import images from "../../utils/images";
import styles from "../../styles/Carousel.module.css";

function Carousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.scrollWrapper}>
        {images.map((image) => {
          return <img src={image} key={image} />;
        })}
      </div>
    </div>
  );
}

export default Carousel;

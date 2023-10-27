/** @format */

import React from "react";
import Container from "./UI/Container";
import styles from "../styles/Containers.module.css";
import VectorContainers from "./UI/VectorContainers";
import wadeSVG from "../assets/Vector/Frame 106 1.svg";
import financialSVG from "../assets/Vector/Group 8JJ 1.svg";
function Containers() {
  return (
    <>
      <>
        <Container>
          <div className={styles.containerOne}>
            <div className={styles.vector1}>
              <VectorContainers>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6175e8d6-550c-417a-9569-255288d000de?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6175e8d6-550c-417a-9569-255288d000de?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6175e8d6-550c-417a-9569-255288d000de?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6175e8d6-550c-417a-9569-255288d000de?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6175e8d6-550c-417a-9569-255288d000de?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6175e8d6-550c-417a-9569-255288d000de?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6175e8d6-550c-417a-9569-255288d000de?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6175e8d6-550c-417a-9569-255288d000de?apiKey=0179e5cdf4434003ace2ef50a4f0813c&"
                  alt="Description of the image"
                />
              </VectorContainers>
            </div>

            <div className={styles.main}>
              <h4>Seamless Payments</h4>
              <p>Enjoy secure, seamless transactions that make managing your money a breeze.</p>
            </div>
          </div>
        </Container>

        <Container>
          <div className={styles.containerTwo}>
            <div className={styles.vector}>
              <VectorContainers>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e9061b40-b63d-4d81-b262-69e1d9728c2d?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9061b40-b63d-4d81-b262-69e1d9728c2d?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9061b40-b63d-4d81-b262-69e1d9728c2d?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9061b40-b63d-4d81-b262-69e1d9728c2d?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9061b40-b63d-4d81-b262-69e1d9728c2d?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9061b40-b63d-4d81-b262-69e1d9728c2d?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9061b40-b63d-4d81-b262-69e1d9728c2d?apiKey=0179e5cdf4434003ace2ef50a4f0813c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9061b40-b63d-4d81-b262-69e1d9728c2d?apiKey=0179e5cdf4434003ace2ef50a4f0813c&"
                  className="aspect-[1.79] object-cover object-center w-full overflow-hidden"
                  alt="Description of the image"
                />
              </VectorContainers>
            </div>

            <div className={styles.main}>
              <h4>Seamless Payments</h4>
              <p>Enjoy secure, seamless transactions that make managing your money a breeze.</p>
            </div>
          </div>
        </Container>
      </>

      <>
        <Container>
          <div className={styles.containerOne}>
            <div className={styles.vector1}>
              <VectorContainers>
                <img loading="lazy" src={wadeSVG} />
              </VectorContainers>
            </div>

            <div className={styles.main}>
              <h4>Wealth Management</h4>
              <p>
                Make informed decisions for your financial future with our wealth management
                expertise.
              </p>
            </div>
          </div>
        </Container>

        <Container>
          <div className={styles.containerTwo}>
            <div className={styles.vector}>
              <VectorContainers>
                <img loading="lazy" src={financialSVG} alt="Description of the image" />
              </VectorContainers>
            </div>

            <div className={styles.main}>
              <h4>Financial Planning</h4>
              <p>
                Achieve your financial dreams with our comprehensive financial planning services,
                guiding you toward a secure future.
              </p>
            </div>
          </div>
        </Container>
      </>
    </>
  );
}

export default Containers;

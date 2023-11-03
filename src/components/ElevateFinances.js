/** @format */

import styles from "../styles/ElevateFinances.module.css";

//svgs for elevate Finances Container
import seamlessPaymentSVG from "../assets/ElevateFinances SVGs/seamlessPayments.svg";
import smartInvestingSVG from "../assets/ElevateFinances SVGs/smartInvestings.svg";
import wealthManagementSVG from "../assets/ElevateFinances SVGs/wealthManagement.svg";
import financialPlanningSVG from "../assets/ElevateFinances SVGs/financialPlanning.svg";
import vectorBg from "../assets/ElevateFinances SVGs/Vector.svg";

import { ReactSVG } from "react-svg";
function ElevateFinances() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h4>Elevate Your Financial Journey with Raft</h4>
        <p>
          RAFT offers a world of financial possibilities. From investments to payments, we've got
          you covered. Join us and unlock your financial potential today.
        </p>
      </div>

      <div className={styles.elevateFinancesContainer}>
        <section className={styles.smart}>
          <div className={styles.seamlessPayments}>
            <div className={styles.vector}></div>
            <ReactSVG src={seamlessPaymentSVG} />
            <div className={styles.detail}>
              <h4>Seamless Payments</h4>
              <p>Enjoy secure, seamless transactions that make managing your money a breeze.</p>
            </div>
          </div>
          <div className={`${styles.smartInvestings} ${styles.smartInvestingsExc}`}>
            <div></div>
            <ReactSVG src={smartInvestingSVG} style={{ display: "flex", justifyContent: "end" }} />
            <div className={styles.detail}>
              <h4>Smart Investing</h4>
              <p>
                Grow your wealth confidently with our personalized investment solutions, tailored to
                your financial goals.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.finances}>
          <div className={styles.wealthManagement}>
            <div></div>
            <ReactSVG src={wealthManagementSVG} />
            <div className={styles.detail}>
              <h4>Wealth Management</h4>
              <p>
                Make informed decisions for your financial future with our wealth management
                expertise.
              </p>
            </div>
          </div>
          <div className={styles.financialPlanning}>
            <div></div>
            <ReactSVG src={financialPlanningSVG} />
            <div className={styles.detail}>
              <h4>Financial Planning</h4>
              <p>
                Achieve your financial dreams with our comprehensive financial planning services,
                guiding you toward a secure future.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ElevateFinances;

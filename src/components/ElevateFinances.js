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
            <div>
              <h4></h4>
              <p></p>
            </div>
          </div>
          <div className={styles.smartInvestings}>
            <div></div>
            <ReactSVG src={smartInvestingSVG} />
            <div>
              <h4></h4>
              <p></p>
            </div>
          </div>
        </section>
        <section className={styles.finances}>
          <div className={styles.wealthManagement}>
            <div></div>
            <ReactSVG />
            <div>
              <h4></h4>
              <p></p>
            </div>
          </div>
          <div className={styles.financialPlanning}>
            <div></div>
            <ReactSVG />
            <div>
              <h4></h4>
              <p></p>
            </div>
          </div>
        </section>
      </div>

      {/* container for mobile design*/}
      {/* <div className={styles.containerMobile}>
        <section className={styles.section1}>
          <ReactSVG src={seamlessSVG} className={styles.seamless} />
          <ReactSVG src={smartInvestingSVG} className={styles.smartInvestingSVG} />
        </section>
        <section className={styles.section2}>
          <ReactSVG src={wealth} className={styles.wealth} />
          <ReactSVG src={financialPlanning} className={styles.financialPlanning} />
        </section>
      </div> */}

      {/* container for desktop design */}
      {/* <div className={styles.containerDesktop}>
        <section className={styles.section1}>
          <ReactSVG src={seamlessSVGLg} />
          <ReactSVG src={smartInvestingSVGLg} />
        </section>
        <section className={styles.section2}>
          <ReactSVG src={wealthLg} />
          <ReactSVG src={financialPlanningLg} />
        </section>
      </div> */}
    </div>
  );
}

export default ElevateFinances;

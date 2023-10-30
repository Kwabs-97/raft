/** @format */

import styles from "../styles/ElevateFinances.module.css";

//svgs for mobile design
import seamlessSVG from "../assets/ElevateFinances SVGs/Frame 88.svg";
import smartInvestingSVG from "../assets/ElevateFinances SVGs/Frame 1000001576.svg";
import wealth from "../assets/ElevateFinances SVGs/Frame 1000001577.svg";
import financialPlanning from "../assets/ElevateFinances SVGs/Frame 1000001578.svg";

//svgs for laptop design
import seamlessSVGLg from "../assets/ElevateFinances SVGs/Frame 88-lg.svg";
import smartInvestingSVGLg from "../assets/ElevateFinances SVGs/Frame 32.svg";
import wealthLg from "../assets/ElevateFinances SVGs/Frame 36.svg";
import financialPlanningLg from "../assets/ElevateFinances SVGs/Frame 34.svg";

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
          <div className={styles.seamlessPayments}></div>
          <div className={styles.smartInvestings}></div>
        </section>
        <section className={styles.finances}></section>
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

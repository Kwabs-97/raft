/** @format */

import styles from "../styles/ElevateFinances.module.css";
import seamlessSVG from "../assets/ElevateFinances SVGs/Frame 88.svg";
import smartInvestingSVG from "../assets/ElevateFinances SVGs/Frame 1000001576.svg";
import wealth from "../assets/ElevateFinances SVGs/Frame 1000001577.svg";
import financialPlanning from "../assets/ElevateFinances SVGs/Frame 1000001578.svg";

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
      <div className={styles.container}>
        <section className={styles.section1}>
          <ReactSVG src={seamlessSVG} className={styles.seamless} />
          <ReactSVG src={smartInvestingSVG} className={styles.smartInvestingSVG} />
        </section>
        <section className={styles.section2}>
          <ReactSVG src={wealth} className={styles.wealth} />
          <ReactSVG src={financialPlanning} className={styles.financialPlanning} />
        </section>
      </div>
    </div>
  );
}

export default ElevateFinances;

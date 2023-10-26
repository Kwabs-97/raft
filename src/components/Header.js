/** @format */

import React from "react";
import styles from "../styles/Header.module.css";
import { BsChevronRight } from "react-icons/bs";

function Header() {
  return (
    <header>
      <div className={styles.frame1}>
        <section className={styles.section1}>
          <p>Introducting Raft Cards </p>
          <BsChevronRight size={17} color="white" />{" "}
        </section>
        <section className={styles.section2}>
          <h4>Building the future of banking.</h4>
          <p>
            Experience the future of banking with RAFT. We're here to empower your financial
            journey.
          </p>
        </section>
      </div>
      <div className={styles.frame2}></div>
    </header>
  );
}

export default Header;

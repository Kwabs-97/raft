/** @format */

import React from "react";
import styles from "../styles/Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowUpLeft } from "react-icons/bs";

function Navbar() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logobg}>
            <BsArrowUpLeft color="black" size={15} />
          </div>
          <span>Raft</span>
        </div>
        <div className={styles.pcNav}>
          <ul>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Learn</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className={styles.login}>
          <a href="#">Login</a>
          <button>Get started</button>
        </div>

        <div className={styles.hero}>{<AiOutlineMenu color="white" size={15} />}</div>
      </div>
    </nav>
  );
}

export default Navbar;

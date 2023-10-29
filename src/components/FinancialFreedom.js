/** @format */

import React from "react";
import { ReactSVG } from "react-svg";

import styles from "../styles/FinancialFreedom.module.css";
import financialFreedomMobile from "../assets/Financial Freedom/Frame 1000001580.webp";
import financialFreedomDesktop from "../assets/Financial Freedom/Frame 31 (1).webp";
import banknotesvg from "../assets/Financial Freedom/banknotes.svg";
import circlesvg from "../assets/Financial Freedom/circle-stack.svg";
import arrowsvg from "../assets/Financial Freedom/arrows-right-left.svg";
function FinancialFreedom() {
  return (
    <div className={styles.container}>
      <header>
        <h4>Your Financial Freedom, Your Way</h4>
        <p>
          We believe that managing your finances should be effortless and cost-effective. That's why
          we offer you the freedom you deserve
        </p>
      </header>
      <main>
        <img src={financialFreedomMobile} alt="mobile screen" className={styles.mobileIMG} />
        <img src={financialFreedomDesktop} alt="mobile screen" className={styles.desktopIMG} />
      </main>
      <footer>
        <section>
          <div>
            <ReactSVG src={banknotesvg} />
            <h5>No minimum balance fees</h5>
          </div>
          <p>Say goodbye to minimum balance fees. Your account, your balance—no hidden charges</p>
        </section>
        <section>
          <div>
            <ReactSVG src={circlesvg} />
            <h5>No monthly fees</h5>
          </div>
          <p>
            Bank with us without worrying about monthly fees. Keep more of your money where it
            belongs—in your account
          </p>
        </section>
        <section>
          <div>
            <ReactSVG src={arrowsvg} />
            <h5>No bank transfer fees</h5>
          </div>
          <p>
            Seamlessly transfer funds without the extra cost. Send and receive money with zero bank
            transfer fees.
          </p>
        </section>
      </footer>
      <aside></aside>
    </div>
  );
}

export default FinancialFreedom;

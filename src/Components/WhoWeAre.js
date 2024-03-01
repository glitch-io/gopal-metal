import React from "react";
import styles from "./HowWeAre.module.css";
import { ourData } from "../data";
function WhoWeAre() {
  return (
    <div className={styles.who}>
      <h1>Who We Are</h1>
      <div className={styles.whoSection}>
        {ourData.map((item) => (
          <div className={styles.item} data-aos="fade-up" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhoWeAre;

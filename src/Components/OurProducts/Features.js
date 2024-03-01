import React from "react";
import styles from "./Features.module.css";
import { featuresItem } from "../../data";
function Features() {
  return (
    <div className={styles.featureSection}>
      {featuresItem.map((item, index) => (
        <div className={styles.featuresItem} data-aos="fade-in-up" key={index}>
          <div className={styles.imgDiv}>
            <img
              src={process.env.PUBLIC_URL + item.imageUrl}
              alt={item.altText}
            />
          </div>
          <div className={styles.featureText}>
            <h2>{item.title}</h2>
            <p>{item.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;

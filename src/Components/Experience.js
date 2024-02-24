import React from "react";
import styles from "./Experience.module.css";
function Experience() {
  return (
    <div
      className={styles.backgroundContainer}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Imgs/background.jpg)`,
      }}
    >
      <div className={styles.experience}>
        <h1>
          We offer best <span>industrial services.</span> 25+ years of
          experience
        </h1>
        <p>Manufacturing Flanges & Pipe Fittings</p>
      </div>
    </div>
  );
}

export default Experience;

import React from "react";
import styles from "./Banner.module.css";
function Banner({ title }) {
  return (
    <>
      <div style={{ height: "80px", width: "100%", color: "#fff" }}></div>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Imgs/banner.jpg)`,
        }}
      >
        <h1>{title}</h1>
      </div>
    </>
  );
}

export default Banner;

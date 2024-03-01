import React from "react";
import styles from "./HowWeAre.module.css";
const data = [
  {
    title: "EXPORTER",
    text: "We are the reputed exporter that gracefully handle both domestic and foreign markets. Goodwill amongst our clients is our biggest asset and distinctive approach adds value to it.",
  },
  {
    title: "SUPPLIER",
    text: "Prime quality of supply is not an event of chance it is a conscious effort to work efficiently to deliver material that fully satisfy our client needs for quality materials which is our motto, with total conformation to high standard of metal.",
  },
  {
    title: "STOCKIST",
    text: "We have a largest piping products inventory, used to serve both national and international demands. Our warehouse is a boon for those who require instant supply of our products.",
  },
  {
    title: "DISTRIBUTOR",
    text: "We find absolute pleasure in delivering perfection through our work. We are the professional global distributor of fine quality metal products.",
  },
];
function HowWeAre() {
  return (
    <div className={styles.who}>
      <h1>Who We Are</h1>
      <div className={styles.whoSection}>
        {data.map((item) => (
          <div className={styles.item} data-aos="fade-up" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowWeAre;

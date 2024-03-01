import React from "react";
import styles from "./Services.module.css";
import { servicesData } from "../../data";
function Services() {
  return (
    <div className={styles.servicesSection}>
      <h3>OUR SERVICES</h3>
      <h1>Industries We Serve</h1>
      <div className={styles.services}>
        {servicesData.map((item) => (
          <div key={item.title} className={styles.service} data-aos="fade-up">
            <div className={styles.imgDiv}>
              <img
                src={process.env.PUBLIC_URL + item.imageUrl}
                alt={item.title}
              />
            </div>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

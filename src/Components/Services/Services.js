import styles from "./Services.module.css";
import React from "react";

function Services() {
  const servicesData = [
    { title: "Aerospace Industry", imageUrl: "ServiceImg/service1.jpg" },
    { title: "Chemical Industry", imageUrl: "ServiceImg/service2.jpg" },
    { title: "Oil & Gas", imageUrl: "ServiceImg/service3.jpg" },
    { title: "Power Plant", imageUrl: "ServiceImg/service4.jpg" },
    { title: "Cement Industry", imageUrl: "ServiceImg/service5.jpg" },
    { title: "Marine Industry", imageUrl: "ServiceImg/service6.jpg" },
  ];
  return (
    <div className={styles.servicesSection}>
      <h3>OUR SERVICES</h3>
      <h1>Industries We Serve</h1>
      <div className={styles.services}>
        {servicesData.map((item) => (
          <div key={item.title} className={styles.service}>
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

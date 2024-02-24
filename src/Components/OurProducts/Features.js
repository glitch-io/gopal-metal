import React from "react";
import styles from "./Features.module.css";
function Features() {
  const featuresItem = [
    {
      id: 1,
      imageUrl: "/FeaturesImg/img2.png",
      altText: ".jpg",
      title: "About Us",
      subTitle:
        "Nepco Impex LLP is one of the leading manufacturer ,exporter,supplier and extensive stockholder of piping products for oil, gas,refineries,petrochemical and nuclear industries",
    },
    {
      id: 2,
      imageUrl: "/FeaturesImg/img3.png",
      altText: ".jpg",
      title: "Vision & Mission",
      subTitle:
        "To become an enterprising organisation in the field of Ferrous & Non ferrous products. To be known more for our quality of products and excellent service. Maintaining an uncompromising attitude towards quality of our products, service back-up.",
    },
    {
      id: 3,
      imageUrl: "/FeaturesImg/img1.png",
      altText: ".jpg",
      title: "Quality Policy",
      subTitle:
        "Quality is our prime concern. We are able to maintain high quality standards through our committed personnel and sound infrastructure.",
    },
  ];
  return (
    <div className={styles.featureSection}>
      {featuresItem.map((item, index) => (
        <div className={styles.featuresItem}>
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

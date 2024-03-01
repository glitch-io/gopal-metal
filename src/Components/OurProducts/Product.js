import React from "react";
import styles from "./Product.module.css";
import Features from "./Features";
import { productItems } from "../../data";
function Product() {
  return (
    <div className={styles.productSection}>
      <h1>Our Products</h1>
      <div className={styles.products}>
        {productItems.map((item, index) => (
          <div key={index} className={styles.product} data-aos="fade-up">
            <img
              src={process.env.PUBLIC_URL + item.imageUrl}
              alt={item.altText}
            />
            <div className={styles.productText}>
              <div>{`0${item.id}`}</div>
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <Features />
    </div>
  );
}

export default Product;

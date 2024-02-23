import React from "react";
import styles from "./Product.module.css";
function Product() {
  const productItems = [
    {
      id: 1,
      name: "Flanges",
      imageUrl: "/productImg/product1.jpg",
      altText: "flanges.jpg",
    },
    {
      id: 2,
      name: "Forged Fittings",
      imageUrl: "/productImg/product2.jpg",
      altText: "forged-fittings.jpg",
    },

    {
      id: 3,
      name: "Buttweld Fittings",
      imageUrl: "/productImg/product3.jpg",
      altText: "buttweld-fittings.jpg",
    },
    {
      id: 4,
      name: "Pipe & Tube",
      imageUrl: "/productImg/product4.jpg",
      altText: "pipe-and-tube.jpg",
    },
    {
      id: 5,
      name: "Round Bar",
      imageUrl: "/productImg/product5.jpg",
      altText: "round-bar.jpg",
    },
    {
      id: 6,
      name: "Sheet & Plate",
      imageUrl: "/productImg/product6.jpg",
      altText: "sheet-and-plate.jpg",
    },
  ];
  return (
    <div className={styles.productSection}>
      <h1>Our Products</h1>
      <div className={styles.products}>
        {productItems.map((item, index) => (
          <div key={index} className={styles.product}>
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
    </div>
  );
}

export default Product;

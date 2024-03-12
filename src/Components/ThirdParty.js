import React from "react";
import styles from "./ThirdParty.module.css";
import { clientData } from "../data";
function ThirdParty() {
  return (
    <div className={styles.thirdParty}>
      <div className={styles.clients} data-aos="zoom-in">
        {clientData.map((item) => (
          <div key={item.id} className={styles.container}>
            <img
              src={process.env.PUBLIC_URL + `${item.imgUrl}`}
              alt={item.name}
            />
            <div className={styles.textField}>
              <h1>{item.text}</h1>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdParty;

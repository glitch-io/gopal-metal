import React from "react";
import styles from "./ThirdParty.module.css";
import { clientData } from "../data";
function ThirdParty() {
  return (
    <div className={styles.thirdParty}>
      <h1>Third Party Inspection</h1>
      <p>
        Nepco Impex LLP offer its Products with Third Party Inspection also. The
        Inspection Agency can be nominated by clients World reputed Agencies
        like SGS,Bureau Veritas, DNV, LLOYDS, ICB and many other.
      </p>
      <div className={styles.clients}>
        {clientData.map((item) => (
          <div key={item.id}>
            <img
              src={process.env.PUBLIC_URL + item.imgUrl}
              alt={"clientImage.jpg"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdParty;

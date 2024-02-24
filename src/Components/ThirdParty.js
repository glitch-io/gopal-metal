import React from "react";
import styles from "./ThirdParty.module.css";
function ThirdParty() {
  const data = [
    {
      id: 1,
      imgUrl: "/ThirdParty/client_1.jpg",
    },
    {
      id: 2,
      imgUrl: "/ThirdParty/client_2.jpg",
    },
    {
      id: 3,
      imgUrl: "/ThirdParty/client_3.jpg",
    },
    {
      id: 4,
      imgUrl: "/ThirdParty/client_4.jpg",
    },
    {
      id: 5,
      imgUrl: "/ThirdParty/client_5.jpg",
    },
  ];
  return (
    <div className={styles.thirdParty}>
      <h1>Third Party Inspection</h1>
      <p>
        Nepco Impex LLP offer its Products with Third Party Inspection also. The
        Inspection Agency can be nominated by clients World reputed Agencies
        like SGS,Bureau Veritas, DNV, LLOYDS, ICB and many other.
      </p>
      <div className={styles.clients}>
        {data.map((item) => (
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

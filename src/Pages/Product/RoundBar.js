import React from "react";
import Banner from "../../Components/Banner";
import QuickLinks from "../../Components/QuickLinks";
import styles from "./Product.module.css";
import Test from "./Test";
import { Helmet } from "react-helmet-async";
function RoundBar() {
  return (
    <>
      <Helmet>
        <title>Round Bar</title>
        <meta
          name="description"
          content="Nepco Impex LLP is one of the leading company amongst the manufacturers and exporters of high quality flanges,Pipes and Pipe Fittings, Buttweld, ..."
        />
        <link rel="canonical" href="/round-bar" />
      </Helmet>
      <Banner title={"Round Bar"} />
      <div className={styles.productSection}>
        <QuickLinks />
        <div className={styles.productContent}>
          <div className={styles.productImg}>
            <img
              src={process.env.PUBLIC_URL + "/Imgs/Product/RoundBar/main.jpg"}
              alt="main-img"
            />
          </div>
          <h1>Round Bar</h1>
          <p>
            We also stock Bar, Hexagon, Square, Round products in various
            dimensions and grades. We stock Stainless Steel, Carbon and Alloy
            specialty steels supplied in the as rolled, annealed and normalized
            conditions. We offer cut to size and heat treatment through our
            service center.
          </p>
          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Stainless Steel Round Bar</h1>
              <p>
                <strong>Range: </strong> 3.17 MM TO 350 MM DIA
                <br />
                <br />
                <strong>Type: </strong>Round Bar, Bright Bar, Black Round Bar,
                Forged Bar, Hex Bar, Flat Bar, Rod
                <br />
                <br />
                <strong>Tolerances :</strong>h11
                <br />
                <br />
                <strong>Surface Finish :</strong>Cold drawn or Belt polished
                condition
                <br />
                <br />
                <strong>Available Grade:</strong>202, 304, 304L, 316, 316L,
                316Ti, 310, 310S, 321, 317L, 347, 347H, 904L, 17 4PH, 15 5PH,
                410, 420
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/RoundBar/sub1.jpg"}
                alt="sub1"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Nickel Alloy Round Bar</h1>
              <p>
                <strong>Range: </strong>3.17 MM TO 350 MM DIA
                <br />
                <br />
                <strong>Type: </strong> Round Bar, Bright Bar, Black Round Bar,
                Forged Bar, Hex Bar, Flat Bar, Rod
                <br />
                <br />
                <strong>Tolerances :</strong> h11
                <br />
                <br />
                <strong>Surface Finish :</strong>Cold drawn or Belt polished
                condition
                <br />
                <br />
                <strong>Available Grade:</strong>INCONEL 600, 601, 625, 718,
                800, 800H, 800HT,825, 925. SMO 254, ALLOY 20(20CB3), MONEL 400,
                500K, RA 330, HASTELLOY C-276, HASTELLOY B2, B3, TITANIUM Gr 1
                to 5
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/RoundBar/sub2.jpg"}
                alt="sub2"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Duplex/ Super Duplex Round Bar</h1>
              <p>
                <strong>Range: </strong> 3.17 MM TO 350 MM DIA
                <br />
                <br />
                <strong>Type: </strong>Round Bar, Bright Bar, Black Round Bar,
                Forged Bar, Hex Bar, Flat Bar, Rod
                <br />
                <br />
                <strong>Tolerances :</strong>h11
                <br />
                <br />
                <strong>Surface Finish :</strong>Cold drawn or Belt polished
                condition
                <br />
                <br />
                <strong>Available Grade:</strong>UNS S31803 (F51), UNS S2205
                (F60), UNS S32750 (F53), UNS S32760 (F55)
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/RoundBar/sub3.jpg"}
                alt="sub3"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Alloy Steel Round Bar</h1>
              <p>
                <strong>Range: </strong>3.17 MM TO 350 MM DIA
                <br />
                <br />
                <strong>Type: </strong> Round Bar, Bright Bar, Black Round Bar,
                Forged Bar, Hex Bar, Flat Bar, Rod
                <br />
                <br />
                <strong>Tolerances :</strong>h11
                <br />
                <br />
                <strong>Surface Finish :</strong> Cold drawn or Belt polished
                condition
                <br />
                <br />
                <strong>Available Grade:</strong>SAE 1018, SAE 8620, SAE 1010,
                EN Serise, C45, EN 42 J
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/RoundBar/sub4.jpg"}
                alt="sub4"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Copper Nickel Round Bar</h1>
              <p>
                <strong>Range: </strong>3.17 MM TO 350 MM DIA
                <br />
                <br />
                <strong>Type: </strong>Round Bar, Bright Bar, Black Round Bar,
                Forged Bar, Hex Bar, Flat Bar, Rod
                <br />
                <br />
                <strong>Tolerances :</strong>h11
                <br />
                <br />
                <strong>Surface Finish :</strong>Cold drawn or Belt polished
                condition
                <br />
                <br />
                <strong>Available Grade:</strong>Copper Nickel 90/10 and Copper
                Nickel 70/30
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/RoundBar/sub5.jpg"}
                alt="sub5"
              />
            </div>
          </div>
          <Test />
        </div>
      </div>
    </>
  );
}

export default RoundBar;

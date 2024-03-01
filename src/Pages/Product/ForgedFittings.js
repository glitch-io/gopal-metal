import React from "react";
import Banner from "../../Components/Banner";
import QuickLinks from "../../Components/QuickLinks";
import styles from "./Product.module.css";
import Test from "./Test";

function ForgedFittings() {
  return (
    <>
      <Banner title={"Forged And Fittings"} />
      <div className={styles.productSection}>
        <QuickLinks />
        <div className={styles.productContent}>
          <div className={styles.productImg}>
            <img
              src={process.env.PUBLIC_URL + "/Imgs/Product/Forged/main.jpg"}
              alt="forged-img"
            />
          </div>
          <h1>Forged Fittings</h1>
          <p>
            Forged Fitting is high tensile strength, strong, stable, corrosion
            and rust resistance as well as their high efficiency. We manufacture
            these forged fittings using premium quality materials in accordance
            with the quality standards. These products are available in various
            sizes, shapes and design as per the specific requirements of our
            clients. Our esteemed clients can avail from us these products at
            most reasonable prices.
          </p>
          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Stainless Steel Forged</h1>
              <p>
                <strong>Range :</strong> 15 NB UP TO 100 NB IN 2000 LBS , 3000
                LBS , 6000 LBS & 9000 LBS , 150 LBS , 250 LBS.
                <br />
                <br />
                <strong>Form :</strong> Socket Weld Fittings : Elbow 90 Deg ,
                Cross , Tee , Elbow 45 Deg , Coupling , Half Coupling & End Cap.
                <br />
                <br />
                <strong>Available Grade:</strong> 303, 304, 304L, 316, 316L,
                316Ti, 310, 310S, 321, 317L, 347, 347H, 904L, 17 4PH, 15 5PH,
                410, 420
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Forged/sub1.jpg"}
                alt="sub1"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Nickel Alloy Forged</h1>
              <p>
                <strong>Range :</strong> 15 NB UP TO 100 NB IN 2000 LBS , 3000
                LBS , 6000 LBS & 9000 LBS , 150 LBS , 250 LBS.
                <br />
                <br />
                <strong>Form :</strong> Socket Weld Fittings : Elbow 90 Deg ,
                Cross , Tee , Elbow 45 Deg , Coupling , Half Coupling & End Cap.
                <br />
                <br />
                <strong>Available Grade:</strong> INCONEL 600, 601, 625, 718,
                800, 800H, 800HT,825, 925. SMO 254, ALLOY 20(20CB3), MONEL 400,
                500K, RA 330, HASTELLOY C-276, HASTELLOY B2, B3, TITANIUM Gr 1
                to 7
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Forged/sub2.jpg"}
                alt="sub2"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Duplex/ Super Duplex Forged</h1>
              <p>
                <strong>Range :</strong> : 15 NB UP TO 100 NB IN 2000 LBS , 3000
                LBS , 6000 LBS & 9000 LBS , 150 LBS , 250 LBS.
                <br />
                <br />
                <strong>Form :</strong> Socket Weld Fittings : Elbow 90 Deg ,
                Cross , Tee , Elbow 45 Deg , Coupling , Half Coupling & End Cap.
                <br />
                <br />
                <strong>Available Grade:</strong> UNS S31803 (F51), UNS S2205
                (F60), UNS S32750 (F53), UNS S32760 (F55)
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Forged/sub3.jpg"}
                alt="sub3"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Alloy Steel Forged</h1>
              <p>
                <strong>Range :</strong> 15 NB UP TO 100 NB IN 2000 LBS , 3000
                LBS , 6000 LBS & 9000 LBS , 150 LBS , 250 LBS.
                <br />
                <br />
                <strong>Form :</strong> Socket Weld Fittings : Elbow 90 Deg ,
                Cross , Tee , Elbow 45 Deg , Coupling , Half Coupling & End Cap.
                <br />
                <br />
                <strong>Available Grade:</strong> F5/ F9/ F11/ F22/ F91
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Forged/sub4.jpg"}
                alt="sub4"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Copper Nickel Forged</h1>
              <p>
                <strong>Range :</strong> 15 NB UP TO 100 NB IN 2000 LBS , 3000
                LBS , 6000 LBS & 9000 LBS , 150 LBS , 250 LBS.
                <br />
                <br />
                <strong>Form :</strong> Socket Weld Fittings : Elbow 90 Deg ,
                Cross , Tee , Elbow 45 Deg , Coupling , Half Coupling & End Cap.
                <br />
                <br />
                <strong>Available Grade: </strong>Copper Nickel 90/10 and Copper
                Nickel 70/30
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Forged/sub5.jpg"}
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

export default ForgedFittings;

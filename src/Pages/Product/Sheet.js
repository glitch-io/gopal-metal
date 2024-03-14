import React from "react";
import Banner from "../../Components/Banner";
import QuickLinks from "../../Components/QuickLinks";
import styles from "./Product.module.css";
import Test from "./Test";
import { Helmet } from "react-helmet-async";
function Sheet() {
  return (
    <>
      <Helmet>
        <title>Sheet & Plate</title>
        <meta
          name="description"
          content="Nepco Impex LLP is one of the leading company amongst the manufacturers and exporters of high quality flanges,Pipes and Pipe Fittings, Buttweld, ..."
        />
        <link rel="canonical" href="/sheet" />
      </Helmet>
      <Banner title={"Sheet & Plate"} />
      <div className={styles.productSection}>
        <QuickLinks />
        <div className={styles.productContent}>
          <div className={styles.productImg}>
            <img
              src={process.env.PUBLIC_URL + "/Imgs/Product/Sheet/main.jpg"}
              alt="main-img"
            />
          </div>
          <h1>Sheet & Plate</h1>
          <p>
            We offer wide variety of industrial steel sheets, industrial steel
            plates, industrial stainless steel sheets, industrial stainless
            steel plates, which are fabricated from finest quality of raw
            materials. Manufactured as per the international quality and safety
            standards, we offer these products in different dimensions and at
            highly competitive prices. These products are mostly applied in
            construction and engineering industry. User Industries: Chemicals,
            Fats, & Fertilizers, Sugar Mills & Distilleries, Cement Industries,
            Ship Builders, Paper Industries, Pumps, Petrochemicals, Oil &
            Natural Gas Organization in terms of the specific materials,
            Technology, Finance & Personal.
          </p>
          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Stainless Steel Sheet and Plate</h1>
              <p>
                <strong>Range: </strong>0.1 mm to 100 mm thick upto 2500 mm
                width & upto 8000 mm length available with NACE MR 01-75s.
                <br />
                <br />
                <strong>Form: </strong>Sheet, Coil, Strips, Plates
                <br />
                <br />
                <strong>Thickness: </strong>0.3mm - 60mm
                <br />
                <br />
                <strong>Available Grade: </strong>202, 304, 304L, 316, 316L,
                316Ti, 310, 310S, 321, 317L, 347, 347H, 904L, 17 4PH, 15 5PH,
                410, 420
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Sheet/sub1.jpg"}
                alt="sub1"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Nickel Alloy Sheet and Plate</h1>
              <p>
                <strong>Range: </strong>0.1 mm to 100 mm thick upto 2500 mm
                width & upto 8000 mm length available with NACE MR 01-75s.
                <br />
                <br />
                <strong>Form: </strong>Sheet, Coil, Strips, Plates
                <br />
                <br />
                <strong>Thickness: </strong>0.3mm - 60mm
                <br />
                <br />
                <strong>Available Grade: </strong>INCONEL 600, 601, 625, 718,
                800, 800H, 800HT,825, 925. SMO 254, ALLOY 20(20CB3), MONEL 400,
                500K, RA 330, HASTELLOY C-276, HASTELLOY B2, B3, TITANIUM Gr 1
                to 8
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Sheet/sub2.jpg"}
                alt="sub2"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Duplex/ Super Duplex Sheet and Plate</h1>
              <p>
                <strong>Range: </strong>0.1 mm to 100 mm thick upto 2500 mm
                width & upto 8000 mm length available with NACE MR 01-75s.
                <br />
                <br />
                <strong>Form: </strong>Sheet, Coil, Strips, Plates
                <br />
                <br />
                <strong>Thickness: </strong> 0.3mm - 60mm
                <br />
                <br />
                <strong>Available Grade: </strong>UNS S31803 (F51), UNS S2205
                (F60), UNS S32750 (F53), UNS S32760 (F55)
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Sheet/sub3.jpg"}
                alt="sub3"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Alloy Steel Sheet and Plate</h1>
              <p>
                <strong>Range: </strong>0.1 mm to 100 mm thick upto 2500 mm
                width & upto 8000 mm length available with NACE MR 01-75s.
                <br />
                <br />
                <strong>Form: </strong>Sheet, Coil, Strips, Plates
                <br />
                <br />
                <strong>Thickness: </strong>0.3mm - 60mm
                <br />
                <br />
                <strong>Available Grade: </strong> C 45, EN19, MS, Sail Hard, SA
                516 GR 60/70, SA 516 GR 60/70 N, 4140, C 60
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Sheet/sub4.jpg"}
                alt="sub4"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Copper Nickel Sheet and Plate</h1>
              <p>
                <strong>Range: </strong>0.1 mm to 100 mm thick upto 2500 mm
                width & upto 8000 mm length available with NACE MR 01-75s.
                <br />
                <br />
                <strong>Form: </strong>Sheet, Coil, Strips, Plates
                <br />
                <br />
                <strong>Thickness: </strong>0.3mm - 60mm
                <br />
                <br />
                <strong>Available Grade: </strong>Copper Nickel 90/10 and Copper
                Nickel 70/30
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Sheet/sub5.jpg"}
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

export default Sheet;

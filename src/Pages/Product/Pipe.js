import React from "react";
import Banner from "../../Components/Banner";
import QuickLinks from "../../Components/QuickLinks";
import styles from "./Product.module.css";
import Test from "./Test";
import { Helmet } from "react-helmet-async";
function Pipe() {
  return (
    <>
      <Helmet>
        <title>Pipes And Tubes</title>
        <meta
          name="description"
          content="Nepco Impex LLP is one of the leading company amongst the manufacturers and exporters of high quality flanges,Pipes and Pipe Fittings, Buttweld, ..."
        />
        <link rel="canonical" href="/pipes" />
      </Helmet>
      <Banner title={"Pipe & Tube"} />
      <div className={styles.productSection}>
        <QuickLinks />
        <div className={styles.productContent}>
          <div className={styles.productImg}>
            <img
              src={process.env.PUBLIC_URL + "/Imgs/Product/Pipe/main.jpg"}
              alt="main-img"
            />
          </div>
          <h1>Pipe & Tube</h1>
          <p>
            We supply a wide range of precisely engineered stainless steel pipes
            & tubes, made in compliance with international quality and safety
            standards. Our range comprises of stainless steel welded pipes &
            tubes. Available in different dimensions & grades, these stainless
            steel welded tubes and pipes are widely used in different industries
            like power, engineering, construction and many more. We offer
            products at highly competitive prices and deliver consignment within
            stipulated time ..
          </p>
          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Stainless Steel Pipe and Tube</h1>
              <p>
                <strong>Range: </strong>15 NB UP TO 1200 NB IN SCH 5S , 10S ,10,
                20 , 40S , 40 , STD , 60 , 80S , 80 , XS , 100 , 120 , 140 , 160
                & XXS
                <br />
                <br />
                <strong>Form:</strong> Seamless / Erw / Welded in Round & Square
                .
                <br />
                <br />
                <strong>Available Grades :</strong>303, 304, 304L, 316, 316L,
                316Ti, 310, 310S, 321, 317L, 347, 347H, 904L, 17 4PH, 15 5PH,
                410, 420
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Pipe/sub1.jpg"}
                alt="sub1"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Nickel Alloy Pipe and Tube</h1>
              <p>
                <strong>Range: </strong>15 NB UP TO 1200 NB IN SCH 5S , 10S ,10,
                20 , 40S , 40 , STD , 60 , 80S , 80 , XS , 100 , 120 , 140 , 160
                & XXS.
                <br />
                <br />
                <strong>Form :</strong>Seamless / Erw / Welded in Round & Square
                .
                <br />
                <br />
                <strong>Available Grades :</strong>INCONEL 600, 601, 625, 718,
                800, 800H, 800HT,825, 925. SMO 254, ALLOY 20(20CB3), MONEL 400,
                500K, RA 330, HASTELLOY C-276, HASTELLOY B2, B3, TITANIUM Gr 1
                to 9
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Pipe/sub2.jpg"}
                alt="sub2"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Duplex and Super Duplex Pipe/ Tube</h1>
              <p>
                <strong>Range: </strong>15 NB UP TO 1200 NB IN SCH 5S , 10S ,10,
                20 , 40S , 40 , STD , 60 , 80S , 80 , XS , 100 , 120 , 140 , 160
                & XXS.
                <br />
                <br />
                <strong>Form:</strong>Seamless / Erw / Welded in Round & Square
                <br />
                <br />
                <strong>Available Grades :</strong>UNS S31803 (F51), UNS S2205
                (F60), UNS S32750 (F53), UNS S32760 (F55)
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Pipe/sub3.jpg"}
                alt="sub3"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Alloy Steel Pipe and Tube</h1>
              <p>
                <strong>Range: </strong>15 NB UP TO 1200 NB IN SCH 5S , 10S ,10,
                20 , 40S , 40 , STD , 60 , 80S , 80 , XS , 100 , 120 , 140 , 160
                & XXS.
                <br />
                <br />
                <strong>Form:</strong>Seamless / Erw / Welded in Round & Square
                .
                <br />
                <br />
                <strong>Available Grades :</strong>P1, P9, P5, P11, P12, P21,
                P22, P91
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Pipe/sub4.jpg"}
                alt="sub4"
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.contentText}>
              <h1>Copper Nickel Pipe and Tube</h1>
              <p>
                <strong>Range: </strong>15 NB UP TO 1200 NB IN SCH 5S , 10S ,10,
                20 , 40S , 40 , STD , 60 , 80S , 80 , XS , 100 , 120 , 140 , 160
                & XXS.
                <br />
                <br />
                <strong>Form:</strong>Seamless / Erw / Welded in Round & Square
                <br />
                <br />
                <strong>Available Grades :</strong>Copper Nickel 90/10 and
                Copper Nickel 70/30
              </p>
            </div>
            <div className={styles.contentImg}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Pipe/sub1.jpg"}
                alt="sub1"
              />
            </div>
          </div>
          <Test />
        </div>
      </div>
    </>
  );
}

export default Pipe;

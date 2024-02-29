import React from "react";
import PageNav from "../../Components/PageNav";
import Banner from "../../Components/Banner";
import styles from "./Flange.module.css";
import FlangeLink from "../../Components/FlangeLink";
import PageFooter from "../../Components/PageFooter";
function TongueGroove() {
  return (
    <>
      <PageNav />
      <Banner title={"Tongue & Groove"} />
      <div className={styles.flangeSec}>
        <FlangeLink />
        <div className={styles.contentFlange}>
          <div className={styles.flangeHead}>
            <div className={styles.flangeText}>
              <h1>TONGUE & GROOVE FLANGE</h1>
              <p>
                Tongue & Groove Flange, the Tongue Flange is manufactured with a
                raised ring that is machined into its face. The Groove Flange is
                produced with a matching depression machined onto its face. In
                order to have a watertight connection, it is important to match
                the faces of these flanges. Alloy 20 Groove & Tongue Flanges are
                self-aligning; they do not come in contact with the inner fluid
                or gas of the tube or pipe. Instantly, they are free from any
                corrosion. Nickel Tongue & Groove Flanges are used in the
                chemical, petroleum and crude oil extraction industry
              </p>
            </div>
            <div className={styles.img}>
              <img
                src={process.env.PUBLIC_URL + "/Imgs/Product/Flange/tongue.jpg"}
                alt="tongue"
              />
            </div>
          </div>
          <h2>
            ANSI/ASME B16.5 Groove and Tongue Flange Standard Specification
          </h2>
          <p>
            <strong>Dimensions :</strong>ANSI B16.5, ANSI B16.47 Series A & B,
            MSS SP44, ASA, API-605, AWWA, Custom Drawings
            <br />
            <strong>Size :</strong> 1/2″ (15 NB) to 48″ (1200NB)
            <br />
            <strong>Class :</strong>150 LBS, 300 LBS, 600 LBS, 900 LBS, 1500
            LBS, 2500 LBS
            <br />
            <strong>DIN :</strong>DIN2527, DIN2566, DIN2573, DIN2576, DIN2641,
            DIN2642, DIN2655, DIN2656, DIN2627, DIN2628, DIN2629, DIN 2631,
            DIN2632, DIN2633, DIN2634, DIN2635, DIN2636,DIN2637, DIN2638,
            DIN2673 DIN Standard ND-6,10, 16, 25, 40 Etc.
            <br /> <strong>BS :</strong> BS4504 , BS4504, BS1560, BS10 , PN6 ,
            PN10 , PN16 , PN25 , PN40, etc
            <br />
            <strong>Table :</strong> D / E / F / H / J / K
            <br /> <strong>API STANDARDS :</strong>PSI-2000/3000/5000/10000/ETC
            <br />
            <strong>JIS Standards :</strong> 2220-2004 5k/10k/16k , ETC
            <br />
            <strong>Flange Face Type :</strong> Flate Face (FF), Raised Face
            (RF), Ring Type Joint (RTJ)
            <br />
            <br />
            <strong> Stainless Steel Tongue and Groove Flange:</strong>ASTM A
            182, A 240 F 304, 304L, 304H, 316, 316L, 316Ti, 310, 310S, 321,
            321H, 317, 347, 347H, 904L
            <br />
            <br />
            <strong>
              Duplex & Super Duplex Steel Groove and Tongue Flange :
            </strong>
            ASTM / ASME A/SA 182 F 44, F 45, F51, F 53, F 55, F 60, F 61
            <br />
            <br />
            <strong> Carbon Steel Tongue and Groove Flange:</strong>ASTM / ASME
            A/SA 105 ASTM / ASME A 350 , ASTM A 181 LF 2 / A516 Gr.70 A36, A694
            F42, F46, F52, F60, F65, F706
            <br />
            <br />
            <strong>
              Low Temperature Carbon Steel Groove and Tongue Flange:
            </strong>
            ASTM A350, LF2, LF3
            <br />
            <br />
            <strong>Alloy Steel Groove and Tongue Flange:</strong>ASTM / ASME
            A/SA 182 & A 387 F1, F5, F9, F11, F12, F22, F91 Copper Alloy Steel
            Lap Joint Flanges : ASTM SB 61 , SB62 , SB151 , SB152 UNS No. C
            70600 (Cu-Ni 90/10), C 71500 (Cu-Ni 70/30), UNS No. C 10100, 10200,
            10300, 10800, 12000, 12200
            <br />
            <br />
            <strong>Nickel Alloy Weld Neck Flanges :</strong>ASTM SB564, SB160,
            SB472, SB162 Nickel 200 (UNS No. N02200), Nickel 201 (UNS No.
            N02201), Monel 400 (UNS No. N04400), Monel 500 (UNS No. N05500),
            Inconel 800 (UNS No. N08800), Inconel 825 (UNS No. N08825), Inconel
            600 (UNS No. N06600), Inconel 625 (UNS No. N06625), Inconel 601 (UNS
            No. N06601), Hastelloy C 276 (UNS No. N10276), Alloy 20 (UNS No.
            N08020)
            <br />
            <br />
            <strong>Marking & Packing</strong>
            <br /> Products are packaged to ensure that there is no damage
            during transit. In case of exports, standard export packaging is
            done in wooden cases. All flanges are marked with Grade, Lot No,
            Size, Degree and our trade mark. On special requests we can also,
            make custom marking on our products. <br />
            <br />
            <strong> Quality Assurance</strong>
            <br /> At Nepco Impex LLP , all fittings and flanges are subject to
            strict inspection at each stage of the production process, from
            starting material purchasing to product dispatch. They are visually
            examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes
            and standards. Upon request, official certified Inspection Agencies
            can be called in to witness the material reports, dimensions and
            quality conformity of products. <br />
            <br />
            <strong>Test Certificates:</strong>
            <br /> Manufacturer Test Certificate as per EN 10204 / 3.1B, Raw
            Materials Certificate, 100% Radiography Test Report, Third Party
            Inspection Report
          </p>
        </div>
      </div>
      <PageFooter />
    </>
  );
}

export default TongueGroove;

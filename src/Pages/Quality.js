import React from "react";
import PageNav from "../Components/PageNav";
import PageFooter from "../Components/PageFooter";
import Banner from "../Components/Banner";
import QuickLinks from "../Components/QuickLinks";
import styles from "./Quality.module.css";
function Quality() {
  return (
    <>
      <PageNav />
      <Banner title={"Quality"} />
      <div className={styles.qualitySection}>
        <QuickLinks />
        <div className={styles.qualityData}>
          <div className={styles.imgDiv}>
            <img
              src={process.env.PUBLIC_URL + "/Imgs/quality.jpg"}
              alt="quality.jpg"
            />
          </div>
          <div>
            <h1>Quality</h1>
            <p>
              Quality is our prime concern. We are able to maintain high quality
              standards through our committed personnel and sound
              infrastructure. We ensure that finest quality material is used for
              our products. For ensure the quality of each material, we are
              providing Materials Test Certificate along with supply. Our team
              of experts maintain a vigil on the quality of the products. Every
              single piece is attached with test certificates and reports. We
              are continually improving our quality to serve our clients better.
            </p>
            <h3>Quality Objectives :</h3>
            <p>
              <strong>
                We consider three elements to be essential for the overall
                quality of the company services :
              </strong>
              <br />
              Independence & Objectivity.
              <br /> Technical & Scientific Quality.
              <br />
              Practical Benefits to Clients.
            </p>
            <h3>Our Excellence :</h3>
            <p>
              Quality is our prime aim. We are able to maintain high quality
              standards through our committed personnel and sound
              infrastructure. We ensure that finest quality material is used for
              our products. For ensure the quality of each material, we are
              providing Materials Test Certificate along with supply. Our teams
              of experts maintain a vigil on the quality of the products. Every
              single piece is attached with test certificates and reports. We
              are continually improving our quality to serve our clients better.
            </p>
            <h3>Quality Control :</h3>
            <p>
              We exercise stringent quality control measures for ensuring the
              accurate dimensions and Mechanical Composition of our products.
              Our quality assurance system assures each product to pass through
              following processes and quality systems : <br />
              <br />
              Certification and Supplementary Test
              <br /> Finishing and Marketing.
              <br /> The impeccable quality standards of our product range as
              well as services have contributed immensely to the success of our
              company. <br />
              Material Control System <br />
              Machining and Dimensional Control
              <br /> Process Control System
            </p>
            <h3>Quality Assurance :</h3>
            <p>
              The quality assurance system is guided by principles that support
              our unique working culture which incorporates respect, self
              management, open communication and creativity.
              <br />
              <br />
              <strong>Principles :</strong>
              <br />
              We strive to be the best qualities and technologies in our
              industry.
              <br />
              We care about our client's time and money.
              <br />
              We do our absolute best to honor our words and client faith on us.
              <br />
              We strive to always act with integrity and commitments.
            </p>
            <h3>Our Quality Standards :</h3>
            <p>
              The bitterness of poor quality remains long after low pricing is
              forgotten. So, we follow strong measure of quality checking.
              Understanding Customers requirement and ensuring to supply as per
              these requirements is realized with the help of Quality Assurance
              and Quality Control at Arihant Enginnering Exports. Across the
              entire business chain of supplies, operations and marketing
              appropriate quality assurance systems are in place to ensure
              correctness at each step of the cycle.
              <br />
              <br />
              In our philosophy, quality is not only the durability and defect
              free nature of product but its utility and applicability to
              satisfy the sole purpose for which it was bought. Thus, we are
              committed to produce products, which can satisfy different
              requirements and purposes. We have adopted stringent quality
              control measures to ensure superior quality and zero defects
              products. Quality is checked at different stages of production and
              supply and the raw material we use is sourced only from reliable
              and established vendors.
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </>
  );
}

export default Quality;

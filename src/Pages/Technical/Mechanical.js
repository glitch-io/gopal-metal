import React from "react";
import PageNav from "../../Components/PageNav";
import PageFooter from "../../Components/PageFooter";
import Banner from "../../Components/Banner";
import QuickLinks from "../../Components/QuickLinks";
import styles from "./Technical.module.css";
import { Table } from "react-bootstrap";
function Mechanical() {
  return (
    <>
      <PageNav />
      <Banner title={"Mechanical Composition"} />
      <div className={styles.technicalContent}>
        <QuickLinks />
        <div className={styles.tableDiv}>
          <Table striped bordered hover responsive className={styles.table}>
            <thead>
              <tr>
                <th colSpan={6}>MECHANICAL COMPOSITION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>Grade</td>
                <td rowSpan={2}>Tensile Strength Mpa, (Min)</td>
                <td rowSpan={2}>Yield StrengthÂ Mpa, (Min)</td>
                <td rowSpan={2}>%Age Elongation in 50mm gauge length min</td>
                <td colSpan={2}>Hardness (Max)</td>
              </tr>
              <tr>
                <td>BHN</td>
                <td>Rb</td>
              </tr>
              <tr>
                <td>301</td>
                <td>515</td>
                <td>205</td>
                <td>40</td>
                <td>217</td>
                <td>95</td>
              </tr>
              <tr>
                <td>304</td>
                <td>515</td>
                <td>205</td>
                <td>40</td>
                <td>201</td>
                <td>92</td>
              </tr>
              <tr>
                <td>304L</td>
                <td>485</td>
                <td>170</td>
                <td>40</td>
                <td>201</td>
                <td>92</td>
              </tr>
              <tr>
                <td>310S</td>
                <td>515</td>
                <td>205</td>
                <td>40</td>
                <td>217</td>
                <td>95</td>
              </tr>
              <tr>
                <td>316</td>
                <td>515</td>
                <td>205</td>
                <td>40</td>
                <td>217</td>
                <td>95</td>
              </tr>
              <tr>
                <td>316L</td>
                <td>485</td>
                <td>170</td>
                <td>40</td>
                <td>217</td>
                <td>95</td>
              </tr>
              <tr>
                <td>317</td>
                <td>515</td>
                <td>205</td>
                <td>35</td>
                <td>217</td>
                <td>95</td>
              </tr>
              <tr>
                <td>317L</td>
                <td>515</td>
                <td>205</td>
                <td>40</td>
                <td>217</td>
                <td>95</td>
              </tr>
              <tr>
                <td>321</td>
                <td>515</td>
                <td>205</td>
                <td>40</td>
                <td>217</td>
                <td>95</td>
              </tr>
              <tr>
                <td>347</td>
                <td>515</td>
                <td>205</td>
                <td>40</td>
                <td>201</td>
                <td>92</td>
              </tr>
              <tr>
                <td>409</td>
                <td>380</td>
                <td>170</td>
                <td>20</td>
                <td>179</td>
                <td>88</td>
              </tr>
              <tr>
                <td>409M</td>
                <td>430</td>
                <td>275</td>
                <td>20</td>
                <td>187</td>
                <td>90</td>
              </tr>
              <tr>
                <td>410S</td>
                <td>415</td>
                <td>205</td>
                <td>22</td>
                <td>183</td>
                <td>89</td>
              </tr>
              <tr>
                <td>410</td>
                <td>450</td>
                <td>205</td>
                <td>20</td>
                <td>217</td>
                <td>89</td>
              </tr>
              <tr>
                <td>420</td>
                <td>700 (max)</td>
                <td>-</td>
                <td>15</td>
                <td>217</td>
                <td>95</td>
              </tr>
              <tr>
                <td>430</td>
                <td>450</td>
                <td>205</td>
                <td>22</td>
                <td>183</td>
                <td>89</td>
              </tr>
              <tr>
                <td>JSL AUS</td>
                <td>515</td>
                <td>205</td>
                <td>40</td>
                <td>217</td>
                <td>95</td>
              </tr>
              <tr>
                <td>JS- 203</td>
                <td>515</td>
                <td>205</td>
                <td>40</td>
                <td>217</td>
                <td>95</td>
              </tr>
              <tr>
                <td>301M</td>
                <td>515</td>
                <td>205</td>
                <td>40</td>
                <td>217</td>
                <td>95</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <PageFooter />
    </>
  );
}

export default Mechanical;

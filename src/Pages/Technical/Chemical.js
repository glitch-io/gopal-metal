import React from "react";
import PageNav from "../../Components/PageNav";
import PageFooter from "../../Components/PageFooter";
import Banner from "../../Components/Banner";
import QuickLinks from "../../Components/QuickLinks";
import { Table } from "react-bootstrap";
import styles from "./Technical.module.css";
function Chemical() {
  return (
    <>
      <PageNav />
      <Banner title={"Chemical Composition"} />
      <div className={styles.technicalContent}>
        <QuickLinks />
        <div className={styles.tableDiv}>
          <Table striped bordered hover responsive className={styles.table}>
            <thead>
              <tr>
                <th colSpan={11}>CHEMICAL COMPOSITION ( IN PERCENTAGE )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grade</td>
                <td>C (Max)</td>
                <td>Mn (Max)</td>
                <td>P (Max)</td>
                <td>S (Max)</td>
                <td>Si (Max)</td>
                <td>Cr</td>
                <td>Ni</td>
                <td>Mo</td>
                <td>Nitrogen (Max)</td>
                <td>Cu/ Others</td>
              </tr>
              <tr>
                <td>301</td>
                <td>0.15</td>
                <td>2.00</td>
                <td>0.045</td>
                <td>0.030</td>
                <td>1.00</td>
                <td>16.00 - 18.00</td>
                <td>6.00 - 8.00</td>
                <td>-</td>
                <td>0.10</td>
                <td>-</td>
              </tr>
              <tr>
                <td>304</td>
                <td>0.08</td>
                <td>2.00</td>
                <td>0.045</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>18.00 - 20.00</td>
                <td>8.00 - 10.50</td>
                <td>-</td>
                <td>0.10</td>
                <td>-</td>
              </tr>
              <tr>
                <td>304L</td>
                <td>0.030</td>
                <td>2.00</td>
                <td>0.045</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>18.00 - 20.00</td>
                <td>8.00 - 12.00</td>
                <td>-</td>
                <td>0.10</td>
                <td>-</td>
              </tr>
              <tr>
                <td>310S</td>
                <td>0.08</td>
                <td>2.00</td>
                <td>0.045</td>
                <td>0.030</td>
                <td>1.50</td>
                <td>24.00 - 26.00</td>
                <td>19.00 - 22.00</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>316</td>
                <td>0.08</td>
                <td>2.00</td>
                <td>0.045</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>16.00 - 18.00</td>
                <td>10.00 - 14.00</td>
                <td>2.00 - 3.00</td>
                <td>0.10</td>
                <td>-</td>
              </tr>
              <tr>
                <td>316L</td>
                <td>0.03</td>
                <td>2.00</td>
                <td>0.045</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>16.00 - 18.00</td>
                <td>10.00 - 14.00</td>
                <td>2.00 - 3.00</td>
                <td>0.10</td>
                <td>-</td>
              </tr>
              <tr>
                <td>317</td>
                <td>0.08</td>
                <td>2.00</td>
                <td>0.045</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>18.00 - 20.00</td>
                <td>11.00 - 14.00</td>
                <td>3.00 - 4.00</td>
                <td>0.10</td>
                <td>-</td>
              </tr>
              <tr>
                <td>317L</td>
                <td>0.03</td>
                <td>2.00</td>
                <td>0.045</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>18.00 - 20.00</td>
                <td>11.00 - 15.00</td>
                <td>3.00 - 4.00</td>
                <td>0.10</td>
                <td>-</td>
              </tr>
              <tr>
                <td>321</td>
                <td>0.08</td>
                <td>2.00</td>
                <td>0.045</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>17.00 - 19.00</td>
                <td>9.00 - 12.00</td>
                <td>-</td>
                <td>0.10</td>
                <td>Ti5 (C +N) min or 0.7 max</td>
              </tr>
              <tr>
                <td>347</td>
                <td>0.08</td>
                <td>2.00</td>
                <td>0.045</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>17.00 - 19.00</td>
                <td>9.00 - 13.00</td>
                <td>-</td>
                <td>-</td>
                <td>Cb=10x (C Min)or 1.00 Max</td>
              </tr>
              <tr>
                <td>409</td>
                <td>0.08</td>
                <td>1.00</td>
                <td>0.040</td>
                <td>0.010</td>
                <td>1.00</td>
                <td>10.50 - 11.75</td>
                <td>0.50</td>
                <td>-</td>
                <td>-</td>
                <td>Ti=6x (C+N) Min or 0.7 Max</td>
              </tr>
              <tr>
                <td>409M</td>
                <td>0.03</td>
                <td>0.81.2</td>
                <td>0.030</td>
                <td>0.030</td>
                <td>0.40.75</td>
                <td>11.0 - 12</td>
                <td>1.5 max</td>
                <td>-</td>
                <td>-</td>
                <td>Ti=6x (C) Min or 0.7 Max</td>
              </tr>
              <tr>
                <td>410S</td>
                <td>0.08</td>
                <td>1.00</td>
                <td>0.040</td>
                <td>0.030</td>
                <td>1.00</td>
                <td>11.5 - 13.50</td>
                <td>1.6</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>410</td>
                <td>0.15</td>
                <td>1.00</td>
                <td>0.040</td>
                <td>0.030</td>
                <td>1.00</td>
                <td>11.5 - 13.50</td>
                <td>1.75</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>420</td>
                <td>0.35</td>
                <td>0.50</td>
                <td>0.035</td>
                <td>0.015</td>
                <td>0.50</td>
                <td>12.00 - 13.00</td>
                <td>0.20.3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>430</td>
                <td>0.12</td>
                <td>1.00</td>
                <td>0.040</td>
                <td>0.030</td>
                <td>1.00</td>
                <td>16.00 - 18.00</td>
                <td>0.75</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>JSL AUS</td>
                <td>0.08</td>
                <td>7.08.0</td>
                <td>0.070</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>15.50 - 16.50</td>
                <td>4.25 - 4.75</td>
                <td>-</td>
                <td>-</td>
                <td>0.9 - 1.10</td>
              </tr>
              <tr>
                <td>JS-203</td>
                <td>0.08</td>
                <td>9.2510.25</td>
                <td>0.070</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>14.25 - 15.25</td>
                <td>2.25 - 2.75</td>
                <td>-</td>
                <td>-</td>
                <td>1.60 - 2.00</td>
              </tr>
              <tr>
                <td>301M</td>
                <td>0.10</td>
                <td>4.55.5</td>
                <td>0.060</td>
                <td>0.030</td>
                <td>0.75</td>
                <td>14.50 - 15.50</td>
                <td>6.00 - 7.00</td>
                <td>-</td>
                <td>-</td>
                <td>1.70 - 1.90</td>
              </tr>
              <tr>
                <td colSpan={11}>
                  *Thickness of 1.27mm & below will have elongation of 20% min.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <PageFooter />
    </>
  );
}

export default Chemical;

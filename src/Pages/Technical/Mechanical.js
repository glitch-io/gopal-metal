import React from "react";
import Banner from "../../Components/Banner";
import QuickLinks from "../../Components/QuickLinks";
import styles from "./Technical.module.css";
import { Table } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const mechanicalData = [
  {
    grade: "301",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 40,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
  {
    grade: "304",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 40,
    hardnessBHN: 201,
    hardnessRb: 92,
  },
  {
    grade: "304L",
    tensileStrength: 485,
    yieldStrength: 170,
    elongation: 40,
    hardnessBHN: 201,
    hardnessRb: 92,
  },
  {
    grade: "310S",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 40,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
  {
    grade: "316",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 40,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
  {
    grade: "316L",
    tensileStrength: 485,
    yieldStrength: 170,
    elongation: 40,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
  {
    grade: "317",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 35,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
  {
    grade: "317L",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 40,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
  {
    grade: "321",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 40,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
  {
    grade: "347",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 40,
    hardnessBHN: 201,
    hardnessRb: 92,
  },
  {
    grade: "409",
    tensileStrength: 380,
    yieldStrength: 170,
    elongation: 20,
    hardnessBHN: 179,
    hardnessRb: 88,
  },
  {
    grade: "409M",
    tensileStrength: 430,
    yieldStrength: 275,
    elongation: 20,
    hardnessBHN: 187,
    hardnessRb: 90,
  },
  {
    grade: "410S",
    tensileStrength: 415,
    yieldStrength: 205,
    elongation: 22,
    hardnessBHN: 183,
    hardnessRb: 89,
  },
  {
    grade: "410",
    tensileStrength: 450,
    yieldStrength: 205,
    elongation: 20,
    hardnessBHN: 217,
    hardnessRb: 89,
  },
  {
    grade: "420",
    tensileStrength: 700,
    yieldStrength: null,
    elongation: 15,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
  {
    grade: "430",
    tensileStrength: 450,
    yieldStrength: 205,
    elongation: 22,
    hardnessBHN: 183,
    hardnessRb: 89,
  },
  {
    grade: "JSL AUS",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 40,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
  {
    grade: "JS- 203",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 40,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
  {
    grade: "301M",
    tensileStrength: 515,
    yieldStrength: 205,
    elongation: 40,
    hardnessBHN: 217,
    hardnessRb: 95,
  },
];

function Mechanical() {
  return (
    <>
      <Helmet>
        <title>Mechanical Composition</title>
        <meta
          name="description"
          content="Nepco Impex LLP is one of the leading company amongst the manufacturers and exporters of high quality flanges,Pipes and Pipe Fittings, Buttweld, ..."
        />
        <link rel="canonical" href="/mechanical-composition" />
      </Helmet>
      <Banner title={"Mechanical Composition"} />
      <div className={styles.technicalContent}>
        <QuickLinks />
        <div className={styles.tableDiv}>
          <Table striped bordered hover responsive className={styles.table}>
            <thead>
              <tr>
                <th colSpan={6}>MECHANICAL COMPOSITION</th>
              </tr>
              <tr>
                <th>Grade</th>
                <th>Tensile Strength Mpa, (Min)</th>
                <th>Yield Strength Mpa, (Min)</th>
                <th>%Age Elongation in 50mm gauge length min</th>
                <th>Hardness (Max) BHN</th>
                <th>Hardness (Max) Rb</th>
              </tr>
            </thead>
            <tbody>
              {mechanicalData.map((data, index) => (
                <tr key={index}>
                  <td>{data.grade}</td>
                  <td>{data.tensileStrength}</td>
                  <td>{data.yieldStrength}</td>
                  <td>{data.elongation}</td>
                  <td>{data.hardnessBHN}</td>
                  <td>{data.hardnessRb}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Mechanical;

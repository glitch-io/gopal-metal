import React from "react";
import Banner from "../../Components/Banner";
import QuickLinks from "../../Components/QuickLinks";
import { Table } from "react-bootstrap";
import styles from "./Technical.module.css";
import { Helmet } from "react-helmet-async";

function Chemical() {
  const chemicalData = [
    {
      grade: "301",
      cMax: "0.15",
      mnMax: "2.00",
      pMax: "0.045",
      sMax: "0.030",
      siMax: "1.00",
      cr: "16.00 - 18.00",
      ni: "6.00 - 8.00",
      mo: "-",
      nitrogenMax: "0.10",
      cuOthers: "-",
    },
    {
      grade: "304",
      cMax: "0.08",
      mnMax: "2.00",
      pMax: "0.045",
      sMax: "0.030",
      siMax: "0.75",
      cr: "18.00 - 20.00",
      ni: "8.00 - 10.50",
      mo: "-",
      nitrogenMax: "0.10",
      cuOthers: "-",
    },
    {
      grade: "304L",
      cMax: "0.030",
      mnMax: "2.00",
      pMax: "0.045",
      sMax: "0.030",
      siMax: "0.75",
      cr: "18.00 - 20.00",
      ni: "8.00 - 12.00",
      mo: "-",
      nitrogenMax: "0.10",
      cuOthers: "-",
    },
    {
      grade: "310S",
      cMax: "0.08",
      mnMax: "2.00",
      pMax: "0.045",
      sMax: "0.030",
      siMax: "1.50",
      cr: "24.00 - 26.00",
      ni: "19.00 - 22.00",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "-",
    },
    {
      grade: "316",
      cMax: "0.08",
      mnMax: "2.00",
      pMax: "0.045",
      sMax: "0.030",
      siMax: "0.75",
      cr: "16.00 - 18.00",
      ni: "10.00 - 14.00",
      mo: "2.00 - 3.00",
      nitrogenMax: "0.10",
      cuOthers: "-",
    },
    {
      grade: "316L",
      cMax: "0.03",
      mnMax: "2.00",
      pMax: "0.045",
      sMax: "0.030",
      siMax: "0.75",
      cr: "16.00 - 18.00",
      ni: "10.00 - 14.00",
      mo: "2.00 - 3.00",
      nitrogenMax: "0.10",
      cuOthers: "-",
    },
    {
      grade: "317",
      cMax: "0.08",
      mnMax: "2.00",
      pMax: "0.045",
      sMax: "0.030",
      siMax: "0.75",
      cr: "18.00 - 20.00",
      ni: "11.00 - 14.00",
      mo: "3.00 - 4.00",
      nitrogenMax: "0.10",
      cuOthers: "-",
    },
    {
      grade: "317L",
      cMax: "0.03",
      mnMax: "2.00",
      pMax: "0.045",
      sMax: "0.030",
      siMax: "0.75",
      cr: "18.00 - 20.00",
      ni: "11.00 - 15.00",
      mo: "3.00 - 4.00",
      nitrogenMax: "0.10",
      cuOthers: "-",
    },
    {
      grade: "321",
      cMax: "0.08",
      mnMax: "2.00",
      pMax: "0.045",
      sMax: "0.030",
      siMax: "0.75",
      cr: "17.00 - 19.00",
      ni: "9.00 - 12.00",
      mo: "-",
      nitrogenMax: "0.10",
      cuOthers: "Ti5 (C +N) min or 0.7 max",
    },
    {
      grade: "347",
      cMax: "0.08",
      mnMax: "2.00",
      pMax: "0.045",
      sMax: "0.030",
      siMax: "0.75",
      cr: "17.00 - 19.00",
      ni: "9.00 - 13.00",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "Cb=10x (C Min)or 1.00 Max",
    },
    {
      grade: "409",
      cMax: "0.08",
      mnMax: "1.00",
      pMax: "0.040",
      sMax: "0.010",
      siMax: "1.00",
      cr: "10.50 - 11.75",
      ni: "0.50",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "Ti=6x (C+N) Min or 0.7 Max",
    },
    {
      grade: "409M",
      cMax: "0.03",
      mnMax: "0.81.2",
      pMax: "0.030",
      sMax: "0.030",
      siMax: "0.40.75",
      cr: "11.0 - 12",
      ni: "1.5 max",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "Ti=6x (C) Min or 0.7 Max",
    },
    {
      grade: "410S",
      cMax: "0.08",
      mnMax: "1.00",
      pMax: "0.040",
      sMax: "0.030",
      siMax: "1.00",
      cr: "11.5 - 13.50",
      ni: "1.6",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "-",
    },
    {
      grade: "410",
      cMax: "0.15",
      mnMax: "1.00",
      pMax: "0.040",
      sMax: "0.030",
      siMax: "1.00",
      cr: "11.5 - 13.50",
      ni: "1.75",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "-",
    },
    {
      grade: "420",
      cMax: "0.35",
      mnMax: "0.50",
      pMax: "0.035",
      sMax: "0.015",
      siMax: "0.50",
      cr: "12.00 - 13.00",
      ni: "0.20.3",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "-",
    },
    {
      grade: "430",
      cMax: "0.12",
      mnMax: "1.00",
      pMax: "0.040",
      sMax: "0.030",
      siMax: "1.00",
      cr: "16.00 - 18.00",
      ni: "0.75",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "-",
    },
    {
      grade: "JSL AUS",
      cMax: "0.08",
      mnMax: "7.08.0",
      pMax: "0.070",
      sMax: "0.030",
      siMax: "0.75",
      cr: "15.50 - 16.50",
      ni: "4.25 - 4.75",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "0.9 - 1.10",
    },
    {
      grade: "JS-203",
      cMax: "0.08",
      mnMax: "9.25 - 10.25",
      pMax: "0.070",
      sMax: "0.030",
      siMax: "0.75",
      cr: "14.25 - 15.25",
      ni: "2.25 - 2.75",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "1.60 - 2.00",
    },
    {
      grade: "301M",
      cMax: "0.10",
      mnMax: "4.5 - 5.5",
      pMax: "0.060",
      sMax: "0.030",
      siMax: "0.75",
      cr: "14.50 - 15.50",
      ni: "6.00 - 7.00",
      mo: "-",
      nitrogenMax: "-",
      cuOthers: "1.70 - 1.90",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Chemical Composition</title>
        <meta
          name="description"
          content="Nepco Impex LLP is one of the leading company amongst the manufacturers and exporters of high quality flanges,Pipes and Pipe Fittings, Buttweld, ..."
        />
        <link rel="canonical" href="/chemical-composition" />
      </Helmet>
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
              {chemicalData.map((data, index) => (
                <tr key={index}>
                  <td>{data.grade}</td>
                  <td>{data.cMax}</td>
                  <td>{data.mnMax}</td>
                  <td>{data.pMax}</td>
                  <td>{data.sMax}</td>
                  <td>{data.siMax}</td>
                  <td>{data.cr}</td>
                  <td>{data.ni}</td>
                  <td>{data.mo}</td>
                  <td>{data.nitrogenMax}</td>
                  <td>{data.cuOthers}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={11}>
                  *Thickness of 1.27mm & below will have elongation of 20% min.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Chemical;

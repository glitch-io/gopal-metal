import React from "react";
import { Link } from "react-router-dom";
import styles from "./QuickLinks.module.css";
import { CaretCircleRight } from "phosphor-react";
function QuickLinks() {
  const QuickLinksData = [
    { link: "/flanges", name: "Flanges" },
    { link: "/forged-fittings", name: "Forged Fittings" },
    { link: "/buttweld-fittings", name: "Buttweld Fittings" },
    { link: "/pipe", name: "Pipe & Tube" },
    { link: "/round-bar", name: "Round Bar" },
    { link: "/sheet", name: "Sheet & Plate" },
  ];
  return (
    <div className={styles.quickLinks}>
      <h2>Products</h2>
      <ul>
        {QuickLinksData.map((data) => (
          <li key={data.name}>
            <Link to={data.link}>
              <CaretCircleRight size={20} />
              <span>{data.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickLinks;

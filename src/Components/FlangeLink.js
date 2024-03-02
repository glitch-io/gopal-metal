import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./QuickLinks.module.css";
import { CaretCircleRight } from "phosphor-react";
import { flangeLinksData } from "../data";
function FlangeLink() {
  const location = useLocation();
  return (
    <div className={styles.quickLinks}>
      <h2>Flanges</h2>
      <ul>
        {flangeLinksData.map((data) => (
          <li key={data.name}>
            <Link
              to={data.link}
              className={location.pathname === data.link ? styles.active : ""}
            >
              <CaretCircleRight size={20} />
              <span>{data.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlangeLink;

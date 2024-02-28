import React from "react";
import { Link } from "react-router-dom";
import styles from "./QuickLinks.module.css";
import { CaretCircleRight } from "phosphor-react";
function FlangeLink() {
  const QuickLinksData = [
    { link: "/weld-neck-flange", name: "Weld Neck Flange" },
    { link: "/slip-on-flange", name: "Slip-On Flange" },
    { link: "/blind-flange", name: "Blind Flange" },
    { link: "/socket-weld-flange", name: "Socket Weld Flange" },
    { link: "/lap-flange", name: "Lap Flange" },
    { link: "/plate-flange", name: "Plate Flange" },
    { link: "/tongue-and-groove", name: "Tongue & Groove" },
    { link: "/ring-type-joint-flanges", name: "Ring Type Joint Flanges" },
    { link: "/orifice-flanges", name: "Orifice Flanges" },
    { link: "/threaded-flanges", name: "Threaded Flange" },
  ];
  return (
    <div className={styles.quickLinks}>
      <h2>Flanges</h2>
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

export default FlangeLink;

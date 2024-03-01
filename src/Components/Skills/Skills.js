import React from "react";
import styles from "./Skills.module.css";
import { skillsData } from "../../data";
function Skills() {
  return (
    <div className={styles.skillsSection}>
      <h3>OUR SKILLS</h3>
      <h1>Why Choose Us</h1>
      <div className={styles.skills}>
        {skillsData.map((item) => (
          <div className={styles.skill} key={item.name} data-aos="fade-up">
            <h2>{item.name}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

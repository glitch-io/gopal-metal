import React from "react";
import styles from "./Skills.module.css";
function Skills() {
  const skillsData = [
    {
      name: "Largest Inventory",
      text: "We help customers develop their energy resources;bringing world class capability and delivering it domestically and globally",
    },
    {
      name: "Quality Assurance",
      text: "The quality assurance system is guided by principles that support our unique working culture which incorporates respect. We ensure that finest quality material is used for our products.",
    },
    {
      name: "Quick Delivery",
      text: "Whether big or small, we respect all our clients and every care is taken to give them a pleasant and hassle-free business experience. We deliver our orders in bulk as well as economic order quantities and as a rule. We believe to give the delivery of goods within the time assigned by us and as per the customer’s requirement",
    },
    {
      name: "Customer Support",
      text: "Build strong relationships with our customers – which we achieve, for example, by employing and training local workforces.",
    },
    {
      name: "Third Party Inspection",
      text: "Our team of experts maintain a vigil on the quality of the products. Every single piece is attached with test certificates and reports. We are continually improving our quality to serve our clients better.",
    },
    {
      name: "Product Sourcing & Packaging",
      text: "We have many years of experience of product sourcing domestically and globally and also Packaging also plays a key role in export success as it helps in the safe keep of products, retaining them in perfect condition until reaching the destination and also uniquely positioning and differentiating them.",
    },
  ];
  return (
    <div className={styles.skillsSection}>
      <h3>OUR SKILLS</h3>
      <h1>Why Choose Us</h1>
      <div className={styles.skills}>
        {skillsData.map((item) => (
          <div className={styles.skill} key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

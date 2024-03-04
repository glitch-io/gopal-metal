import React, { useState, useEffect } from "react";
import styles from "./Cursor.module.css"; // Import your CSS file if you have styling for the cursor

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <>
      <div
        className={styles.cursor}
        style={{ left: position.x + "px", top: position.y + "px" }}
      />
      <div
        className={styles.cursor2}
        style={{ left: position.x + "px", top: position.y + "px" }}
      />
    </>
  );
};

export default Cursor;

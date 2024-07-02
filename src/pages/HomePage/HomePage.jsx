import React from "react";
import { useEffect } from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  useEffect(() => {
    const handleStartClick = () => {
      window.location.href = "/measurements";
    };

    const button = document.getElementById("startButton");
    button.addEventListener("click", handleStartClick);

    return () => {
      button.removeEventListener("click", handleStartClick);
    };
  }, []);

  return (
    <div className={styles.homePage}>
      <h1 className={styles.heading}>
        Welcome to the application "fuel dispensers"
      </h1>
      <p className={styles.paragraph}>
        Press{" "}
        <button id="startButton" className={styles.button}>
          start
        </button>{" "}
        and begin measuring
      </p>
    </div>
  );
}

export default HomePage;

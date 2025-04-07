import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Welcome to Tree Tracker 🌳</h1>
      <p>Visualize and track your binary search trees!</p>
      <div className={styles.buttons}>
        <button onClick={() => navigate("/form")}>Create New Tree</button>
        <button onClick={() => navigate("/previous")}>View Previous Trees</button>
      </div>
    </div>
  );
};

export default LandingPage;

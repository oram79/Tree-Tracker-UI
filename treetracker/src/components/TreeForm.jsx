import axios from "axios";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/TreeForm.css";

const TreeForm = () => {
  const [numbers, setNumbers] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numArray = numbers.split(",").map((n) => parseInt(n.trim(), 10));

    try {
      await axios.post("http://localhost:8080/processNumbers", numArray);
      setMessage("Tree saved successfully!");
    } catch (err) {
      setMessage("Error processing numbers.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
        <button type="submit">
          Submit <FaArrowRight />
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TreeForm;

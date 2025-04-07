import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTree } from "react-icons/fa";
import styles from "../styles/TreeList.css";

const TreeList = () => {
  const [trees, setTrees] = useState([]);

  const fetchTrees = async () => {
    const res = await axios.get("http://localhost:8080/previousTrees");
    setTrees(res.data);
  };

  useEffect(() => {
    fetchTrees();
  }, []);

  return (
    <div className={styles.treeList}>
      <h2>
        <FaTree /> Previous Trees
      </h2>
      {trees.map((tree, index) => (
        <div key={index} className={styles.treeCard}>
          <p><strong>Input:</strong> {tree.inputNumbers}</p>
          <pre>{JSON.stringify(tree.root, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default TreeList;

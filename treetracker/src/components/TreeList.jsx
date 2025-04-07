import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTree } from 'react-icons/fa';

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
    <div className="treeList">
      <h2><FaTree /> Previous Trees</h2>
      <a href="/form">Create New</a>

      {trees.map((tree, index) => (
        <div key={index} className="treeCard">
          <p>
            <strong>Input:</strong>{' '}
            {Array.isArray(tree.inputNumbers)
              ? tree.inputNumbers.join(', ')
              : String(tree.inputNumbers)}
          </p>
          <pre>{JSON.stringify(tree.root, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default TreeList;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <h1>Node Tree Tracker</h1>
      <p>Visualize and track your binary search trees!</p>

      <div>
        <button onClick={() => navigate("/form")}>Create New Tree</button>
        <button onClick={() => navigate("/previous")}>View Previous Trees</button>
      </div>
    </div>
  );
};

export default LandingPage;


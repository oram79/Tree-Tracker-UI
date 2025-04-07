import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import TreeForm from "./components/TreeForm";
import TreeList from "./components/TreeList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<TreeForm />} />
        <Route path="/previous" element={<TreeList />} />
      </Routes>
    </Router>
  );
}

export default App;

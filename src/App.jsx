import React from "react";
import "./style/App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import Customers from "./components/Customers";
import Income from "./components/Income";
import Promote from "./components/Promote";
import Help from "./components/Help";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/income" element={<Income />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;

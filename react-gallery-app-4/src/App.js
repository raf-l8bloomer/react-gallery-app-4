import React from "react";
import { Routes, Route } from "react-router-dom";

import './css/index.css';


import SearchForm from "./components/SearchForm.js";
import Nav from "./components/Nav.js";


function App() {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Routes>
        <Route path="/cats" element={ } />

      </Routes>
    </div>
  );
}

export default App;

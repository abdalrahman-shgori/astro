import React, { useState, useEffect } from "react";
import HomePage from "./components/homepage/homepage";
import Login from "./components/login/login";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location=useLocation();

  return (
    <>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="HomePage" element={<HomePage />} />
      </Routes>

    </>
  );
}

export default App;

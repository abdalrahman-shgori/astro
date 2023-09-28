import React from "react";
import HomePage from "./components/homepage/homepage";
import Login from "./components/login/login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* <HomePage/> */}
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="HomePage" element={<HomePage/>}></Route>

    </Routes>

    </>
  );
}

export default App;

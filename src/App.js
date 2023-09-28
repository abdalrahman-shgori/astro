import React, { useState, useEffect } from "react";
import HomePage from "./components/homepage/homepage";
import Login from "./components/login/login";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when components are ready
    }, 2000); // Adjust the delay time as needed
  }, []);

  return (
    <>
      {isLoading ? (
        // Display a loading indicator while components are loading
        <div>Loading...</div>
      ) : (
        // Render the components once isLoading is false
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="HomePage" element={<HomePage />} />
        </Routes>
      )}
    </>
  );
}

export default App;

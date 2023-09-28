import React, { useState, useEffect } from "react";
import HomePage from "./components/homepage/homepage";
import Login from "./components/login/login";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Listen for the 'load' event to check when the page has finished loading
    window.addEventListener("load", () => {
      setIsPageLoaded(true);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("load", () => {
        setIsPageLoaded(true);
      });
    };
  }, []);

  return (
    <>
      {!isPageLoaded ? (
        // Display a loading indicator while the page is loading
        <div>Loading...</div>
      ) : (
        // Render the components once the page is fully loaded
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="HomePage" element={<HomePage />} />
        </Routes>
      )}
    </>
  );
}

export default App;

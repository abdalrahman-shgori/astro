import React, { useEffect, useState } from "react";
import StaticNav from "../navbars/staticnav";
import NavBar from "../navbars/navbar";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import Hero from "../heroSection/herosection";
import RunWay from "../runway/runway";
import Experience from "../experience/experience";
import Services from "../services/services";
import Featucres from "../features/features";
import Talking from "../talkingAbout/talkingAbout";
import Footer from "../footer/footer";
import Blog from "../blogs/blogs";

function HomePage() {
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
        <>
            <StaticNav />
            <NavBar />
            <Hero />
            <RunWay />
            <Experience />
            <Services />
            <Featucres />
            <Talking />
            <Blog />
            <Footer />
            </>
            )}
        </>
    )
}

export default HomePage
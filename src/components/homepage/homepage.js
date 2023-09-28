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
        const checkPageLoaded = () => {
            if (document.readyState === "complete") {
                setIsPageLoaded(true);
            }
        };

        // Check the loading status of the document initially
        checkPageLoaded();

        // Listen for changes in the document's loading status
        document.addEventListener("readystatechange", checkPageLoaded);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("readystatechange", checkPageLoaded);
        };
    }, []);

    return (
        <>
            {!isPageLoaded ? (
                // Display a loading indicator while the page is loading
                <div>Loading...</div>
            ) : (
                // Render the components once the page is fully loaded
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
    );
}

export default HomePage;

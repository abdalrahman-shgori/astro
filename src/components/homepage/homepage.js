import React from "react";  
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

function HomePage(){


    return(
<>
<StaticNav/>
<NavBar/>
<Hero/>
<RunWay/>
<Experience/>
<Services/>
<Featucres/>
<Talking/>
<Blog/>
<Footer/>

</>
    )
}

export default HomePage
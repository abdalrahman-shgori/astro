import React, { useEffect ,useState} from "react";
import './herosection.css'
import { Grid, Box, Typography } from "@mui/material";
import astrologo from "../../assets/images/astrologo.png"
import rocket from "../../assets/images/rocket.png"
import search from "../../assets/images/search.svg"
import graph from "../../assets/images/graph.svg"
import gift from "../../assets/images/gift.svg"
import rightarrow from "../../assets/images/arrowRight.svg"
import downarrow from "../../assets/images/arrowdown.svg"
import earth from "../../assets/images/earrth.svg"
import RunWay from "../runway/runway";
import AOS from 'aos';
import 'aos/dist/aos.css';



function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      AOS.init();
  
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Refresh AOS animations when scrolling back up
      if (scrollY === 0) {
        AOS.refresh();
      }
    }, [scrollY]);
    return (
        <>
            <Grid className="background "
                sx={{
                    height: { lg: "600px", xs: "auto" }
                }}
            >
                <Grid container
                    sx={{
                        paddingLeft: "100px",
                    }}
                >
                    <Grid lg={5}>
                        <Box
                         data-aos="fade-down"
                         data-aos-duration="2500"

                         >
                            <img src={astrologo}></img>
                        </Box>
                        <Box 
                         data-aos="fade-up-right" 
                         data-aos-duration="2500"

                         >
                            <img src={rocket}></img>
                        </Box>
                    </Grid>
                    <Grid lg={7}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { lg: "60px", xs: "30px" }
                        }}
                    >
                        <Box className="mirror-text-container">
                            <Typography className="mirrored-text"

                                sx={{
                                    fontSize: { lg: "124px", xs: "44px" },
                                    lineHeight: { lg: "120px", xs: "44px" },

                                }}
                            >
                                Unlock possibilities
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#F3F3FF",
                                    fontWeight: "700",
                                    fontFamily: "Anodina",
                                    fontSize: { lg: "124px", xs: "40px" },
                                    lineHeight: { lg: "120px", xs: "40px" },
                                    position: "relative", // Add relative positioning to create a stacking context
                                    zIndex: "1"
                                }}
                            >
                                Unlock possibilities
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    color: "#F3F3FF",
                                    fontSize: "16px",
                                    fontFamily: "Anodina"
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur. Fringilla accumsan neque augue
                                <br /> quis. Luctus justo eget massa elit neque lectus. Fringilla accumsan neque<br />
                                augue quis. Luctus justo eget massa
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"

                    }}
                >
                    <Grid >
                        <Box
                            sx={{
                                display: "flex",
                                transform: "rotate(90deg)",
                                gap: "6px"
                            }}
                        >
                            <Typography
                                sx={{
                                    width: "100%",
                                    fontSize: "16px",
                                    fontFamily: "Anodina",
                                    color: "#FFFFFF"

                                }}
                            >
                                Scroll down


                            </Typography>
                            <img
                                style={{
                                    transform: "rotate(270deg)"
                                }}
                                src={downarrow}></img>
                        </Box>
                    </Grid>
                    <Grid lg={6}
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            paddingRight: { lg: "100px", xs: "10px" }
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                position: "relative",
                                top: { lg: "0", xs: "30px" }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontFamily: "Anodina",
                                    color: "#FFFFFF",

                                }}
                            >
                                Contact&nbsp;Us
                            </Typography>
                            <img src={rightarrow}></img>
                        </Box>

                    </Grid>
                </Grid>
                <Box
                    sx={{
                        paddingLeft: { lg: "100px", xs: "0px" },
                        paddingRight: { lg: "100px", xs: "0px" },
                        position: "relative",
                        top: { lg: "40px", xs: "60px" },
                        zIndex: "1"
                    }}
                >
                    <Grid container
                        sx={{
                            background: "#F3F3FF",
                            borderRadius: "16px",
                            padding: "16px"
                        }}
                    >
                        <Grid lg={4} xs={12}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <img src={search}></img>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "24px",
                                            fontWeight: "800",
                                            fontFamily: "Anodina",
                                            color: "#281E59"
                                        }}
                                    >
                                        RESEARCH
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            fontFamily: "Anodina",
                                            color: "#281E59"
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur. Fringilla
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid lg={4} xs={12}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <img src={graph}></img>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "24px",
                                            fontWeight: "800",
                                            fontFamily: "Anodina",
                                            color: "#281E59"
                                        }}
                                    >
                                        Planning For Future
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            fontFamily: "Anodina",
                                            color: "#281E59"
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur. Fringilla
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid lg={4} xs={12}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <img src={gift}></img>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "24px",
                                            fontWeight: "800",
                                            fontFamily: "Anodina",
                                            color: "#281E59"
                                        }}
                                    >
                                        Building Your Brand
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            fontFamily: "Anodina",
                                            color: "#281E59"
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur. Fringilla
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            position: "relative",
                            bottom: "40px",
                            right: "10px",
                            zIndex: "-1"
                        }}
                    >
                        <img src={earth}></img>
                    </Box>
                </Box>
            </Grid>

        </>
    )
}

export default Hero
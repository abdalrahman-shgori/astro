import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logoblue.svg"
import face from "../../assets/images/facebook.svg"
import insta from "../../assets/images/instagram.svg"
import twit from "../../assets/images/twitter.svg"
import linked from "../../assets/images/linkedin.svg"
import phone from "../../assets/images/phone.svg"
import email from "../../assets/images/email.svg"
import location from "../../assets/images/locations.svg"
const social = [
    { img: face },
    { img: insta },
    { img: twit },
    { img: linked },
]
const services = [
    { name: "Social WIFI" },
    { name: "Web development" },
    { name: "Logo design" },
    { name: "Sms marketing" },
]
const explore = [
    { name: "About us" },
    { name: "Our services" },
    { name: "Industries" },
    { name: "Resources" },

]

const style = {
    color: "#4D4BB8",
    fontSize: "16px",
    fontFamily: "Anodina",
    fontWeight: "400"
}
function Footer() {

    return (
        <>
            <Grid
                sx={{

                    background: "#EAEAFF !important",
                    paddingLeft: { lg: "100px", xs: "50px" },
                    paddingRight: { lg: "100px", xs: "50px" },
                    paddingTop: "40px",
                    paddingBottom: "20px",
                }}
            >
                <Grid container>
                    <Grid lg={4}>
                        <Box
                            sx={{
                                gap: "16px",
                                display: "flex",
                                flexDirection: "column",

                            }}
                        >
                            <Box
                            sx={{
                                display:"flex",
                                justifyContent:{lg:"start",xs:"center"}
                            }}
                            >
                                <img src={logo}></img>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        color: "#4D4BB8",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        fontFamily: "Anodina",
                                        maxWidth: { lg: "80%", xs: "100%" }
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetur. Cras eros scelerisque aliquam adipiscing quis consectetur leo. Luctus orci ac potenti aliquet. Cursus cursus at elementum quisque in cursus mauris enim.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "16px",
                                    flexDirection: "column",
                                    marginBottom: { lg: "0px", xs: "20px" }

                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#281E59",
                                        fontSize: "16px",
                                        fontWeight: "800",
                                        fontFamily: "Anodina"
                                    }}
                                >
                                    Follow us
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "12px"
                                    }}
                                >
                                    {social.map((item) => (
                                        <img src={item.img}></img>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid lg={8} container>
                        <Grid lg={3} xs={6}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                justifyContent: "center"
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        color: "#281E59",
                                        fontSize: "16px",
                                        fontWeight: "800",
                                        fontFamily: "Anodina"
                                    }}
                                >
                                    Services
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px"
                                }}
                            >

                                {services.map((item) => (
                                    <Typography
                                        sx={{
                                            color: "#4D4BB8",
                                            fontSize: "16px",
                                            fontFamily: "Anodina",
                                            fontWeight: "400"
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                ))}
                            </Box>
                        </Grid>
                        <Grid lg={3} xs={6}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                justifyContent: "center"
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        color: "#281E59",
                                        fontSize: "16px",
                                        fontWeight: "800",
                                        fontFamily: "Anodina"
                                    }}
                                >
                                    Explore
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px"
                                }}
                            >

                                {explore.map((item) => (
                                    <Typography
                                        sx={{
                                            color: "#4D4BB8",
                                            fontSize: "16px",
                                            fontFamily: "Anodina",
                                            fontWeight: "400"
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                ))}
                            </Box>
                        </Grid>
                        <Grid lg={6} xs={10}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                justifyContent: "center",
                                marginTop: "20px",
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        color: "#281E59",
                                        fontSize: "16px",
                                        fontWeight: "800",
                                        fontFamily: "Anodina"
                                    }}
                                >
                                    Contact us
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                }}
                            >

                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "20px"
                                    }}
                                >
                                    <img src={phone}></img>
                                    <Typography
                                        sx={{
                                            ...style,
                                            display: "flex",
                                            gap: "40px"
                                        }}
                                    >
                                        +99999999999999 
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "20px"
                                    }}
                                >
                                    <img src={email}></img>
                                    <Typography
                                        sx={{
                                            ...style,
                                            display: "flex",
                                            gap: "20px"
                                        }}
                                    >
                                        Exaple@Astrofi1.com
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "20px"
                                    }}
                                >
                                    <img src={location}></img>
                                    <Typography
                                        sx={{
                                            ...style
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
                                    </Typography>
                                </Box>                </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
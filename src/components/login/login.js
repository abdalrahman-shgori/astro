import { Box, Grid,Typography } from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../assets/images/logoLogin.svg"
import logo2 from "../../assets/images/logoLogin2.svg"
import arrow from "../../assets/images/arrowRight.svg"
import insta from "../../assets/images/instaLogin.svg"
import face from "../../assets/images/facebookLogin.svg"
import linked from "../../assets/images/linkedinLogin.svg"
import twit from "../../assets/images/twitterLogin.svg"
import astro from "../../assets/images/astroLogin.svg"
import loginImg from "../../assets/images/loginImg.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./login.css"
import { useNavigate } from "react-router-dom";
const social = [
    { img: insta },
    { img: face },
    { img: linked },
    { img: twit }
]
const textWithLinesStyle = {
    display: 'flex',
    alignItems: 'center',
};

const lineStyle = {
    flex: 1,
    height: '1px',
    background: '#9794A6',
};

const textStyle = {
    margin: '0 10px',
    color: '#9794A6',
};

const text = {
    color: "#281E59",
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Anodina"
}
function Login() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/HomePage")
    }
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    return (

        <>
            <Grid>
                <Grid container>
                    <Grid lg={6}
                        className="backgroundimgLogin"
                        sx={{
                            position: "relative",
                            display: { lg: "block", md: "none", sm: "none", xs: "none" }
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                position: "relative",
                                top: "15%"
                            }}
                        >
                            <img src={logo}></img>
                        </Box>
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: "0%"

                            }}
                        >
                            <img src={loginImg}></img>
                        </Box>


                    </Grid>
                    <Grid lg={6} xs={12}
                        sx={{
                            background: "#DEDDEA",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: "1",
                            height: "100vh"
                        }}
                    >

                        <Box
                            sx={{
                                background: "#F3F3FF  !important",
                                borderRadius: "16px",
                                padding: "30px",
                                width: "65%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px",
                                position: "relative",
                                marginTop: { lg: "70px", xs: "20px" },
                            }}
                        >
                            <Box
                                data-aos="fade-down"
                                data-aos-duration="2500"
                                sx={{
                                    position: "absolute",
                                    zIndex: "-1",
                                    top: "-20%",
                                    display: { lg: "block", md: "none", sm: "none", xs: "none" }
                                }}
                            >
                                <img style={{ width: "100%" }} src={astro}></img>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            >
                                <img src={logo2}></img>
                            </Box>
                            <Box
                                sx={{
                                    width: "100% !important"
                                }}
                            >
                                <input type="text"
                                    placeholder="User Name"
                                    className="custom-input"
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: "100% !important"
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Password"
                                    className="custom-input"
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Typography
                                    sx={{
                                        display: "flex",
                                        gap: "16px"

                                    }}
                                >
                                    <input
                                        type="radio"
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}

                                    />
                                    <Typography
                                        sx={{
                                            ...text
                                        }}
                                    >
                                        Remember Me
                                    </Typography>
                                </Typography>
                                <Typography
                                    sx={{
                                        ...text
                                    }}
                                >
                                    Forgot Password
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            >

                                <button
                                    onClick={handleNavigate}
                                    style={{
                                        background: " linear-gradient(91.94deg, #4D4BB8 3.7%, #A4A2F9 119.13%)",
                                        border: "none",
                                        borderRadius: "50px",
                                        width: "160px",
                                        height: "40px",
                                        color: "#FFFFFF",
                                        fontSize: "16PX",
                                        fontWeight: "800",
                                        fontFamily: "Anodina ",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px",
                                        cursor: "pointer"

                                    }}
                                >
                                    Login

                                    <img src={arrow}></img>
                                </button>
                            </Box>

                            <div style={textWithLinesStyle}>
                                <div style={lineStyle}></div>
                                <div style={textStyle}>Or continue Log in Using</div>
                                <div style={lineStyle}></div>
                            </div>

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "10px",
                                    justifyContent: "center"
                                }}
                            >
                                {social.map((item) => (
                                    <Box
                                        sx={{
                                            display: "flex",
                                        }}
                                    >
                                        <img src={item.img}></img>
                                    </Box>
                                ))}
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "40xp",
                                    justifyContent: "center"
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#9794A6",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        fontFamily: "Anodina"
                                    }}
                                >
                                    Not a Member ?
                                </Typography>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Typography
                                    sx={{
                                        color: "#281E59",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        fontFamily: "Anodina"
                                    }}
                                >
                                    Sign up
                                </Typography>
                            </Box>
                        </Box>


                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default Login
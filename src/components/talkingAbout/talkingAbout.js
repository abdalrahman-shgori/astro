import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import quotes from "../../assets/images/el_quotes.svg"
function Talking() {

    return (

        <>
            <Grid
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "24px"
                }}
            >
                <Grid container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px",
                    }}
                >
                    <Grid lg={3} xs={1.8}>
                        <img src={quotes}></img>
                    </Grid>
                    <Grid lg={5} xs={8}>
                        <Typography
                            sx={{
                                color: "#281E59",
                                fontSize: { lg: "36px", xs: "20px" },
                                fontWeight: "700",
                                fontFamily: "Anodina",
                            }}
                        >
                            What they are talking about Astrofi?
                        </Typography>
                    </Grid>

                    <Grid lg={2.4} xs={1}
                        sx={{
                            display: "flex",
                            justifyContent: "end"
                        }}
                    >            <img
                        style={{
                            transform: "rotate(180deg)"
                        }}
                        src={quotes}></img>
                    </Grid>

                </Grid>
                <Box
                    sx={{
                        paddingLeft: { lg: "100px", xs: "50px" },
                        paddingRight: { lg: "100px", xs: "50px" }
                    }}
                >
                    <Typography
                        sx={{
                            color: "#281E59",
                            fontSize: "16px",
                            fontWeight: "400",
                            fontFamily: "Anodina",
                            lineHeight: "36px"
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Volutpat euismod tortor rhoncus bibendum justo. Eget maecenas semper justo nec amet sed at eu amet. Tellus vel vi. Pellentesque.Lorem ipsum dolor sit amet consectetur. Volutpat euismod tortor rhoncus bibendum justo. Eget maecenas semper justo nec amet sed at eu amet. Tellus vel vi. Pellentesque.Lorem ipsum dolor sit amet consectetur. Volutpat euismod tortor rhoncus bibendum justo. Eget maecenas semper justo nec amet sed at eu amet. Tellus vel vi. Pellentesque.
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        color: "#4D4BB8",
                        fontSize: "16px",
                        fontFamily: "Anodina",
                        fontWeight: "400"
                    }}
                >Name Name
                </Typography>
                <Typography
                    sx={{
                        color: "#4D4BB8",
                        fontSize: "16px",
                        fontFamily: "Anodina",
                        fontWeight: "400"
                    }}
                >Founder Of Company
                </Typography>
            </Grid>
        </>
    )
}

export default Talking
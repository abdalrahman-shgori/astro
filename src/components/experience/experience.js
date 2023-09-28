import React, { useState, useEffect, useRef } from 'react';
import "./experience.css"
import { Box, Grid, Typography } from "@mui/material";
import Logo from "../../assets/images/LOGO2.png"
import rightarrow from "../../assets/images/arrowRight.svg"
import downarrow from "../../assets/images/arrowdown.svg"
import downarrowBlue from "../../assets/images/arrowdownBlue.svg"
const style={
    display:"flex",
    justifyContent:"center",
    marginTop:"10px",
    alignItems:"center"
}

const arra=[
    {num:"20",text:"Years Of Experience"},
    {num:"800",text:"Projects Done"},
    {num:"400",text:"Happy Clients"}
]

function useInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // Stop observing once in view
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return inView;
}

function NumberCounter({ num, text }) {
  const [currentNum, setCurrentNum] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef); // Use the custom hook

  useEffect(() => {
    const targetNum = parseInt(num);

    if (inView && currentNum < targetNum) {
      const interval = setInterval(() => {
        setCurrentNum((prevNum) => {
          if (prevNum + 1 <= targetNum) {
            return prevNum + 1;
          } else {
            clearInterval(interval);
            return targetNum;
          }
        });
      }, 80); 
    }
  }, [num, currentNum, inView]);

    const formattedNum = `${currentNum} +`;

  
    return (
      <div>
        <Typography
        ref={sectionRef}
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#281E59",
            fontSize: "40px",
            fontFamily: "Anodina",
            fontWeight: "800",
          }}
        >
          {formattedNum}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "400",
            fontFamily: "Anodina",
            color: "#281E59",
          }}
        >
          {text}
        </Typography>
      </div>
    );
  }
  
  
function Experience (){

    return(

        <>
        <Grid>
            <Grid className="backgroundimg">
               <Grid container
               sx={{
                gap:"20px",
                paddingTop:"100px"
               }}
               >
                <Grid lg={12} xs={11}
                sx={{
                    ...style,
                }}
                >
                    <Box
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        gap:"6px"
                    }}
                    >
                        <Typography
                        sx={{
                            fontSize:{lg:"24px",xs:"24px"},
                            fontWeight:"400",
                            fontFamily:"Anodina",
                            color:"#F3F3FF",
                            paddingLeft:"20PX"

                        }}
                        >
                        DEDICATED INDUSTRY EXPERTS WITH A High experience team in 
                        </Typography>
                        <img src={Logo}></img>
                    </Box>
                </Grid>
                <Grid lg={12} xs={12}
                sx={{
                    ...style,
                }}
                >

<Box className="mirror-text-container">
                            <Typography className="mirrored-text"

                                sx={{
                                    fontSize: { lg: "62px", xs: "24px" },

                                }}
                            >
                               The Best Team for you project
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#F3F3FF",
                                    fontWeight: "700",
                                    fontFamily: "Anodina",
                                    fontSize: { lg: "64px", xs: "24px" },
                                    position: "relative", // Add relative positioning to create a stacking context
                                    zIndex: "1"
                                }}
                            >
The Best Team for you project

                            </Typography>
                        </Box>
                </Grid>
          <Grid container lg={12}
           sx={{ ...style, 
           paddingLeft: "10px",
           }}>
  {arra.map((item) => (
    <Grid lg={2} xs={12}>
      <NumberCounter num={item.num} text={item.text} />
    </Grid>
  ))}
</Grid>


               </Grid>

               <Grid container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Grid >
                        <Box
                            sx={{
                                display: "flex",
                                transform: "rotate(90deg)",
                                gap: "6px",
                                position:"relative",
                                top:"40px"
                            }}
                        >
                            <Typography
                                sx={{
                                    width: "100%",
                                    fontSize: "16px",
                                    fontFamily: "Anodina",
                                    color: "#281E59"

                                }}
                            >
                                Scroll down


                            </Typography>
                            <img
                                style={{
                                    transform: "rotate(270deg)"
                                }}
                                src={downarrowBlue}></img>
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
                                top: { lg: "0", xs: "30px" },
                                paddingTop:"80px",
                                paddingBottom:{lg:"20px",xs:"40px"}
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
            </Grid>
        </Grid>
        </>
    )
}

export default Experience
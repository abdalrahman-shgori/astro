import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import star from "../../assets/images/star.svg"
import space from "../../assets/images/astron.svg"
import lines from "../../assets/images/lines.svg"

import './features.css'

const styleText={
    color:"#774BCC",
    fontSize:"16px",
    fontWeight:"400",
    fontFamily:"Anodila",
   
}
const styleNum={
    color:"#774BCC",
    fontSize:"36px",
    fontWeight:"800",
    fontFamily:"Anodila"
}

const styleBoth={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
}


function Featucres(){


    return(
        <>
        <Grid container
        sx={{
          paddingLeft:{lg:"100px",xs:"50px"},
          paddingRight:{lg:"0px",xs:"50px"},
          paddingTop:"100px",
          marginTop:"20px",
          background:"#FFFFFF !important"
        }}
        >
             <Grid lg={4}
             sx={{
                position:"relative",
                top:"30px"
             }}
             >
                <Box>
                    <Typography
                    sx={{
                        color:"#281E59",
                        fontSize:{lg:"34px",xs:"24px"},
                        fontWeight:"700",
                        fontFamily:"Anodina",
                        paddingBottom:"20px"
                    }}
                    >
                    Our Key Features And Benefits
                    </Typography>
                    <Typography
                    sx={{
                        color:"#281E59",
                        fontSize:"24px",
                        fontWeight:"400",
                        fontFamily:"Anodina",
                        paddingBottom:"20px",
                        lineHeight:"42px"
                    }}
                    >
                    We have a group of very expert people in different sectors like web development, graphic design, web design, digital marketing, social media marketing, email marketing and more
                    </Typography>
                    <Box
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"20px"
                    }}
                    >
                        <Box 
                        sx={{
                            display:"flex",
                            gap:"30px"
                            
                        }}
                        >
                            <img src={star}></img> 
                        <Typography>The best services</Typography>
                        
                        </Box>
                        <Box
                        sx={{
                            display:"flex",

gap:"30px"                        }}
                        >
                            <img src={star}></img> 
                        <Typography>Free Consultation </Typography>
                        

                        </Box>
                        <Box
                        sx={{
                            display:"flex",

gap:"30px"                        }}
                        >
                            <img src={star}></img>
                        <Typography>24/7 Free support</Typography>
                        

                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid lg={8}
            sx={{
                marginTop:"60px",
                paddingBottom:"40px"
            }}
            >

                <Box
                sx={{
                    position: "relative",
                    bottom: {lg:"50px",xs:"0px"},
                    display:"flex",
                    justifyContent:{lg:"",xs:"center"},
                    marginTop:{lg:"0px",xs:"30px"}
                }}
                >
                <img src={space}  alt="Rotating Space" className="rotating-image" />
                <Box
                sx={{
                    position:"absolute"

                }}
                >
    <div style={{ position:"relative",display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
        sx={{
            position:"absolute",
            top:"-8%"
            
        }}
        > 
  <Typography
  sx={{
    ...styleBoth,
    ...styleNum
  }}
  >
    360K
    <Typography
    sx={{
        ...styleText
    }}
    >
    Happy customer
    </Typography>
    
  </Typography>
  </Box>
  <div style={{ position:"relative",display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    <Box
    sx={{
        position:"absolute",
        left:"-9%"

    }}
    >
    <Typography
    sx={{
        ...styleNum,
        ...styleBoth,
        position:"relative",
        top:{lg:"200px",xs:"120px"}
    }}
    >
      100%
      <Typography
      sx={{
        ...styleText
      }}
      >
      Positive Rating
      </Typography>
    </Typography>
    </Box>
    <img src={lines} style={{ maxWidth: '100%' }}  alt="Lines"  />
    <Box 
    sx={{
        position:"absolute",
        right:"-13%"
    }}
    >
    <Typography
    sx={{
        position:"relative",
        top:{lg:"200px",xs:"120px"},
        ...styleBoth,
        ...styleNum
    }}
    >
      874+
      <Typography
      sx={{
        ...styleText
      }}
      >
      Total Branch
      </Typography>
    </Typography>
    </Box>
  </div>
  <Box
  sx={{
    position:"absolute",
    bottom:"-8%"
  }}
  > 
  <Typography
  sx={{
    ...styleBoth,
    ...styleNum
  }}
  >
  25
    <Typography
    sx={{
        styleText
    }}
    >
    Year of Experience
    </Typography>
  </Typography>
  </Box>
</div>




                </Box>

                </Box>

            </Grid>
           
        </Grid>
        </>
    )
}
export default Featucres
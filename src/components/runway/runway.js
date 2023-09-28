import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect,useState } from "react";
import space from "../../assets/images/sapce.png"
import rent from "../../assets/images/rent.svg"
import nickelodean from "../../assets/images/nickelodean.svg"
import safe from "../../assets/images/safe.svg"
import samsung from "../../assets/images/samsung.svg"
import pintrest from "../../assets/images/pintrest.svg"
import ebay from "../../assets/images/ebay.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';


const style={
    display:"flex",
    justifyContent:"center",
}

function RunWay(){
    const [sectionInView, setSectionInView] = useState(false);

    useEffect(() => {
  // Initialize AOS
  AOS.init();

  // Add scroll event listener to detect if the section is in the viewport
  const handleScroll = () => {
    const section = document.getElementById('your-section-id');

    if (section) {
      const sectionRect = section.getBoundingClientRect();
      const isSectionInView = sectionRect.top <= window.innerHeight;

      if (isSectionInView !== sectionInView) {
        setSectionInView(isSectionInView);
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [sectionInView]);
  useEffect(() => {
      // Initialize AOS
      AOS.init();
  
      // Add scroll event listener to detect if the section is in the viewport
      const handleScroll = () => {
        const section = document.getElementById('your-section-id');
  
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          const isSectionInView = sectionRect.top <= window.innerHeight;
  
          if (isSectionInView !== sectionInView) {
            setSectionInView(isSectionInView);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [sectionInView]);

    return(

        <>
        <Grid container
        sx={{
            display:"flex",
            alignItems:"center",
            marginTop:"120px",
            background:"#F3F3FF",
            maxWidth:"100%"
        }}
        >
            <Grid lg={4} xs={12}
           sx={{
            display:"flex",
            alignItems:"center"
           }}
            >
                <Box
                data-aos="fade-right"
                data-aos-duration="500"
                >
                    <img style={{
                        width:"100%"
                    }} src={space}></img>
                </Box>
                <Box
                data-aos="fade-right"
                data-aos-duration="1000"

                 sx={{
                    position:"relative",
                    right:"40px"
                }}
                >
                    <img src={rent}></img>
                </Box>

            </Grid>
            
            <Grid lg={1.6} xs={6}
             sx={{
                ...style,
                marginTop:{lg:"0px",xs:"20px"}
            }}
            >

            <Box
              data-aos="fade-right"
              data-aos-duration="1500"
            >
                    <img src={nickelodean}></img>
                </Box>
            </Grid>
            <Grid lg={1.6} xs={6}
             sx={{
                ...style,
                marginTop:{lg:"0px",xs:"20px"}
            }}
            >
            <Box
              data-aos="fade-right"
              data-aos-duration="2000"
            >
                    <img src={safe}></img>
                </Box>
            </Grid>
            <Grid lg={1.6} xs={6}
             sx={{
                ...style,
                marginTop:{lg:"0px",xs:"20px"}
            }}
            >
            <Box
              data-aos="fade-right"
              data-aos-duration="2500"
            >
                    <img src={samsung}></img>
                </Box>
            </Grid>
            <Grid lg={1.6} xs={6}
             sx={{
                ...style,
                marginTop:{lg:"0px",xs:"20px"}
            }}
            >
            <Box
              data-aos="fade-right"
              data-aos-duration="3000"
            >
                    <img src={pintrest}></img>
                </Box>
            </Grid>
            <Grid lg={1.6} xs={6}
            sx={{
                ...style,
                marginTop:{lg:"0px",xs:"20px"}
            }}
            >
            <Box
              data-aos="fade-right"
              data-aos-duration="3000"
            >
                    <img src={ebay}></img>
                </Box>
            </Grid>

        </Grid>
        </>
    )
}

export default RunWay
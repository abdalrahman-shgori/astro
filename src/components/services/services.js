import React, { useEffect, useState } from "react";
import space from "../../assets/images/space.png"
import { Box, Grid, Typography } from "@mui/material";
import rightarrow from "../../assets/images/arrowRight.svg"
import webdeveloper from "../../assets/images/webdeve.svg"
import logoDesign from "../../assets/images/logoDesign.svg"
import wifiSolution from "../../assets/images/wifiSolution.svg"
import smsMarketing from "../../assets/images/smsMarketing.svg"
import webLine from "../../assets/images/webLine.svg"
import logoline from "../../assets/images/logoLine.svg"
import wifiline from "../../assets/images/wifiLine.svg"
import smsline from "../../assets/images/smsLine.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
const servicesArray=[
    {name:"Web Development",
    id:0,
    text:"Lorem ipsum dolor sit amet consectetur. Orci urna mi in est sit felis. Et nisl diam volutpat lectus scelerisque. Dui nunc arcu amet semper risus tristique.",
    img:webdeveloper,
    btn:"Show Service Details",
    btnarrow:rightarrow,
    line:webLine
},
{name:"Logo Design",
id:1,
text:"Lorem ipsum dolor sit amet consectetur. Orci urna mi in est sit felis. Et nisl diam volutpat lectus scelerisque. Dui nunc arcu amet semper risus tristique.",
img:webdeveloper,
btn:"Show Service Details",
btnarrow:rightarrow,
line:logoline

},
{name:"Wifi Solution",
id:2,
text:"Lorem ipsum dolor sit amet consectetur. Orci urna mi in est sit felis. Et nisl diam volutpat lectus scelerisque. Dui nunc arcu amet semper risus tristique.",
img:wifiSolution,
btn:"Show Service Details",
btnarrow:rightarrow,
line:wifiline

},
{name:"Sms Marketing",
id:3,
text:"Lorem ipsum dolor sit amet consectetur. Orci urna mi in est sit felis. Et nisl diam volutpat lectus scelerisque. Dui nunc arcu amet semper risus tristique.",
img:smsMarketing,
btn:"Show Service Details",
btnarrow:rightarrow,
line:smsline

}
]
const lines=[
    {line1:webLine,line2:logoline,line3:wifiline,line4:smsline}
]
function Services() {
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

    return (
        <>
        <Grid> 
            <Grid container sx={{ marginTop: "10px" }}>
                <Grid lg={3} xs={12}>
                    <Box
                    data-aos="fade-down"
                    data-aos-duration="2500"

                    sx={{
                        paddingLeft:"20px",
                        position:"relative",
                        top:"40px"
                    }}
                    > 
                    <img src={space}></img>
                    </Box>
                </Grid>
                <Grid lg={6.1} xs={12}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Box className="mirror-text-container">
                        <Typography className="mirrored-text"

                            sx={{
                                fontSize: { lg: "64px", xs: "44px" },
                                lineHeight: { lg: "120px", xs: "44px" },

                            }}
                        >
                            Services
                        </Typography>
                        <Typography
                            sx={{
                                color: "#F3F3FF",
                                fontWeight: "700",
                                fontFamily: "Anodina",
                                fontSize: { lg: "64px", xs: "40px" },
                                lineHeight: { lg: "120px", xs: "40px" },
                                position: "relative", // Add relative positioning to create a stacking context
                                zIndex: "1",
                                color: "#281E59 !important"

                            }}
                        >
                            Services
                        </Typography>

                    </Box>
                    <Typography
                        sx={{
                            color: "#281E59",
                            fontSize: {lg:"36px",xs:"24px"},
                            fontWeight: "400",
                            fontFamily: "Anodina",
                            
                        }}
                    >
                        Unique approach to driving results
                    </Typography>
                </Grid>

            </Grid>
            <Grid container
            sx={{
                paddingLeft:{lg:"100px",xs:"50px"},
                paddingRight:{lg:"100px",xs:"50px"},

            }}
            >
                {servicesArray.map((item)=>(
                    <Grid lg={5.7} container 
                    className={sectionInView ? 'animated-element' : ''}
            data-aos={item.id === 0 ? "fade-down-right" : item.id===1 ? "fade-down-left" : item.id==2 ? "fade-up-right" : item.id===3 ? "fade-up-left" : ""}
            data-aos-duration={item.id === 0 ? "2500" : item.id===1 ? "2500" : item.id==2 ? "3000" : item.id===3 ? "3000" : ""}

                    sx={{
                        
                        boxShadow: " 2px 4px 8px 0 rgba(125, 88, 192, 0.2)",
                        borderRadius: "16px",
                        paddingLeft: { lg: "0px", xs: "10px" },
                        paddingRight: { lg: "0px", xs: "10px" },
                        marginTop: "20px",
                        justifyContent: "center !important",
                        alignItems: "center",
                        marginRight:{lg:"20px",xs:"0px"}
                    }}
                    >
                        <Grid lg={4}>
                            <Box
                            sx={{
                                position:"relative",
                            }}
                            > 
                        <img  src={item.img}></img>
                        </Box>
                           {lines.map((items)=>(
                            <>
                            <Grid
                            sx={{
                                position:"relative"
                                
                            }}
                            >
                        <Box
                        sx={{
                            position:"fixed",
                            left:"0%",
                            bottom:"-7px"
                        }}
                        >
                       {item.id === 0 ? <img src={items.line1}></img> : ""}
                        </Box>
                        <Box
                        sx={{
                            position:"fixed",
                            left:"0%",
                            bottom:"-7px"
                        }}
                        >
                       {item.id === 1 ? <img src={items.line2}></img> : ""}
                        </Box>
                        <Box
                        sx={{
                            position:"fixed",
                            right:"0%",
                            top:"-7px",
                        transform:"rotate(180deg)"
                        
                        }}
                        >
                       {item.id === 2 ? <img src={items.line2}></img> : ""}
                        </Box>
                        <Box
                        sx={{
                            position:"fixed",
                            right:"0%",
                            top:"-1px",
                        
                        }}
                        >
                       {item.id === 3 ? <img src={items.line4}></img> : ""}
                        </Box>
                        </Grid>
                        </>
                        
                        ))}
                        </Grid>
                        <Grid lg={5.1}
                        sx={{
                            gap:"8px",
                            display:"flex",
                            flexDirection:"column",
                            paddingBottom:{lg:"0px",xs:"16px"},
                            
                        }}
                        >

                            <Typography
                            sx={{
                                color:"#281E59",
                                fontSize:"24px",
                                fontWeight:"700",
                                fontFamily:"Anodina"
                            }}
                            >
                                {item.name}
                            </Typography>
                            <Typography
                            sx={{
                                color:"#281E59",
                                fontSize:"16px",
                                fontWeight:"300",
                                fontFamily:"Anodina",
                                paddingBottom:"8px"
                            }}
                            >
                                {item.text}
                            </Typography>
                            <Box
                            sx={{
                                paddingBottom:"40px"
                            }}>
                            <Box
                            sx={{
                                background: "linear-gradient(90deg, #4D4BB8 10%, #A4A2F9 100%)",
                                borderRadius:"50px",
                                width:{lg:"80%",xs:"100%"},
                                padding:"8px",
                                display:"flex",
                                alignItems:"center",
                                gap:"8px",
                                justifyContent:"center",
                                
                            }}
                            >
                                <Typography
                                sx={{
                                    color:"#FFFFFF",
                                    fontSize:"16px",
                                    fontFamily:"Anodina"
                                }}
                                >
                                    {item.btn}
                                </Typography>
                                <img width="16px" height="22px" src={item.btnarrow}></img>
                            </Box>
                            </Box>
                        </Grid>
                        </Grid>
                ))}

                
            </Grid>

            </Grid>
        </>
    )
}

export default Services
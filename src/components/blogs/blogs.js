import { Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import blog from "../../assets/images/blog.svg"
import blog1 from "../../assets/images/blog1.svg"
import blog2 from "../../assets/images/blog2.svg"
import blog3 from "../../assets/images/blog3.svg"
import arrow from "../../assets/images/arrowdownBlue.svg"
import emogi from "../../assets/images/emoji.svg"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AOS from 'aos';
import 'aos/dist/aos.css';
const blogs = [
    { bread1: "By Name", bread2: "21 Augusta, 2023", bread3: "Digital marketing", title: "Lorem ipsum dolor sit amet consectetur Volutpat ", img: blog1 },
    { bread1: "By Name", bread2: "21 Augusta, 2023", bread3: "Digital marketing", title: "Lorem ipsum dolor sit amet consectetur Volutpat ", img: blog2 },
    { bread1: "By Name", bread2: "21 Augusta, 2023", bread3: "Digital marketing", title: "Lorem ipsum dolor sit amet consectetur Volutpat ", img: blog3 }
]

function Blog() {
    const [sectionInView, setSectionInView] = useState(false);

    useEffect(() => {
        AOS.init();

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
        AOS.init();

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
            <Grid
                sx={{
                    marginTop: "20px",
                    paddingTop: "20px",
                    paddingLeft: { lg: "100px", xs: "50px" },
                    paddingRight: { lg: "100px", xs: "50px" },
                    background: "linear-gradient(267.55deg, rgba(105, 100, 245, 0.05) -7.76%, rgba(106, 101, 245, 0.02) 51.94%, rgba(108, 101, 245, 0.3) 121.63%, rgba(108, 101, 245, 0) 122.5%)",

                }}
            >
                <Grid container>
                    <Grid lg={5.5}
                        className={sectionInView ? 'animated-element' : ''}

                        data-aos="fade-right"
                        data-aos-duration="3500"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { lg: "20px", xs: "10px" }
                        }}
                    >
                        <Box className="mirror-text-container">
                            <Typography className="mirrored-text"

                                sx={{
                                    fontSize: { lg: "36px", xs: "44px" },

                                }}
                            >
                                Our Blogs
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#281E59",
                                    fontWeight: "700",
                                    fontFamily: "Anodina",
                                    position: "relative",
                                    right: "7px",
                                    fontSize: { lg: "36px", xs: "40px" },
                                    position: "relative",
                                    zIndex: "1"
                                }}
                            >
                                Our Blogs
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    color: "#281E59",
                                    fontSize: "24px",
                                    fontWeight: "400",
                                    fontFamily: "Anodina"
                                }}
                            >
                                BLOG INSIGHTS
                            </Typography>
                        </Box>
                        <Box>
                            <img
                                style={{
                                    maxWidth: "100%"
                                }}
                                src={blog}></img>
                            <div role="presentation">
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link underline="hover" href="/"
                                        sx={{
                                            color: "#774BCC",
                                            fontSize: { lg: "16px", xs: "13px" },
                                            fontWeight: { lg: "0", xs: "500" },
                                            fontFamily: "Anodina"
                                        }}
                                    >
                                        By Name
                                    </Link>
                                    <Link
                                        underline="hover"
                                        href="/material-ui/getting-started/installation/"
                                        sx={{
                                            color: "#774BCC",
                                            fontSize: { lg: "16px", xs: "13px" },
                                            fontWeight: { lg: "0", xs: "500" },
                                            fontFamily: "Anodina"
                                        }}
                                    >
                                        21 Augusta, 2023
                                    </Link>
                                    <Typography
                                        sx={{
                                            color: "#0088DB",
                                            fontSize: { lg: "16px", xs: "13px" },
                                            fontWeight: { lg: "0", xs: "500" },
                                            fontFamily: "Anodina"
                                        }}
                                    >Digital marketing</Typography>
                                </Breadcrumbs>
                            </div>

                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    color: "#281E59",
                                    fontSize: "26px",
                                    fontWeight: "700",
                                    fontFamily: "Anodina",
                                    lineHeight: "30px",
                                    textAlign: "justify"
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur Volutpat
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "12px"
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#281E59",
                                    fontSize: "13px",
                                    fontWeight: "800",
                                    fontFamily: "Anodina"
                                }}
                            >
                                Read Full article
                            </Typography>
                            <img
                                style={{
                                    transform: "rotate(-90deg)"
                                }}
                                src={arrow}></img>
                        </Box>


                    </Grid>
                    <Grid lg={6.5}
                        className={sectionInView ? 'animated-element' : ''}

                       
                        sx={{
                            paddingTop: { lg: "36px", xs: "0px" },
                            paddingBottom: "20px",
                            position: "relative"
                        }}
                    >
                        {blogs.map((item) => (
                            <>
                                <Grid container
                                 data-aos="fade-left"
                                 data-aos-duration="3500"
                                    sx={{
                                        display: "flex",
                                        gap: { lg: "30px", xs: "0px" },
                                        marginTop: { lg: "0px", xs: "30px" }

                                    }}
                                >
                                    <Grid lg={3} xs={8}>
                                        <img src={item.img}></img>
                                    </Grid>
                                    <Grid lg={8}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "12px"
                                        }}
                                    >
                                        <Box>
                                            <Breadcrumbs aria-label="breadcrumb">
                                                <Link underline="hover" href="/"
                                                    sx={{
                                                        color: "#774BCC",
                                                        fontSize: { lg: "16px", xs: "13px" },
                                                        fontFamily: "Anodina",
                                                        fontWeight: { lg: "0", xs: "500" }
                                                    }}
                                                >
                                                    {item.bread1}
                                                </Link>
                                                <Link
                                                    underline="hover"
                                                    href="/material-ui/getting-started/installation/"
                                                    sx={{
                                                        color: "#774BCC",
                                                        fontFamily: "Anodina",
                                                        fontSize: { lg: "16px", xs: "13px" },
                                                        fontWeight: { lg: "0", xs: "500" }
                                                    }}
                                                >
                                                    {item.bread2}
                                                </Link>
                                                <Typography
                                                    sx={{
                                                        color: "#0088DB",
                                                        fontSize: { lg: "16px", xs: "13px" },
                                                        fontFamily: "Anodina",
                                                        fontWeight: { lg: "0", xs: "500" }
                                                    }}
                                                >{item.bread3}</Typography>
                                            </Breadcrumbs>

                                        </Box>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    color: "#281E59",
                                                    fontWeight: "700",
                                                    fontFamily: "Anodina",
                                                    lineHeight: "30px",
                                                    fontSize: "26px",

                                                }}
                                            >
                                                Lorem ipsum dolor sit amet consectetur Volutpat
                                            </Typography>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: "12px"
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#281E59",
                                                    fontSize: "13px",
                                                    fontWeight: "800",
                                                    fontFamily: "Anodina"
                                                }}
                                            >
                                                Read Full article
                                            </Typography>
                                            <img
                                                style={{
                                                    transform: "rotate(-90deg)"
                                                }}
                                                src={arrow}></img>
                                        </Box>

                                    </Grid>
                                </Grid>
                            </>
                        ))}

                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default Blog;
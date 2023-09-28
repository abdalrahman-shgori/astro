import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import facebook from "../../assets/images/facebook.svg"
import linkedin from "../../assets/images/linkedin.svg"
import twit from "../../assets/images/twitter.svg"
import inst from "../../assets/images/instagram.svg"
import ukflag from "../../assets/images/ukflag.svg"
import sa from "../../assets/images/sa.png"
import './LanguageDropdown.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Grid } from '@mui/material';
function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

const socialmed = [
  { img: facebook },
  { img: linkedin },
  { img: twit },
  { img: inst }
]
export default function StaticNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    toggleDropdown();
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        sx={{
          background: "#F3F3FF",
          width: "100%",
          paddingLeft: { lg: "50px", xs: "0px" },
          paddingRight: { lg: "50px", xs: "0px" },
          boxShadow: '2px 0px 8px 0px rgba(40, 30, 89, 0.1)'
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",

          }}
        >
          <Typography variant="h6" component="div"
            sx={{
              color: "#281E59"
            }}
          >

            <div className={`language-dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
              <div className="flag">
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center"
                  }}
                  src={selectedLanguage == "EN" ? ukflag : sa} alt="Flag" />
              </div>

              <div className="language">{selectedLanguage}</div>
              <div className="dropdown-arrow">
                <i className={`fas fa-chevron-down ${isOpen ? 'open' : ''}`} />
              </div>
              {isOpen && (
                <Grid className="dropdown-content"
                sx={{
                  width:{lg:"5%",xs:"20%"},
                  display:"flex",
                  flexDirection:"column"
                }}
                >
                  <div className="language-option" onClick={() => changeLanguage('EN')}>
                    EN
                  </div>
                  <div className="language-option" onClick={() => changeLanguage('AR')}>
                    AR
                  </div>

                </Grid>
              )}
              <div className="dropdown-arrow">
                {isOpen ? <KeyboardArrowUpIcon
                  className={`arrow-icon ${isOpen ? 'open' : ''}`}
                /> : <KeyboardArrowDownIcon
                  className={`arrow-icon ${isOpen ? 'open' : ''}`}
                />}

              </div>
            </div>
          </Typography>
          <Typography
            sx={{
              color: "green"
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px"
              }}
            >
              {socialmed.map((item, index) => (
                <img style={{ width: "24px", height: "24px" }} key={index} src={item.img} alt={`Social Media ${index}`} />
              ))}
            </Box>


          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
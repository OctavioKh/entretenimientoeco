import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Groups3Icon from "@mui/icons-material/Groups3";
import Grid from "@mui/material/Grid";
import SearchIcon from '@mui/icons-material/Search';

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import eco from "../assets/cal.jpg";

import data from "./data";

import Main from "./Main";
import Modalx from "./Modal";
import Calendar from "./Calendar";
import Live from "./live";
import Searchbar from './Searchbar'

import icono from "../assets/eco-03.png";
import About from "./About";
import { Typography } from "@mui/material";

const linkos = ["O", "live", "ECO"];
const fexhas = data?.map((fec) => fec.fecha?.map((ay) => +ay.day.slice(0, 2)));
const fe = fexhas?.map((f) => parseInt(f));

// const fexhas = [1,2,3]

// function removeDuplicates(arr) {
//   return arr.filter((item,
//       index) => arr.indexOf(item) === index);
//}

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  fontFamily: "Britti Medium",
  fontSize: "4vw",

}));

const theme = createTheme({
  typography: {
    fontFamily: "Britti Bold",
  },
  bgcolor: "#a5c4c6",
  palette: {
    primary: {
      main: "#a5c4c6",
    },
    secondary: {
      main: "#856c8a",
    },
  },
});

// import data from './data';

const drawerWidth = 75;
// const drawerWidth = 360;
export default function SideBar() {
  const [highlightedDays, setHighlightedDays] = useState(fe);

  // alert(highlightedDays)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledBox className="sidebar" s > 
        <StyledBox sx={{ display: "flex" }}>
          {/* <CssBaseline sx /> */}
          <Drawer 
            variant="permanent"
            sx={{
              height:'100%',
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                backgroundColor: theme.palette.primary.main,
                boxSizing: "border-box",
              },
            }}
          >
            <StyledBox sx={{ overflow: "auto", height:'100vh', '&::-webkit-scrollbar': {display: 'none'}
 }}>
              <List>
                {linkos.map((text, index) => (
                  <ListItem key={text} disablePadding>
                    {index === 0 ? (
                      <ListItemButton href="/">
                        <img
                          className="eco-icono"
                          src={icono}
                          sx={{ color: theme.palette.secondary.main }}
                          style={{ width: "32px" }}
                          alt={icono}
                        />
                      </ListItemButton>
                    ) : index === 1 ? (
                      <ListItemButton href="/live">
                        <ListItemText
                          sx={{
                            fontFamily: "Britti Bold",
                            textOrientation: "sideways",
                            writingMode: "vertical-rl",
                            transform: "rotate(-180deg)",
                            padding: "4px",
                          }}
                          primary={text}
                        />
                      </ListItemButton>
                    ) : index === 2 ? (
                      <ListItemButton href="/about">
                        <Grid  sx={{
                            fontFamily: "Britti Bold",
                            textOrientation: "sideways",
                            writingMode: "vertical-rl",
                            transform: "rotate(-180deg)",
                            padding: "4px",
                            display: 'flex'
                          }}>
                        <ListItemText
                          primary={text}
                        />
                        <Typography>®</Typography>
                        </Grid>
                        
                      </ListItemButton>
                    ) : null}
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Modalx foto={eco} />
              <Divider />

              <List>
                <ListItem className="britti" k disablePadding>
                  <ListItemButton>
                    <Calendar highlightedDays={highlightedDays} />
                  </ListItemButton>
                </ListItem>
              
                <ListItem className="britti" k disablePadding>
                  <Button
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <Groups3Icon
                      sx={{
                        color: theme.palette.secondary.main,
                        margin: "4px",
                      }}
                    />{" "}
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    sx={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
                      <MenuItem
                        onClick={handleClose}
                        sx={{ color: theme.palette.primary.main }}
                      >
                        <i
                          sx={{ color: theme.palette.primary.main }}
                          class="fab fa-instagram"
                        ></i>
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        sx={{ color: theme.palette.primary.main }}
                      >
                        <i class="fab fa-tiktok"></i>
                      </MenuItem>
                      <MenuItem
                        sx={{ color: theme.palette.primary.main }}
                        onClick={handleClose}
                      >
                        <i class="fab fa-twitter"></i>
                      </MenuItem>
                      <MenuItem
                        sx={{ color: theme.palette.primary.main }}
                        onClick={handleClose}
                      >
                        <i class="fab fa-youtube"></i>
                      </MenuItem>
                      <MenuItem
                        sx={{ color: theme.palette.primary.main }}
                        onClick={handleClose}
                      >
                        <i class="fab fa-facebook"></i>
                      </MenuItem>
                      <MenuItem
                        sx={{ color: theme.palette.primary.main }}
                        onClick={handleClose}
                      >
                        <i class="fab fa-discord"></i>
                      </MenuItem>
                    </Box>
                  </Menu>
                </ListItem>
                <ListItem className="SearchBar">
                <Grid  sx={{
                            fontFamily: "Britti Bold",
                            textOrientation: "sideways",
                            writingMode: "vertical-rl",
                            transform: "rotate(-90deg)",
                       
                          }}>
                    {/* <SearchBar/> */}
                  </Grid>
                </ListItem>
              </List>
            </StyledBox>
          </Drawer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="live" element={<Live />} />
            </Routes>
          </BrowserRouter>
        </StyledBox>
      </StyledBox>
    </ThemeProvider>
  );
}

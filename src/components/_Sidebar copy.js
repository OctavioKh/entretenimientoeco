import * as React from "react";
import {useState} from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from '@mui/material/Button';

import CssBaseline from "@mui/material/CssBaseline";
// import Toolbar from '@mui/material/Toolbar';
import List from "@mui/material/List";
// import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import icono from "../assets/eco-03.png";
// import eco from "../assets/SPLASH.svg";

import SignInSide from "./Content";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Groups3Icon from "@mui/icons-material/Groups3";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import eventos from "./data";
import Modalx from "./Modal";
import Calendar from './Calendar'
import { Typography } from "@mui/material";

const roji = "red";

const linkos = ["O", "live", "ECO"];

const eco ='https://scontent.fmex11-3.fna.fbcdn.net/v/t39.30808-6/306608135_10160213208249248_5657285652503630214_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=KFaNXhorpCcAX-zM4Gu&_nc_ht=scontent.fmex11-3.fna&oh=00_AfC7zfV7gWGRyIhdG5B0T7nmL6y-18JUkJe2xSKjN43D-g&oe=6384D31D'

const Beich = styled(Drawer)(({ theme }) => ({
  backgroundColor: "#00ff00",
  fontFamily: "Britti Medium",
  fontSize: "4vw",
  // "&:hover": {
  //   backgroundColor: lightGreen[400],
  //   color: theme.palette.getContrastText(grey[900]),
  // },
}));
const Rec = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  fontFamily: "Britti Medium",
  fontSize: "4vw",
  // "&:hover": {
  //   backgroundColor: lightGreen[400],
  //   color: theme.palette.getContrastText(grey[900]),
  // },
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

// const drawerWidth = 65;
const drawerWidth = 465;
export default function SideBar() {


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
      <Rec className="sidebar">
        <Rec sx={{ display: "flex" }}>
          <CssBaseline />
          {/* <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ENTRETENIMIENTO.ECO
          </Typography>
        </Toolbar>
      </AppBar> */}
          <Beich
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,

              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                backgroundColor: theme.palette.primary.main,
                boxSizing: "border-box",
              },
            }}
          >
            {/* <Toolbar /> */}
            <Rec sx={{ overflow: "auto" }}>
              <List>
                {linkos.map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                      {index === 0 ? (
                        <img
                          className="eco-icono"
                          src={icono}
                          sx={{ color: theme.palette.secondary.main }}
                          style={{ width: "32px" }}
                          alt={icono}
                        />
                      ) : (
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
                      )}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Modalx foto={eco} />
              <Divider />

              <List>
                {/* {["Ayo"].map((text, index) => ( */}
                <ListItem className="britti" k disablePadding>
                  <ListItemButton>
                    {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                    {/* <ListItemText
                      sx={{
                        textOrientation: "sideways",
                        writingMode: "vertical-rl",
                        transform: "rotate(-180deg)",
                        padding: "4px",
                      }}
                      primary="All Events"
                    /> */}
                    <Calendar/>
                    <AccessTimeFilledIcon                           style={{ width: "32px" }}
 sx={{padding:'4px'
                     
                       
                      }}/>
                    {/* <CalendarMonthIcon sx={{color:theme.palette.secondary.main,  margin: '4px'}}/> */}
                    {/* <Typography>All Events</Typography> */}
                  </ListItemButton>
                </ListItem>
                <ListItem className="britti" k disablePadding>
                  {/* <ListItemButton> */}
                    {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                    {/* <ListItemText
                        sx={{
                          textOrientation: "sideways",
                          writingMode: "vertical-rl",
                          transform: "rotate(-180deg)",
                          padding: '4px'
                        }}
                        primary="All Events"
                      /> */}
                    {/* <Typography>All Events</Typography> */}
                   

      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
 <Groups3Icon
                    sx={{ color: theme.palette.secondary.main, margin: "4px" }}
                  />      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><i class="fab fa-instagram"></i></MenuItem>
        <MenuItem onClick={handleClose}><i class="fab fa-tiktok"></i></MenuItem>
        <MenuItem onClick={handleClose}><i class="fab fa-twitter"></i></MenuItem>
        <MenuItem onClick={handleClose}><i class="fab fa-youtube"></i></MenuItem>
        <MenuItem onClick={handleClose}><i class="fab fa-facebook"></i></MenuItem>
        <MenuItem onClick={handleClose}><i class="fab fa-discord"></i></MenuItem>
      </Menu>


                  {/* </ListItemButton> */}
                </ListItem>
        

                {/*))}*/}
              </List>
            </Rec>
          </Beich>
          <Rec component="main" sx={{ flexGrow: 1 }}>
            {/* <Toolbar /> */}

            {eventos.slice(0).reverse().map((evento) => (
              <SignInSide
                urlo={evento.url}
                _id={evento.id}
                date={evento.fecha}
                title={evento.nombre}
                artist={evento.artists}
                location={evento.location}
                invitados={evento.invitados}
              />
            ))}
          </Rec>
        </Rec>
      </Rec>
    </ThemeProvider>
  );
}

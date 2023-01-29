import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import { positions } from '@mui/system';
import Paper from "@mui/material/Paper";
import Image from "mui-image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Fechas from "./Fechas";
import Artistas from "./Artistas";

import theme from './theme';

const Cuadrilla = styled(Grid)(({ theme }) => ({
  fontFamily: "Britti Medium",
  fontSize: "4vw",
  direction: "row",
  justifyContent: "center",
  alignItems: "center",  
}));

const BotonBoletos = styled(Button)(({ theme, _id }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
  fontFamily: "Britti medium",
  fontSize: "2vw",
  padding: 10,
  position: "relative",
  bottom: 0,
  width: "100%",

  textAlign: "center",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
}));


export default function Content({
  date,
  title,
  artist,
  _id,
  urlo,
  buy,
  invitados,
}) {
//   const filteredData = data.filter((el) => {
//     if (props.input === '') {
//         return el;
//     }
//     else {
//         return el.text.toLowerCase().includes(props.input)
//     }
// })

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main"  sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          key={_id}
          item
          // xs={12}
          sm={12}
          md={7}
          sx={{
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            // padding:6
          }}
        >
          <Image src={urlo} />
        </Grid>
        <Cuadrilla
          container
          sx={{
            backgroundColor:
              _id % 2 === 0
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
          }}
          item
          // xs={12}
          sm={12}
          md={5}
          component={Paper}
          elevation={6}
          square
          position=""
        
        >
          <Box
        
            sx={{
              // my: 8,
              // mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // padding: 2,
            }}
          >
            {/* TITLE */}
            <Typography className="busqueda"
              sx={{
                color:
                  _id % 2 === 0
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main,
                fontSize: "4.5vw",
                fontFamily: "Britti Bold",
                lineHeight: "3.5vw",
                // padding: 1,
              }}
              sm={{ fontSize: "7.5vw"}}
            >
              {title.map((t) => t.toUpperCase())}
            </Typography>
             {/* TITLE */}

            {/* ARTISTAS */}
            <Artistas artist={artist} className="busqueda" invitados={invitados} _id={_id} />
            {/* ARTISTAS */}
            
            {/* FECHAS */} 
            <Typography
              sx={{
                color: "white",
                fontSize: "3.5vw",
                lineHeight: "2.5vw",
                fontFamily: "Britti Medium",
              }}
            >
              <Fechas fechas={date} _id={_id} />
            </Typography>
            {/* FECHAS */} 
            {/* BOTONES BOLETOS */}
      
            {/* BOTONES BOLETOS */}
          </Box>
        </Cuadrilla>
      </Grid>
    </ThemeProvider>
  );
}



//   <BotonBoletos
//sx={{
  //backgroundColor:
   // _id % 2 === 0
     // ? theme.palette.secondary.main
     // : theme.palette.primary.main,
  //color:
  //  _id % 2 === 0
  //    ? theme.palette.primary.main
    //  : theme.palette.secondary.main,
  //"&hover": {
   // backgroundColor:
     // _id % 2 === 0
       // ? theme.palette.secondary.main
        //: theme.palette.primary.main,
    //color:
      //_id % 2 === 0
      //  ? theme.palette.primary.main
      //  : theme.palette.secondary.main,
 // },
//}}
//_id={_id}
//boletos={buy}
//>
//Boletos
//</BotonBoletos>
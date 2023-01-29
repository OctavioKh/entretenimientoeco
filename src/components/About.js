

// import * as React from 'react';
import Paper from "@mui/material/Paper";
// import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
import Image from "mui-image";
import icono from "../assets/eco-03.png";

import theme from "./theme";
import { Typography } from "@mui/material";

// import Grid from "@mui/material/Grid";

// const Cuadrilla = styled(Grid)(({ theme }) => ({
//     fontFamily: "Britti Medium",
//     fontSize: "4vw",
//     direction: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   }));

//   const headStyles = {
//     letterSpacing:'2vw'
//     };

const headStyles = {
  letterSpacing: ".5vw",
  fontFamily: "Britti Bold",
};

const foto = {
  width: "100%",
  height: "40vw",
  objectFit: "cover",
};

const registered = {
  paddingTop: "1.5vw",
};


const Cuadrilla = styled(Grid)(({ theme }) => ({
  fontFamily: "Britti Medium",
  fontSize: "4vw",
  // direction: "column",
  // justifyContent: "center",
  // alignItems: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  fontFamily: "Britti Medium",
  fontSize: "4vw",
  width: "100%",
}));
const random =
  "https://la-lista.com/wp-content/uploads/2022/04/festival-ceremonia-2022.jpg";

function Live() {
  return (
    <>
      <StyledBox container component="live">
        <Cuadrilla
          component="main"
          sx={{
            pl: 5,
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid direction="row" sx={{ display: "flex" }}>
            <h1
              // sx={
              //   {
              //     //  flexGrow: 1,
              //   }
              // }
              style={headStyles}
            >
              ECO
            </h1>
            <p style={registered}>®</p>

          </Grid>
        </Cuadrilla>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "85%",
            }}
          >
            <Image
              style={foto}
              height="50%"
              width="100%"
              //   fit="none"

              shift="top"
              distance="2rem"
              shiftDuration={100}
              src={random}
            />

            <h5>
              "Existimos para crear espacios que te conectan a personas y
              comunidades con contenidos que inspiran a construir un mundo
              mejor, más diverso e imaginativo"
            </h5>

            <Typography
              sx={{
                fontFamily: "Britti Medium",
                fontSize: "2vw",
                textAlign: "justify",
              }}
            >
              Desde hace más de una década SICARIO, TAPE Y MARKETEN realizaron
              sociedades para llevar a cabo los festivales más significativos en
              México. Ahora, han decidido unirse en un mismo grupo para poder
              ofrecer al mercado la experiencia que cada una puede aportar,
              creando así Grupo ECO, al cual pertenece ECO Entretenimiento. ECO
              Entretenimiento busca ofrecer una mayor organización y hacer más
              atractiva su propuesta de servicios. En pocas palabras: ofrecer
              servicio integral en torno al entretenimiento. Cada empresa se
              enfocará en el área donde tiene especialidad, generando así una
              plataforma que pueda traer nuevos proyectos y continuar con los ya
              existentes. Una unión que creará comunidad y funcionará como
              semillero para la consolidación de la industria.
            </Typography>

            <h6 sx={{ textAlign: "center" }}>
              ECO ENTRETENIMIENTO REUNE LA EXPERIENCIA DE SICARIO, TAPE Y
              MARKETEN PARA CAMBIAR LA FORMA EN LA QUE SE HACE ENTRETENIMIENTO
              EN MÉXICO
            </h6>

            <Typography
              sx={{
                fontFamily: "Britti Medium",
                fontSize: "2vw",
                textAlign: "justify",
              }}
            >
              ECO entretenimiento es un grupo de empresas de distintos
              servicios, desempeñan desde la creación de conceptos, hasta la
              producción, comunicación, estrategias de marketing, diseño,
              servicio de barras, venues y mucho más. Este grupo ha reunido a
              TSM, Código de Barras, Plus, X Fest, Paykey, Surface, CARTEL,
              Sociedad, Dominio, Calibre, Obra Negra, Foro BudLight, Auditorio
              BlackBerry y Sala; para crear una sorprendente asociación de
              entretenimiento en México. ECO entretenimiento y la Sociedad: Con
              iniciativas como Ceremonia Social y colaboraciones con proyectos
              como El Día Después y Pienza Sostenible, busca siempre fomentar
              cambios positivos en la sociedad y el mundo.
            </Typography>
          </Box>
        </Grid>
        <br />
        <img
          className="eco-icono"
          src={icono}
          sx={{ color: theme.palette.secondary.main }}
          style={{ width: "100px" }}
          alt={icono}
        />
        <br />
        <br />
      </StyledBox>
    </>
  );
}

export default Live;

{
  /* <Paper sx={{ 
  width:'100%',
         position: 'absolute',
        backgroundColor: theme.palette.secondary.main,
  
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', 
        backgroundImage: `url(https://source.unsplash.com/random)`,
  }}> 
  </Paper>  */
}

//   return (
//     // <ThemeProvider theme={theme}>
//     // <CssBaseline />
//     <Container maxWidth="lg"    sx={{ flexGrow: 1 }}>
//                 <h1 style={headStyles}>ECO</h1>

// {/* <br/> */}
//     <Cuadrilla component="main"

//     >
// {/*
//   <Paper
//     sx={{
//         width:'100%',
//       position: 'absolute',
//       backgroundColor: 'grey.800',
//       color: '#fff',
//     //   mb: 4,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       backgroundImage: `url(https://source.unsplash.com/random)`,
//     }}
//   >

//     <Box
//       sx={{
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         right: 0,
//         left: 0,
//         backgroundColor: 'rgba(0,0,0,.3)',
//       }}
//     />
//     <Grid container
//     //  sx={{
//     //         // position: 'relative',
//     //         p: { xs: 12, md: 12 },
//     //         pr: { md: 0 },
//     //       }}
//           >
//       {/* <Grid item md={12}>
//         <Box
//           sx={{
//             // position: 'relative',
//             m: { xs: 12, md: 12 },
//             // pr: { md: 0 },
//           }}
//         >
//           <Typography component="h1" variant="h3" color="inherit" gutterBottom>
//              {post.title}
//             AYO
//           </Typography>
//           <Typography variant="h5" color="inherit" paragraph>
//       DESCRIPTION
//           </Typography>
//           <Link variant="subtitle1" href="#">
//          LINK TEXT
//           </Link>
//         </Box>
//       </Grid>   </Paper>
// //   </Cuadrilla>
// //   </Container>
// //   </ThemeProvider>
// //   <Footer
// //     title="Footer"
// //     description="Something here to give the footer a purpose!"
// //   />
// */}
// );
// }

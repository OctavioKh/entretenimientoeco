import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
// import MasonryImageList from './Gallery'
import Gallery from '../assets/images/gallery'


const headStyles = {
  letterSpacing: ".5vw",
  fontFamily: "Britti Bold",
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
}));

function About() {
  return (
    <Cuadrilla component="main" sx={{ pl: 5 }}>
      <Grid direction="row" sx={{ display: "flex", width: '100vh' }}>
        <h1
          sx={
            {
              //  flexGrow: 1,
            }
          }
          style={headStyles}
        >
          LIVE
        </h1>
      </Grid>
      {/* <MasonryImageList/> */}
      <Gallery/>
    </Cuadrilla>
  );
}

export default About;


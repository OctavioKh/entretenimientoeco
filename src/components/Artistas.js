import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import {  ThemeProvider } from "@mui/material/styles";

import theme from './theme';


function Artistas({ artist, invitados, _id }) {
  // console.log(artist); // 👉️ ['A', 'B', 'C', 'D']
  return (
    <ThemeProvider theme={theme}>
      <div
    //  style={{ textOverflow: "ellipsis" }}
    >
      <Box sx={{ alignItems: "center"}} >
        <Typography
          sx={{
            wordBreak: 'break-all',
            color:
              _id % 2 === 0
                ? theme.palette.secondary.main
                : theme.palette.primary.main,

            fontSize: 
           artist?.length > 42 ? '1vw':
            artist?.length >= 16 && artist?.length <= 42 ? '1.1vw' :
            artist?.length > 12  ? "1.4vw" : "1.7vw" ,

            fontFamily: "Britti Bold",
            lineHeight:
            artist?.length >= 16 ? '0vw' :
            artist?.length > 12  ? ".3vw" : "2vw" 
          }}
        >
          <Box sx={{  alignItems: "center" }}>
            {/* <Grid container>
            
      <Grid item xs={6}> */}
            {artist?.length > 10 ? (
              ""
            ) : artist?.length >= 2 ? (
              <>
                <p style={{ fontSize: "1.2vw" }}>Invitados Especiales :</p>
              </>
            ) : artist?.length === 1 ? (
              <>
                {/* <hr style={{ width: "10vw", borderColor: "white" }} />{" "} */}
                <p style={{ fontSize: "1.2vw" }}>Invitado Especial :</p>
              </>
            ) : (
              ""
            )}
            {artist?.length > 12
                ? (
            <Grid  sx={{ padding: 2}} container spacing={2} >
               {artist?.map((title) => (
                    <Grid key={title} item xs={12} sm={artist?.length > 42 ? 4 : 6}>
                      <Grid container>
                        <Grid container justify="space-evenly">
                          <div   className="busqueda" key={title}>{title.toUpperCase()}</div>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                }
            </Grid>) : artist?.map((title) => (
                  <Grid key={title} >
                      <Grid  justify="space-evenly" >
                    <div align='center' key={title}>{title.toUpperCase()}</div>
                    </Grid>
                    </Grid>
                  ))}
<HorizontalRuleIcon sx={{margin:1}}/>
          </Box>
        </Typography>
      </Box>
   
    </div>
    </ThemeProvider>
    
  );
}

export default Artistas;

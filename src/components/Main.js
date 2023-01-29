import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import eventos from "./data";
import Content from "./Content";
import { styled } from "@mui/material/styles";
import theme from "./theme";
import SearchIcon from '@mui/icons-material/Search';


const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  fontFamily: "Britti Medium",
  fontSize: "4vw",
}));

function Main() {
  const [inputText, setInputText] = useState("");


  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = eventos.filter((ele) => {
    if (inputText === "") {
      return ele;
    } else {
        return Object.values(ele).some((val) =>
          String(val).toLowerCase().includes(inputText) 
          )
        }
    }
    );

    const searchedWordsHighlight = (e) => {
      e.preventDefault() ;
      var searchedPara = document.querySelectorAll('.busqueda');
      var words = e.target.value;
      var regex = RegExp(words, 'gi') // case insensitive
      var replacement = '<mark>' + words.toUpperCase() + '</mark>';
      for (let i = 0; i < searchedPara.length; i++) {
          const element = searchedPara[i].innerText;
          if (words != "") {
              let newHTML = element.replace(regex, replacement)
              searchedPara[i].innerHTML = newHTML;
          } else {
              let newHTML = element.replace()
              searchedPara[i].innerHTML = newHTML;
          }
      }
  }


  return (
    <StyledBox component="main" sx={{ flexGrow: 1 }}>
      <Box className="search" sx={{display: 'flex'}}>
        <TextField
          sx={{
            input: { color: theme.palette.secondary.main, fontSize: "3vw" },
            label: { color: theme.palette.secondary.main, fontSize: "3vw" },
          }}
          id="outlined-basic"
          onChange={inputHandler}
          onKeyUp={searchedWordsHighlight}
          variant="outlined"
          fullWidth
          label={<SearchIcon/>}
        />
         
      </Box>

      {[
        ...new Set(
          filteredData
            .slice(0)
            .reverse()
            .map((evento) => (
              <Content
              className='main '
                input={inputText}
                key={evento.id}
                urlo={evento.url}
                _id={evento.id}
                date={evento.fecha}
                title={evento.nombre}
                artist={evento.artists}
                location={evento.location}
                invitados={evento.invitados}
              />
            ))
        ),
      ]}
    </StyledBox>
  );
}

export default Main;

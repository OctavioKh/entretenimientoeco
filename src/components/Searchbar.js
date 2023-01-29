import { React, useState } from "react";
import TextField from "@mui/material/TextField";
// import List from "./List"
import Content from "./Content";
// import "./App.css";

const style = {

    main: {
        display:' flex',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        flexDirection:' column',
        rowGap: '20px'
    },
    
    h1: {
        margin: '10px',
        fontSize: "40px",
        color: 'rgb(1, 1, 59)'
    },
    search: {
        width: '30%'},
 lista: {   fontSize: '20px'
    } 
}

function SearchBar() {
    const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
    
  return (
    <div style={style.main}>
      <div style={style.search}>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <Content input={inputText} />

    </div>
  );
}

export default SearchBar;
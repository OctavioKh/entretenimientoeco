// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import background from './assets/SPLASH-01.png'
// import SearchBar from './components/Searchbar'
import theme from './components/theme';
import { createTheme, ThemeProvider } from "@mui/material/styles";



// function LandingFrame() {
//   const style = {
//       "background-image": `url(${background})`,
//       "background-repeat": "no-repeat",
//       "background-size": "cover",
//       position: "absolute",
//       height: "100%",
//       width: "100%"
//   }
//   return <div style={style}></div>
// }

function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App" >
      {/* <SearchBar/> */}
   <Sidebar />
    </div>
    </ThemeProvider>
  );
}

export default App;

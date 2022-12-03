import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import HamburgerMenu from "./global/HamburgerMenu";
import Dashboard from "./scenes/dashboard";
import Login from "./scenes/login/Login";
import Register from "./scenes/register/Register";
import WatchList from "./scenes/dashboard/watchlist";
import News from "./data/News/News"
import Details from "./scenes/dashboard/details";
import LandingPage from "./global/LandingPage"


function App() {
  const [theme, colorMode] = useMode();
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <div className="app">
        
        {/* <HamburgerMenu /> */}
        <main className="context">
          
          {/* <Topbar className="abc">
          </Topbar> */}
          <Routes>
            <Route path="/" element = {<LandingPage />} />
            <Route path="/home" element = {
            <>
            <div className="app">
            <HamburgerMenu />
            <main className="context">
            <div><Topbar display="flex"/></div>
            <Dashboard />

            </main>

            </div>
            </>
            } />
            {/* <Route path="/dashboard" element = {<Dashboard />} /> */}
            <Route path="/register" element = {<Register />} />
            <Route path="/watchlist" element = {<WatchList />} />
            <Route path="/details" element = {<Details />} />


            <Route path="/login" element = {<Login />} />
            {/* <Route path="/watchlist" element = {<Watchlist />} /> */}
          </Routes>
        </main>

      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

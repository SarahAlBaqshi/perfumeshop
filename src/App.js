import React, { useState } from "react";
import { Route, Switch } from "react-router";

//Styles
import { ListWrapper } from "./styles";
import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";

// Components
import PerfumeList from "./components/PerfumeList";
import PerfumeDetail from "./components/PerfumeDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <Switch>
          <Route path="/perfumes/:perfumeSlug">
            <PerfumeDetail />
          </Route>
          <Route path="/perfumes">
            <PerfumeList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <ListWrapper></ListWrapper>
      </ThemeProvider>
    </div>
  );
}

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "black", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

export default App;

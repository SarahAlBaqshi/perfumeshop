import React, { useState } from "react";

import { observer } from "mobx-react";

//Styles
import { ListWrapper } from "./styles";
import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";

// Components

import NavBar from "./components/NavBar";

// Routes
import Routes from "./components/Routes/Routes";
import shopStore from "./stores/shopStore";
import perfumeStore from "./stores/perfumeStore";

function App() {
  const savedTheme = localStorage.getItem("theme") ?? "light"; //check if theme exists. if not, use light
  const [currentTheme, setCurrentTheme] = useState(savedTheme); // same key as set item

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
        {shopStore.loading || perfumeStore.loading ? (
          <h1>Loading</h1>
        ) : (
          <Routes />
        )}
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

export default observer(App);

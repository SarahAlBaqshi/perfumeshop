import React, { useState } from "react";

//Styles
import {
  Description,
  ShopImage,
  Title,
  ListWrapper,
  ThemeButton,
} from "./styles";
import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";

// Components
import PerfumeList from "./components/PerfumeList";

function App() {
  let [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark " : "Light "} Mode
        </ThemeButton>
        <div>
          <Title>L'arHomme</Title>
          <Description>Aromas of the World</Description>

          <ShopImage
            alt="perfume shop"
            src="https://live.staticflickr.com/3139/2547932791_6bfcb78e83_b.jpg"
          />
        </div>
        <ListWrapper>
          <PerfumeList />
        </ListWrapper>
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

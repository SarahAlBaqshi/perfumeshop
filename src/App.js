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

//Data
import perfumes from "./perfumes";

// Components
import PerfumeList from "./components/PerfumeList";
import PerfumeDetail from "./components/PerfumeDetail";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [perfume, setPerfume] = useState(null);
  const [_perfumes, setPerfumes] = useState(perfumes);

  const deletePerfume = (perfumeID) => {
    const updatedPerfumes = _perfumes.filter(
      (perfume) => perfume.id !== perfumeID
    );
    setPerfumes(updatedPerfumes);
    setPerfume(null);
  };

  const handleVisible = (perfumeID) => {
    const selectedPerfume = perfumes.find(
      (perfume) => perfume.id === perfumeID
    );
    setPerfume(selectedPerfume);
  };
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  const setView = () =>
    perfume ? (
      <PerfumeDetail perfume={perfume} deletePerfume={deletePerfume} />
    ) : (
      <PerfumeList
        perfumes={_perfumes}
        deletePerfume={deletePerfume}
        handleVisible={handleVisible}
      />
    );

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
        {setView()}
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

import React from "react";

//Styles
// import styles from "./styles";
import { Description, ShopImage, Title, ListWrapper } from "./styles";
import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";
// Components
import PerfumeList from "./components/PerfumeList";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
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
  mainColor: "#242424", // main font color
  backgroundColor: "#fefafb", // main background color
  pink: "#ff85a2",
};

export default App;

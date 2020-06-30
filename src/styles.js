//Styled Import
import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #ff85a2;
`;

const Description = styled.h4`
  text-align: center;
`;

const ShopImage = styled.img`
display: block;
margin-left auto;
margin-right: auto;
width 50%;
height: 500px;
width: 500px;`;

const ListWrapper = styled.div`
  justify-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const PerfumeWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.perfume-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

const GlobalStyle = createGlobalStyle`
body{
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.backgroundColor};
    text-align: center;
`;

export { Description, Title, ShopImage, ListWrapper, PerfumeWrapper };
export default GlobalStyle;

const styles = {
  text: { textAlign: "center" },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },

  perfumeImage: { width: "500px", height: "500px", AlignItems: "center" },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  perfume: { margin: "20px" },
};

// export default styles;

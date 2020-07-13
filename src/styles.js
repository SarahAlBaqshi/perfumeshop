//Styled Import
import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Title = styled.h1`
  text-align: center;
  color: #ff85a2;
`;

const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

const Description = styled.h4`
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
body{

    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
    text-align: center;
`;

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

const ShopImage = styled.img`
display: block;
margin-left auto;
margin-right: auto;
width 50%;
height: 500px;
width: 500px;`;

const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;
export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.pink};
  }
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;
export {
  Description,
  Title,
  ShopImage,
  ListWrapper,
  PerfumeWrapper,
  ThemeButton,
  DeleteButtonStyled,
};
export default GlobalStyle;

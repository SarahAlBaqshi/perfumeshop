import React from "react";
import { Description, ShopImage, Title } from "../styles";

const Home = () => {
  return (
    <>
      <Title>L'arHomme</Title>
      <Description>Aromas of the World</Description>

      <ShopImage
        alt="perfume shop"
        src="https://live.staticflickr.com/3139/2547932791_6bfcb78e83_b.jpg"
      />
    </>
  );
};

export default Home;

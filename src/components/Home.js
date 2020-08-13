import React from "react";
import { Description, ShopImage, Title } from "../styles";
import authStore from "../stores/authStore";
import { Redirect } from "react-router";
import { observer } from "mobx-react";

const Home = () => {
  if (authStore.user)
    return (
      <Redirect
        to={authStore.user.shopSlug ? `/shops/${authStore.user.shopSlug}` : "/"}
      />
    );

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

export default observer(Home);

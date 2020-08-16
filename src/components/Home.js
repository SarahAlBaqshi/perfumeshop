import React from "react";
import { Description, ShopImage, Title } from "../styles";
import authStore from "../stores/authStore";
import { Redirect } from "react-router";
import { observer } from "mobx-react";
import Container from "react-bootstrap/Container";

const Home = () => {
  if (authStore.user) {
    return (
      <Redirect
        to={authStore.user.shopSlug ? `/shops/${authStore.user.shopSlug}` : "/"}
      />
    );
  }
  // console.log("Home -> authStore.user.shopSlug", authStore);
  // if (authStore.user.shopSlug) {
  //   return <Redirect to={`/shops/${authStore.user.shopSlug}`} />;
  // }

  return (
    <Container>
      <Title>L'arHomme</Title>
      <Description>Turn heads.</Description>

      <ShopImage
        alt="perfume shop"
        src="https://live.staticflickr.com/3139/2547932791_6bfcb78e83_b.jpg"
      />
    </Container>
  );
};

export default observer(Home);

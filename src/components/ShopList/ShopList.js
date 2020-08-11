import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router";

//Components
import ShopItem from "./ShopItem";
import SearchBar from "../SearchBar";
import AddButton from "../Buttons/AddButton";

//styles
import { Title } from "../../styles";

//Stores
import shopStore from "../../stores/shopStore";
import authStore from "../../stores/authStore";

const ShopList = () => {
  const [query, setQuery] = useState("");

  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;

  const shopList = shopStore.shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopItem shop={shop} key={shop.id} />);
  return (
    <div>
      <Title>Shops</Title>
      <SearchBar setQuery={setQuery} />
      {shopList}
      <AddButton />
    </div>
  );
};

export default observer(ShopList);

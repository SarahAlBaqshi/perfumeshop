import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import ShopItem from "./ShopItem";

//styles
import { Title } from "../../styles";

//Stores
import shopStore from "../../stores/shopStore";
import SearchBar from "../SearchBar";
import AddButton from "../Buttons/AddButton";

const ShopList = () => {
  const [query, setQuery] = useState("");

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

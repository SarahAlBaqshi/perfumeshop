import React from "react";

//Styles
import { ShopItemImage } from "./styles";
import { Link } from "react-router-dom";

const ShopItem = ({ shop }) => {
  return (
    <Link to={`/shops/${shop.slug}`}>
      <ShopItemImage src={shop.image} alt={shop.name} />
    </Link>
  );
};

export default ShopItem;

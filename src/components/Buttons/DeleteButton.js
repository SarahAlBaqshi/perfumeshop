import React from "react";
import { DeleteButtonStyled } from "./styles";
import { observer } from "mobx-react";

//Stores
import perfumeStore from "../../stores/perfumeStore";
import shopStore from "../../stores/shopStore";
import authStore from "../../stores/authStore";

const DeleteButton = ({ perfumeID, shopId }) => {
  const handleDelete = async () => {
    if (perfumeID) perfumeStore.deletePerfume(perfumeID);
    else {
      await shopStore.deleteShop(shopId);
      authStore.user.shopSlug = null;
    }
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(DeleteButton);

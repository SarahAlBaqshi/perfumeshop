import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Styles
import { DetailWrapper } from "../../styles";
//Stores
import shopStore from "../../stores/shopStore";

//Components
import PerfumeList from "../PerfumeList/PerfumeList";
import UpdateButton from "../Buttons/UpdateButton";
import AddButton from "../Buttons/AddButton";
import DeleteButton from "../Buttons/DeleteButton";
import perfumeStore from "../../stores/perfumeStore";

const ShopDetail = () => {
  const { shopSlug } = useParams();
  const shop = shopStore.shops.find((_shop) => _shop.slug === shopSlug);

  if (!shop) return <Redirect to="/shops" />;

  const perfumes = shop.perfumes
    .map((perfume) => perfumeStore.getPerfumeByID(perfume.id))
    .filter((perfume) => perfume);

  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{shop.name}</h4>
          <img src={shop.image} />
          <UpdateButton shop={shop} />
          <DeleteButton shopId={shop.id} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <PerfumeList perfumes={perfumes} />
        <AddButton shop={shop} />
      </div>
    </div>
  );
};

export default observer(ShopDetail);

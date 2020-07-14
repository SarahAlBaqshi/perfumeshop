import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { observer } from "mobx-react";

//Styles
import { DetailWrapper } from "../styles";

// Stores
import perfumeStore from "../stores/perfumeStore";

//Data
import DeleteButton from "./Buttons/DeleteButton";

const PerfumeDetail = () => {
  const { perfumeSlug } = useParams();
  const perfume = perfumeStore.perfumes.find(
    (perfume) => perfume.slug === perfumeSlug
  );

  if (!perfume) return <Redirect to="/perfumes" />;

  return (
    <DetailWrapper>
      <Link to="/perfumes">
        <p>Back to Perfumes</p>
      </Link>
      <h1> {perfume.name}</h1>
      <img src={perfume.image} alt={perfume.name} />
      <p>{perfume.description}</p>
      <p>{perfume.price}</p>
      <DeleteButton perfumeID={perfume.id} />
    </DetailWrapper>
  );
};

export default observer(PerfumeDetail);

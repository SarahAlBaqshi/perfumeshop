import React from "react";
import { useParams, Redirect } from "react-router-dom";

//Styles
import { DetailWrapper } from "../styles";

//Data
import DeleteButton from "./Buttons/DeleteButton";

const PerfumeDetail = (props) => {
  const { perfumeSlug } = useParams();
  const perfume = props.perfumes.find(
    (perfume) => perfume.slug === perfumeSlug
  );

  if (!perfume) return <Redirect to="/perfumes" />;

  return (
    <DetailWrapper>
      <p onClick={() => props.setPerfume()}>Back to Perfumes</p>
      <h1> {perfume.name}</h1>
      <img src={perfume.image} alt={perfume.name} />
      <p>{perfume.description}</p>
      <p>{perfume.price}</p>
      <DeleteButton
        perfumeID={perfume.id}
        deletePerfume={props.deletePerfume}
      />
    </DetailWrapper>
  );
};

export default PerfumeDetail;

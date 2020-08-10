import React, { useState } from "react";
import PerfumeModal from "../../modals/PerfumeModal";

// Styling
import { UpdateButtonStyled } from "./styles";
import ShopModal from "../../modals/ShopModal";

const UpdateButton = ({ perfume, shop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {shop ? (
        <ShopModal isOpen={isOpen} closeModal={closeModal} oldShop={shop} />
      ) : (
        <PerfumeModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldPerfume={perfume}
        />
      )}
    </>
  );
};

export default UpdateButton;

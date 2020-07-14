import React, { useState } from "react";
import PerfumeModal from "../../modals/PerfumeModal";

// Styling
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ perfume }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <PerfumeModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldPerfume={perfume}
      />
    </>
  );
};

export default UpdateButton;

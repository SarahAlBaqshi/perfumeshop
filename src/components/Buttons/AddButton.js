import React, { useState } from "react";

//Modals
import PerfumeModal from "../../modals/PerfumeModal";

//Styles
import { IoIosAddCircle } from "react-icons/io";
import ShopModal from "../../modals/ShopModal";

const AddButton = ({ shop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <IoIosAddCircle className="float-right" size="2em" onClick={openModal} />

      {shop ? (
        <PerfumeModal shop={shop} isOpen={isOpen} closeModal={closeModal} />
      ) : (
        <ShopModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;

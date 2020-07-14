import React, { useState } from "react";

//Modals
import PerfumeModal from "../../modals/PerfumeModal";

//Styles
import { IoIosAddCircle } from "react-icons/io";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <IoIosAddCircle
        className="float-right"
        size="2em"
        onClick={() => setIsOpen(true)}
      />
      <PerfumeModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddButton;

import React, { useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";

const SaveButton = () => {
  const [show, setShow] = useState(false);

  return (
    <button
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="flex items-center border-1 p-0.5 gap-2 text-sm "
    >
      <IoBookmarkOutline />
      {show && <p>Save</p>}
    </button>
  );
};

export default SaveButton;

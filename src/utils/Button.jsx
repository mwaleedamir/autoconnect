import React from "react";

const Button = ({ className, name }) => {
  return (
    <div
      className={` bg-[#6b451a] hover:bg-[#47341d] cursor-pointer ${className}`}
    >
      {name}
    </div>
  );
};

export default Button;

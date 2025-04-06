import React from "react";

const Input = ({labelName, type, name, value, classNameInput, checked, onchange}) => {
  return (
    <div>
      <label className="flex items-center mr-6">
        <input
          type="radio"
          name="userType"
          value="customer"
          className="form-radio"
          checked={formData.userType === "customer"}
          onChange={handleChange}
        />
        <span className="ml-2 dark:text-white">{labelName}</span>
      </label>
    </div>
  );
};

export default Input;

export const signupRadio = [
    {
      labelName: "Customer",
      name: "userType",
      type: "radio",
      value: "customer",
      checked: formData.userType === "customer"
    },
    {
      labelName: "Owner",
      name: "userType",
      type: "radio",
      value: "owner",
      checked: formData.userType === "owner"
    }
  ];
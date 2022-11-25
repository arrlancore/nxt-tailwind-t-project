import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`py-4 px-6
      font-poppins font-medium
      text-[18px] text-primary
      outline-none bg-blue-gradient
      ${styles}`}
      type="button"
    >
      Get Started
    </button>
  );
};

export default Button;

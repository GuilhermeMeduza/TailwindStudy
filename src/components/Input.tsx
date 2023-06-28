"use client";

import { useState } from "react";

type InputProps = {
  className?: string;
};

const Input = ({ className }: InputProps) => {
  const [value, setValue] = useState(null);

  const handleInputChange = (value: any) => {
    setValue(value);
  };
  return (
    <input
      onChange={handleInputChange}
      value={value!}
      className={`w-full p-2 bg-white border border-none shadow-inner rounded-md focus:outline-none focus:none ${className}`}
    />
  );
};
export default Input;

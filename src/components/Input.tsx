import { useState } from "react";

type InputProps = {
  className?: string;
};

const Input = ({ className }: InputProps) => {
  const [value, setValue] = useState();
  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      className={`${className}`}
    />
  );
};
export default Input;

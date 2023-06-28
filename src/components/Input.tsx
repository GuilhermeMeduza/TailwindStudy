type InputProps = {
  className?: string;
  value?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
};

const Input = ({ className, onChange, value, id }: InputProps) => {
  return (
    <input
      id={id}
      onChange={onChange}
      value={value}
      className={`w-full p-2 bg-white border-none shadow-inner rounded-md focus:outline-none focus:none text-black ${className}`}
    />
  );
};
export default Input;

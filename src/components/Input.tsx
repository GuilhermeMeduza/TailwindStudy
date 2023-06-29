type InputProps = {
  className?: string;
  value?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  id?: string;
};

const Input = ({ className, onChange, value, id, onBlur }: InputProps) => {
  return (
    <input
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      className={`w-full p-2 bg-white border-none shadow-inner rounded-md focus:outline-none focus:none text-black ${className}`}
    />
  );
};
export default Input;

type LabelProps = {
  children?: React.ReactNode;
  className?: string;
  htmlFor?: string;
};

const Label = ({ children, className, htmlFor }: LabelProps) => {
  return (
    <label
      className={`class="block text-gray-700 text-sm font-bold mb-2" for="username" ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;

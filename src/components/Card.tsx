type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`max-w-md w-full p-4 bg-white rounded-lg text-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

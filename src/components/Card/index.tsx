type CardProps = {
  children?: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="max-w-md w-full p-4 bg-white rounded-lg text-center">
      {children}
    </div>
  );
};

export default Card;

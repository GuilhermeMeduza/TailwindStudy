type CardProps = {
  children?: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="max-w-md w-full py-4 px-8 bg-white shadow-lg rounded-lg my-20 text-center">
      {children}
    </div>
  );
};

export default Card;

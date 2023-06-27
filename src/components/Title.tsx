type TitleProps = {
  children?: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-gray-800 text-3xl text-black font-bold lg:text-4xl">
      {children}
    </h1>
  );
};

export default Title;

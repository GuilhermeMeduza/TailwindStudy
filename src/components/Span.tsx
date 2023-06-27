type SpanProps = {
  children?: React.ReactNode;
  color?: string;
};

const Span = ({ children, color }: SpanProps) => {
  return (
    <span
      className={`text-gray-800 text-3xl text-black font-bold md:text-${color}-700`}
    >
      {children}
    </span>
  );
};

export default Span;

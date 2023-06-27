type SpanProps = {
  children?: React.ReactNode;
  className?: string;
};

const Span = ({ children, className }: SpanProps) => {
  return (
    <span
      className={`text-gray-800 text-3xl text-black font-bold ${className}`}
    >
      {children}
    </span>
  );
};

export default Span;

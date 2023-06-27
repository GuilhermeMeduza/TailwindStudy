import Image, { StaticImageData } from "next/image";

type ImageBProps = {
  circle?: boolean;
  src?: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

const ImageB = ({
  circle,
  src,
  alt,
  height,
  width,
  className,
}: ImageBProps) => {
  return (
    <Image
      src={src!}
      width={width}
      height={height}
      alt={alt!}
      className={`${className} ${circle ? "rounded-full" : ""}`}
    />
  );
};

export default ImageB;

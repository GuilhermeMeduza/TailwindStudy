import ImageB from "@/components/ImageB";

type PokemonImageProps = {
  data?: any;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

const PokemonImage = ({
  data,
  width,
  height,
  alt,
  className,
}: PokemonImageProps) => {
  const imageUrl = data.sprites.front_default;

  return (
    <ImageB
      src={imageUrl}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default PokemonImage;

import ImageB from "@/components/ImageB";

type PokemonImageProps = {
  imageUrl: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

const PokemonImage = ({
  imageUrl,
  width = 150,
  height = 150,
  alt = "pokemon image",
  className,
}: PokemonImageProps) => {

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

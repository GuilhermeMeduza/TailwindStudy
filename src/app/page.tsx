import Card from "@/components/Card";
import ImageB from "@/components/ImageB";
import Span from "@/components/Span";
import Title from "@/components/Title";

import Pokemon from "@/assets/pokemon.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="flex flex-col items-center">
        <Title>
          Biggest <Span color="red">Card</Span>
        </Title>
        <ImageB
          src={Pokemon}
          width={200}
          height={200}
          alt="Imagem de carta de Pokémon TCG"
          className="pt-4"
        />
      </Card>
    </main>
  );
}

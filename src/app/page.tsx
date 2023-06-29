"use client";

import Card from "@/components/Card";
import ImageB from "@/components/ImageB";
import Span from "@/components/Span";
import Title from "@/components/Title";

import Pokemon from "@/assets/pokemon.png";
import Input from "@/components/Input";
import { useState } from "react";
import Label from "@/components/Label";
import PokemonImage from "@/components/PokemonImage";

export default function Home() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const [s, setS] = useState(null);

  async function fetchPokemonData(name: string) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error("Erro ao chamar a API");
      }
      const data = await response.json();
      console.log(data);
      console.log(data.sprites.front_default);
      setS(data.sprites.front_default);
      setData(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-8 p-24">
      <Card className="flex flex-col items-start gap-y-2">
        <Label htmlFor="name">Nome do Pokémon</Label>
        <Input
          id="name"
          onBlur={async () => await fetchPokemonData(name.toLowerCase())}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Card>
      <Card className="flex flex-col items-center">
        <Title>
          Biggest <Span className="md:text-yellow-500">Card</Span>
        </Title>
        <PokemonImage
          data={s ? s : Pokemon}
          width={200}
          height={200}
          alt="Imagem de carta de Pokémon TCG"
          className="pt-4"
        />
      </Card>
    </main>
  );
}

"use client";

import Card from "@/components/Card";
import ImageB from "@/components/ImageB";
import Span from "@/components/Span";
import Title from "@/components/Title";

import PokemonIMG from "@/assets/pokemon.png";
import Input from "@/components/Input";
import { useState } from "react";
import Label from "@/components/Label";
import PokemonImage from "@/components/PokemonImage";

import type { Pokemon } from "@/types/pokemon";

export default function Home() {

   const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);


  async function fetchPokemonData(name: string) {
    try {

      console.log(name,"name")
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        setPokemonData(null)
        //throw new Error("Erro ao chamar a API");
        return;
      }
      const data: Pokemon = await response.json();
      setPokemonData(data)
      console.log("image",data.sprites.front_default)

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-8 p-24">
      <Card className="flex flex-col items-start gap-y-2">
        <Label htmlFor="name">Nome do Pokémon</Label>
        <Input
          id="search"
          onChange={(e) => fetchPokemonData(e.target.value.toLowerCase())}
        />
      </Card>
        {pokemonData? (
      <Card className="flex flex-col items-center">
        <Title>
          Test<Span className="md:text-yellow-500">Card</Span>
        </Title>
          <PokemonImage
          imageUrl={pokemonData.sprites.front_default}
          width={200}
          height={200}
          alt="Imagem de carta de Pokémon TCG"
          className="pt-4"
          />
      </Card>
          ): null}
    </main>
  );
}

"use client";

import Card from "@/components/Card";
import ImageB from "@/components/ImageB";
import Span from "@/components/Span";
import Title from "@/components/Title";

import Pokemon from "@/assets/pokemon.png";
import Input from "@/components/Input";
import { useState } from "react";
import Label from "@/components/Label";

export default function Home() {
  const [name, setName] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-8 p-24">
      <Card className="flex flex-col items-start gap-y-2">
        <Label htmlFor="name">Nome do Pokémon</Label>
        <Input
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Card>
      <Card className="flex flex-col items-center">
        <Title>
          Biggest <Span className="md:text-yellow-500">Card</Span>
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

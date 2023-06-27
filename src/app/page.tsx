import Card from "@/components/Card";
import Span from "@/components/Span";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <Title>
          Biggest <Span color="red">Card</Span>
        </Title>
      </Card>
    </main>
  );
}

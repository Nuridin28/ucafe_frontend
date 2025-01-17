import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <Nav />
      <Hero />
    </div>
  );
}

import Hero from "../../components/Hero/Hero";
import MyProjects from "../../components/MyProjects/MyProjects";
import About from "../../components/About/About";
import Contant from "../../components/Contact/Contant";
import Values from "../../components/Values/Values";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Values />
      <MyProjects />
      <About />
      <Contant />
    </div>
  );
}

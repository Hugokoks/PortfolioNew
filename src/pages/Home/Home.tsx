import Hero from "../../components/Hero/Hero";
import MyProjects from "../../components/MyProjects/MyProjects";
import About from "../../components/About/About";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MyProjects />
      <About />
    </div>
  );
}

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
    <div className="bg-[#1a1a2e]">
      <Navbar/>
      <Hero/>
    </div>
  );
}

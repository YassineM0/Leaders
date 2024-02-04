import Image from "next/image";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Heroo from "./components/Heroo";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Competitions from "./components/Competitions";
import Cardd from "./components/Cardd"
import Members from "./components/Members";


export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Heroo />
      <About />
      <Sponsors />
      <Competitions />
      <Cardd />
      <Members />

    </main>
  );
}

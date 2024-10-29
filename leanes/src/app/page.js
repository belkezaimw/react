import Image from "next/image";
import Hero from "./component/Home/Hero";
import Hero2 from "./component/Hero2/Hero2";
import Fotter from "./component/Fotter/Footer";
export default function Home() {
  return (
    <div>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <Hero2></Hero2>
      </div>

    </div>
  );
}

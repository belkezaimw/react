import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaEthereum } from "react-icons/fa6";
export default function Hero2() {
  return (
    <div>
      <div className="flex justify-evenly py-32 ">
        <h1 className="flex items-center text-5xl ">
          <SiBinance />
          Binance
        </h1>
        <h1 className="flex items-center text-5xl">
          <FaEthereum />
          ethereum
        </h1>

        <h1 className="flex items-center text-5xl">
          <SiBinance />
          blockchaịn.io
        </h1>
      </div>
      <div>
        <div className="text-center mb-8">
          <h1 className="font-bold text-6xl">About us</h1>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex justify-evenly items-center mb-28 pb-56">
        <img
          src="\Images\Footer\Group 18.png"
          className="l-1/4 w-1/3 p-0 m-0"
        ></img>
        <div className="l-1/4 w-1/4 ">
          <h1 className="text-5xl">Get Poupular NFT</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.{" "}
          </h2>
          <button className="p-5 bg-indigo-700 rounded-lg px-8 mt-16 ml-20 hover:bg-purple-800 duration-300">
              Show more
            </button>
        </div>
      </div>

    </div>
  );
}

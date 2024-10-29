import Image from "next/image";
import { SlUserFollow } from "react-icons/sl";
export default function Hero() {
  return (

      <div className="flex  justify-evenly  mx-52 mt-16">
        <div className=" flex flex-col justify-between mr-20 mt-0">
          <h1 className="text-4xl font-bold ">
            Creat,Sell & Collect Your Own Creative NFT.<br></br>{" "}
            <span className="text-2xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum voluptas praesentium cum soluta omnis libero eius
              veniam.
            </span>
          </h1>

          <div className="flex justify-evenly">
            <button className="p-5 bg-indigo-700 rounded-lg px-8 hover:bg-purple-800 duration-300">
              Explore now
            </button>
            <button className="p-5 bg-slate-500 bg-opacity-20 rounded-lg px-8 hover:bg-gray-700 duration-300">
              sell NFT
            </button>
          </div>
          <div className="flex justify-evenly ">
            <h1 className="font-bold text-4xl ">
            35k+
              <p className="font-normal text-base">Artworks</p>
            </h1>

            <h1 className="font-bold text-4xl">
            20k+
              <p className="font-normal text-base">Artworks</p>
            </h1>

            <h1 className="font-bold text-4xl">
            99k+
              <p className="font-normal text-base">Artworks</p>
            </h1>
          </div>
        </div>

        <div className="">
          <img src="\Images\Home\heroimage.png" alt="hadi tswira ya lbghel" />
        </div>
        
      </div>
      

  );
}

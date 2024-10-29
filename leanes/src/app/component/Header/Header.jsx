import Image from "next/image";
import { FaSearch } from "react-icons/fa";
export default function Header() {
  return (
  <header className="flex justify-evenly items-center pt-4 "> 
    <div className="pt-">
      <img src="Images\Header\PsychoArt.png"></img>
    </div>
    <div>
    <div className="flex items-center bg-white bg-opacity-30 rounded-lg"><FaSearch/><input className="outline-none bg-transparent p-2 pr-6 " placeholder="search items and collections opacity " ></input></div>
    </div>
    <div className="flex justify-evenly space-x-8  items-center">
    <a href="leanes\src\app\collection.js" className="hover:text-purple-800 duration-300">collections </a>
    <a href="" className="hover:text-purple-800 duration-300">featurs </a>
    <a href="" className="hover:text-purple-800 duration-300">FAQ </a>
    <button className="p-2 bg-indigo-700 rounded-lg hover:bg-purple-800 duration-300">Select Walet</button>
    </div>
  </header>   
  );
}

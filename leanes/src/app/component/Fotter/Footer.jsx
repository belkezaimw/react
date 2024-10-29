import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
export default function Fotter() {
  return (
    <div className="m-20">
      <div className="flex justify-evenly">
        <div className="flex flex-col">
            <img src="\Images\Header\PsychoArt.png" className="l-1/2 w-1/2" />
            <h5 className="max-w-44 ">The best NFT marketplace website in the world and feel your experience in selling or buy our work</h5>
        </div>

        <div className="flex flex-col">
            <h1>ABOUT</h1>
            <ul >
                <li>
                Product
                </li>
                <li>
                Resource
                </li>
                <li>
                Term & Condition
                </li>
                <li>
                FAQ
                </li>
            </ul>
        </div>

        <div className="flex flex-col">
            <h1>Company</h1>
            <ul >
                <li>
                Our Team
                </li>
                <li>
                Partner With Us
                </li>
                <li>
                Privacy & Policy
                </li>
                <li>
                Features
                </li>
            </ul>
        </div>
        <div>
        <h1>Contact</h1>
            <ul >
                <li>
                +012 3456789
                </li>
                <li>
                adorableprogrammer@gmail.com
                </li>
            </ul>
            <div className="flex justify-between mt-8">
            <h1><FaInstagram /></h1>
            <IoLogoDiscord />
            <AiOutlineYoutube />
            </div>
            </div>
      </div>

      <div></div>
    </div>
  );
}



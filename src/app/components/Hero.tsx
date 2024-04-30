"use client";

import Button from "./Button";
import { MdArrowOutward } from "react-icons/md";
import Participants from '../resources/logo/participants.png'
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Hero() {
    return (
      <main className="w-full px-5 py-24" style={{
        backgroundImage: `linear-gradient(180deg, #262626 0%, rgba(38, 38, 38, 0.5) 100%), url(${Participants.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="container mx-auto md:px-10 px-5 py-16">
          <h1 className="md:text-5xl text-4xl font-semibold my-3 text-balance text-white">
              Learn How to develop Apps and Improve Your <span className="text-eestec font-bold">Coding</span> Skills with <span className="text-eestec font-bold">EESTEC LC Skopje</span>!
          </h1>
          <p className="md:text-base text-sm text-slate-50 my-3 text-balance leading-none">
          Join us for the 7th edition of Learn How To workshop and <span className="font-medium">Power Your Future!</span>
          </p>
          <Link href={""}>
            <Button text="Apply Now!" icon={MdArrowOutward}></Button>
          </Link>

          <Link href={"https://www.instagram.com/lht_skopje/"}>
              <FaInstagram size={40} color="#149414"></FaInstagram>
          </Link>
        </div>

        
      </main>  
    );
}
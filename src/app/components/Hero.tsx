"use client";

import Button from "./Button";
import { MdArrowOutward } from "react-icons/md";
import Participants from '../resources/logo/participants.png'
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import Image from "next/image";
import nextEvent from "@/app/resources/lht7.jpg";
import { useState, useEffect } from "react";
import { RevealList } from "next-reveal";

export default function Hero() {

  const [eventTime, setEventTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  const [applyTime, setApplyTime] = useState(false);
  const [applyDays, setApplyDays] = useState(0);
  const [applyHours, setApplyHours] = useState(0);
  const [applyMinutes, setApplyMinutes] = useState(0);
  const [applySeconds, setApplySeconds] = useState(0);

  useEffect(() => {

     const target = new Date("05/20/2024 18:00:00");
     const applyTarget = new Date("05/19/2024 23:59:59");
  

    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      const applyDifference = applyTarget.getTime() - now.getTime();

      const ad = Math.floor(applyDifference / (1000 * 60 * 60 * 24));
      setApplyDays(ad);

      const ah = Math.floor((applyDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setApplyHours(ah);

      const am = Math.floor((applyDifference % (1000 * 60 * 60)) / (1000 * 60));
      setApplyMinutes(am);

      const as = Math.floor((applyDifference % (1000 * 60)) / 1000);
      setApplySeconds(as);

      if(d<=0 && h<=0 && m<=0 && s<=0){
        setEventTime(true);
      }

      if(ad<=0 && ah<=0 && am<=0 && as<=0){
        setApplyTime(true);
      }

    }, 1000);

    return () => clearInterval(interval);


    }, []);

    return (
      <main className="w-full px-5 py-24" style={{
        backgroundImage: `linear-gradient(180deg, #262626 0%, rgba(38, 38, 38, 0.5) 100%), url(${Participants.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>

        <RevealList interval={100} delay={500}>
        <div className="container mx-auto md:px-10 px-5 py-16">
          <h1 className="md:text-5xl text-4xl font-semibold my-3 text-balance text-white">
              Learn How to develop Apps and Improve Your <span className="text-eestec font-bold">Coding</span> Skills with <span className="text-eestec font-bold">EESTEC LC Skopje</span>!
          </h1>
          <p className="md:text-base text-sm text-slate-50 my-3 text-balance leading-none">
          Join us for the 7th edition of Learn How To workshop and <span className="font-medium">Power Your Future!</span>
          </p>
          <Link href={"https://forms.gle/Gm3Q5xNAA6hiZMKS8"}>
            <Button text="Apply Now!" icon={MdArrowOutward}></Button>
            <span>Time Left to Apply:</span> <br />
                {
                (applyTime ? (<span className="text-red-500 font-bold">Time for Applying has ended!</span>) : (
                <><span>{applyDays} d <span className="text-eestec font-bold"> : </span> 
                {applyHours} h <span className="text-eestec font-bold"> : </span> 
                {applyMinutes} mins <span className="text-eestec font-bold"> : </span> 
                {applySeconds} sec</span><br /></> )
                )
              }
              
              
          </Link>
          <br />
          <Link href={"https://www.instagram.com/lht_skopje/"}>
              <FaInstagram size={60} color="#149414"></FaInstagram> 
          </Link>
        </div>

        <div className="lg:flex justify-evenly items-center gap-14">
        <h1 className="md:text-5xl text-4xl font-semibold my-3 text-center text-white">
          Next<span> <span className="text-eestec font-bold">event</span> in:</span> <br /> <br />
          {(eventTime ? (<span className="text-eestec font-bold">Event has started!</span>) : (
                <><span>{days} d <span className="text-eestec font-bold"> : </span> 
                {hours} h <span className="text-eestec font-bold"> : </span> 
                {minutes} mins <span className="text-eestec font-bold"> : </span> 
                {seconds} sec</span><br /></> )
                )
              }
          </h1>
          <div>
            <h1 className="md:text-5xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">Coming </span>next:</h1>
          <Image src={nextEvent} alt="Next event" height={500} className="mt-8 mb-8"></Image>
          </div>
                
        </div>

        </RevealList>
      </main>  
    );
}